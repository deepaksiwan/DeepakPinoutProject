import axios from 'axios';
import {
  SHOWCASE_GET_REQUEST,
  SHOWCASE_GET_SUCCESS,
  SHOWCASE_GET_FAIL,
} from '../constants/showcaseimage';
import final from '../../config';

export const listshowcase = () => async (dispatch) => {
  try {
    dispatch({ type: SHOWCASE_GET_REQUEST });
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/showcaseimages`,
    
    );
    console.log('showcasessssss',data);
    dispatch({
      type: SHOWCASE_GET_SUCCESS,
      payload: [data],
    });
  } catch (error) {
    dispatch({
      type: SHOWCASE_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
