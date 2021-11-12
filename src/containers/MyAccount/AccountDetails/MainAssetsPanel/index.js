
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core'
import NextIcon from '@material-ui/icons/NavigateNext';

import { useMainAsset } from 'contexts/asset-context'
import { useRoutes } from 'contexts/router-context'
import TabPanel from 'components/TabPanel'
import LINKS from 'utils/constants/links';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 0
  },
  listItem: {
    padding: theme.spacing(1.5, 2)
  }
}));

const MainAssetsPanel = (props) => {
  const classes = useStyles();
  const { assets } = useMainAsset();
  const { routePush } = useRoutes()

  const assetHandler = (asset) => () => {
    routePush(LINKS.BUY_ASSET, { asset })
  }

  return (
    <TabPanel {...props}>
      <List className={classes.root} aria-label='assets'>
        {assets.map((asset) => (
          <ListItem
            button
            key={asset.asset}
            className={classes.listItem}
            onClick={assetHandler(asset)}
          >
            <ListItemText primary={`${asset.quantityQNT / (10 ** asset.decimals)} ${asset.name}`} />
            <ListItemSecondaryAction>
              <NextIcon />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </TabPanel>
  )
}

export default memo(MainAssetsPanel)