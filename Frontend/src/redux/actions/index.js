import axios from "axios";
//TODO CAMBIAR POR FUNCIONALIDAD DE BACK
import { CAUSES_INFO } from "../../Utils/Constants/causes";

const HOST = "http://localhost";


export const GET_ALL_CAUSES = 'GET_ALL_CAUSES';
export const GET_ALL_VISIBLE_CAUSES = 'GET_ALL_VISIBLE_CAUSES';
export const HIDE_CAUSE = 'HIDE_CAUSE';


export const getAllVisibleCauses = () => {
  return async (dispatch) => {
    try {
      const response = CAUSES_INFO.filter(cause => cause.show);
      dispatch({
        type: GET_ALL_VISIBLE_CAUSES,
        payload: response
      });

    } catch(error) {
      console.log(error.message);
    }
  }
}

export const getAllCauses = () => {
  return async (dispatch) => {
    try {
      const response = CAUSES_INFO;
      dispatch({
        type: GET_ALL_CAUSES,
        payload: response
      });

    } catch(error) {
      console.log(error.message);
    }
  }
}

export const hideCause = (causeId) => { 
  //Mapea y oculta causas
  return async (dispatch) => {
    try {
      const response = CAUSES_INFO.map((cause) => {
        if (cause.id === causeId) {
          cause.show = !cause.show;
        }
        return cause;
      });

      dispatch({
        type: HIDE_CAUSE,
        payload: response
      });
    } catch(error) {
      console.log(error.message);
    }
  }
}
