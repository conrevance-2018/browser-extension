
import { memo, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as jupiterAPI from 'services/api-jupiter'
import { useRoutes } from 'contexts/router-context'
import { useAccount } from 'contexts/account-context'
import { useNotify } from 'contexts/notify-context'
import Layout from 'Layout'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicTextField from 'components/UI/TextFields/MagicTextField'
import ValueItem from 'parts/ValueItem'
import { PRICE_VALID } from 'utils/constants/validations'
import LINKS from 'utils/constants/links'
import signTransaction from 'utils/helpers/signTransaction';
import MESSAGES from 'utils/constants/messages'

const schema = yup.object().shape({
  amount: PRICE_VALID
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 560,
    padding: theme.spacing(3, 0)
  },
  title: {
    fontSize: 24,
    marginBottom: theme.spacing(2)
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(2, 0)
  }
}));

const BuyAsset = () => {
  const classes = useStyles();
  const { setLoading, routerParams: { asset = {} } = {} } = useRoutes()
  const { accountInfo, passphrase } = useAccount()
  const { routePush } = useRoutes()
  const { onNotify } = useNotify()

  const { control, errors, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = useCallback(async (data) => {
    setLoading(true)
    try {
      const params = {
        asset: asset.asset,
        price: asset?.order?.priceNQT,
        quantity: data.amount * (10 ** asset.decimals),
        publicKey: accountInfo.publicKey
      }

      const { unsignedTransactionBytes = '', errorCode = '' } = await jupiterAPI.placeBidOrder(params);
      if (errorCode) {
        onNotify(MESSAGES.BUY_ASSET_ERROR)
        setLoading(false)
        return;
      }

      const transactionBytes = signTransaction(unsignedTransactionBytes, passphrase)
      const response = await jupiterAPI.broadcastTransaction(transactionBytes);
      if (response?.errorCode) {
        onNotify(MESSAGES.BUY_ASSET_ERROR)
        setLoading(false)
        return;
      }

      setValue('amount', '')
      routePush(LINKS.MY_ACCOUNT)
      onNotify(MESSAGES.BUY_ASSET_SUCCESS)
    } catch (error) {
      console.log(error)
      onNotify(MESSAGES.BUY_ASSET_ERROR)
    }
    setLoading(false)
  }, [asset, accountInfo, passphrase, setLoading, setValue, routePush, onNotify]);

  return (
    <Layout>
      <form
        noValidate
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          align='center'
          color='primary'
          className={classes.title}
        >
          {`${asset.quantityQNT / (10 ** asset.decimals)} ${asset.name}`}
        </Typography>
        <ValueItem
          label='Asset'
          value={asset.asset}
        />
        <ValueItem
          label='Description'
          value={asset.description}
        />
        <Controller
          as={<MagicTextField />}
          name='amount'
          label='Amount'
          type='number'
          error={errors.amount?.message}
          className={classes.input}
          control={control}
          defaultValue={''}
        />
        <ContainedButton
          fullWidth
          type='submit'
          className={classes.button}
        >
          Buy
        </ContainedButton>
      </form>
    </Layout>
  )
}

export default memo(BuyAsset)