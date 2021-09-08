import TRANSACTION_TYPES from "utils/constants/transaction-types"

const getTransactionType = (type, subtype) => {
  switch (type) {
    case TRANSACTION_TYPES.TYPE_PAYMENT:
      switch (subtype) {
        case TRANSACTION_TYPES.SUBTYPE_PAYMENT_ORDINARY_PAYMENT:
          return 'ORDINARY PAYMENT';
        default:
          return 'ORDINARY PAYMENT';
      }
    case TRANSACTION_TYPES.TYPE_MESSAGING:
      switch (subtype) {
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ARBITRARY_MESSAGE:
          return 'ARBITRARY MESSAGE';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ALIAS_ASSIGNMENT:
          return 'ALIAS ASSIGNMENT';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_POLL_CREATION:
          return 'POLL CREATION';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_VOTE_CASTING:
          return 'VOTE CASTING';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_HUB_ANNOUNCEMENT:
          return 'HUB ANNOUNCEMENT';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ACCOUNT_INFO:
          return 'ACCOUNT INFO';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ALIAS_SELL:
          return 'ALIAS SELL';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ALIAS_BUY:
          return 'ALIAS BUY';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ALIAS_DELETE:
          return 'ALIAS DELETE';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_PHASING_VOTE_CASTING:
          return 'PHASING VOTE CASTING';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ACCOUNT_PROPERTY:
          return 'ACCOUNT PROPERTY';
        case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ACCOUNT_PROPERTY_DELETE:
          return 'ACCOUNT PROPERTY DELETE';
        default:
          return 'ARBITRARY MESSAGE';
      }
    case TRANSACTION_TYPES.TYPE_COLORED_COINS:
      switch (subtype) {
        case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASSET_ISSUANCE:
          return 'ASSET ISSUANCE';
        case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASSET_TRANSFER:
          return 'ASSET TRANSFER';
        case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASK_ORDER_PLACEMENT:
          return 'ASK ORDER PLACEMENT';
        case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_BID_ORDER_PLACEMENT:
          return 'BID ORDER PLACEMENT';
        case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASK_ORDER_CANCELLATION:
          return 'ASK ORDER CANCELLATION';
        case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_BID_ORDER_CANCELLATION:
          return 'BID ORDER CANCELLATION';
        case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_DIVIDEND_PAYMENT:
          return 'DIVIDEND PAYMENT';
        case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASSET_DELETE:
          return 'ASSET DELETE';
        default:
          return 'ASSET ISSUANCE';
      }
    case TRANSACTION_TYPES.TYPE_DIGITAL_GOODS:
      switch (subtype) {
        case TRANSACTION_TYPES.SUBTYPE_DIGITAL_GOODS_LISTING:
          return 'LISTING';
        case TRANSACTION_TYPES.SUBTYPE_DIGITAL_GOODS_DELISTING:
          return 'DELISTING';
        case TRANSACTION_TYPES.SUBTYPE_DIGITAL_GOODS_PRICE_CHANGE:
          return 'PRICE CHANGE';
        case TRANSACTION_TYPES.SUBTYPE_DIGITAL_GOODS_QUANTITY_CHANGE:
          return 'QUANTITY CHANGE';
        case TRANSACTION_TYPES.SUBTYPE_DIGITAL_GOODS_PURCHASE:
          return 'PURCHASE';
        case TRANSACTION_TYPES.SUBTYPE_DIGITAL_GOODS_DELIVERY:
          return 'DELIVERY';
        case TRANSACTION_TYPES.SUBTYPE_DIGITAL_GOODS_FEEDBACK:
          return 'FEEDBACK';
        case TRANSACTION_TYPES.SUBTYPE_DIGITAL_GOODS_REFUND:
          return 'REFUND';
        default:
          return 'LISTING';
      }
    case TRANSACTION_TYPES.TYPE_ACCOUNT_CONTROL:
      switch (subtype) {
        case TRANSACTION_TYPES.SUBTYPE_ACCOUNT_CONTROL_EFFECTIVE_BALANCE_LEASING:
          return 'EFFECTIVE BALANCE LEASING';
        case TRANSACTION_TYPES.SUBTYPE_ACCOUNT_CONTROL_PHASING_ONLY:
          return 'CONTROL PHASING ONLY';
        default:
          return 'EFFECTIVE BALANCE LEASING';
      }
    case TRANSACTION_TYPES.TYPE_MONETARY_SYSTEM:
      return 'MONETARY SYSTEM';
    case TRANSACTION_TYPES.TYPE_DATA:
      switch (subtype) {
        case TRANSACTION_TYPES.SUBTYPE_DATA_TAGGED_DATA_UPLOAD:
          return 'DATA UPLOAD';
        case TRANSACTION_TYPES.SUBTYPE_DATA_TAGGED_DATA_EXTEND:
          return 'DATA EXTEND';
        default:
          return 'DATA UPLOAD';
      }
    case TRANSACTION_TYPES.TYPE_SHUFFLING:
      return 'SHUFFLING';
    default:
      return 'UNDEFINED';
  }
}

export default getTransactionType