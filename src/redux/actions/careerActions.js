import axios from 'axios';
import {
  CAREER_GET_REQUEST,
  CAREER_GET_SUCCESS,
  CAREER_GET_FAIL,
} from '../constants/careerConstants';
import final from '../../config';

export const careerList = () => async (dispatch) => {
  try {
    dispatch({ type: CAREER_GET_REQUEST });
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/careers`,
       
    );
    console.log('datacareer pleaseee', data);

    dispatch({
      type: CAREER_GET_SUCCESS,
      payload: data['data'],
    });
  } catch (error) {
    dispatch({
      type: CAREER_GET_FAIL,
      payload: error,
    });
  }
};