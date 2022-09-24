import {
  CHANGE_ERROR,
  GET_ALL_CAUSES, GET_ALL_VISIBLE_CAUSES, HIDE_CAUSE, 
} from '../actions'




const initialState = {
  allCauses: [],
  allVisibleCauses: [],
  errorNewCollection : {}
};

function rootReducer( state = initialState, { type, payload } ) {
  switch ( type ) {
    case CHANGE_ERROR:
      return {
        ...state,
        errorNewCollection: payload,
      };
      case GET_ALL_CAUSES:
          return {
            ...state,
            allCauses: payload,
          };
      case GET_ALL_VISIBLE_CAUSES:
        return {
            ...state,
            allVisibleCauses: payload,
        };
      case HIDE_CAUSE:
        return {
            ...state,
            allVisibleCauses: payload,
            allCauses: payload,
        };
      default:
          return state;
  };
};

export default rootReducer;
