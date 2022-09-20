import {
  GET_ALL_CAUSES, 
} from '../actions'




const initialState = {
  allCauses: []
};

function rootReducer( state = initialState, { type, payload } ) {
  switch ( type ) {
      case GET_ALL_CAUSES:
          return {
              ...state,
              allCauses: payload,
          };
      default:
          return state;
  };
};

export default rootReducer;
