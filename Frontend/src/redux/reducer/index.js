import {
  PANTALLA_ACTUAL, 
} from '../actions'




const initialState = {
  pantallaAcutal: ''
};

function rootReducer( state = initialState, { type, payload } ) {
  switch ( type ) {
      case PANTALLA_ACTUAL:
          return {
              ...state,
              professionals: payload,
          };
      default:
          return state;
  };
};

export default rootReducer;
