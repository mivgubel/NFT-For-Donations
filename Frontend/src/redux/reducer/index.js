import {
  CHANGE_ERROR,
  GET_ACTUAL_RED,
  GET_ALL_CAUSES, GET_ALL_VISIBLE_CAUSES, GET_USER_BALANCE, GET_USER_COLLECTION, HIDE_CAUSE, SET_SPINNER_STATUS, 
} from '../actions'

const initialState = {
  allCauses: [],
  allVisibleCauses: [],
  errorNewCollection : {},
  chain : {},
  connectWalletSpinner : false,
  user : {},
  userCollection : []
};

function rootReducer( state = initialState, { type, payload } ) {
  switch ( type ) {
    case CHANGE_ERROR:
      return {
        ...state,
        errorNewCollection: payload
      };
      case GET_ALL_CAUSES:
          return {
            ...state,
            allCauses: payload
          };
      case GET_ALL_VISIBLE_CAUSES:
        return {
            ...state,
            allVisibleCauses: payload
        };
      case GET_ACTUAL_RED:
        return {
            ...state,
            chain : payload
        };
      case GET_USER_BALANCE:
        return {
            ...state,
            user : payload
        };
      case GET_USER_COLLECTION:
        return {
            ...state,
            userCollection : payload
        };
      case HIDE_CAUSE:
        return {
            ...state,
            allVisibleCauses: payload,
            allCauses: payload
        };
      case SET_SPINNER_STATUS:
        return {
            ...state,
            connectWalletSpinner: payload
        };

      default:
          return state;
  };
};

export default rootReducer;
