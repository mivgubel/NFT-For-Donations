import axios from "axios";
//TODO CAMBIAR POR FUNCIONALIDAD DE BACK
import { CAUSES_INFO } from "../../Utils/Constants/causes";

const HOST = "http://localhost";


export const GET_ALL_CAUSES = 'GET_ALL_CAUSES';
export const GET_ALL_VISIBLE_CAUSES = 'GET_ALL_VISIBLE_CAUSES';
export const HIDE_CAUSE = 'HIDE_CAUSE';
export const CHANGE_ERROR = 'CHANGE_ERROR';

export const getAllVisibleCauses =  () => {
  return async (dispatch) => {
    try {
      const causes = await axios.get("https://solidarityback.herokuapp.com/");
      //TODO AGREGAR FILTADO PARA CAUSAS VISIBLES Y NO VISIBLES
      const response = causes.data.contracts;
      return dispatch({
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
      const causes = await axios.get("https://solidarityback.herokuapp.com/");
      const response = causes.data.contracts;
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

export const postCollection =  (data) => { 
  //Mapea y oculta causas
  return  (dispatch) => {
    let payload = {
      errorClass : "",
      errorMessage : {}
    };
  //   try {
      axios.post("https://solidarityback.herokuapp.com/adminDashboard",data).then(function(response){
        console.log("respon: ",response.data);
        payload = {
          errorClass : "alert alert-success",
          errorMessage : JSON.stringify(response.data)
        }
        dispatch({
          type: HIDE_CAUSE,
          payload
        });
    }).catch(function (error){
      console.log(error);
      payload = {
        errorClass : "alert alert-danger",
        errorMessage : JSON.stringify(error)
      }
      dispatch({
        type: HIDE_CAUSE,
        payload
      });
    });

  }
}


