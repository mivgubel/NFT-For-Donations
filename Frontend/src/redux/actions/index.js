import axios from "axios";
//TODO CAMBIAR POR FUNCIONALIDAD DE BACK
import { CAUSES_INFO } from "../../Utils/Constants/causes";

const HOST = "http://localhost";
export const GET_ALL_CAUSES = 'GET_ALL_CAUSES';

export const getAllCauses = () => {
  return async (dispatch) => {
    try {
      const response = CAUSES_INFO;
      dispatch({
        type: GET_ALL_CAUSES,
        payload: response
      });

    } catch(error){
      console.log(error.message);
    }
  }
}