import axios from 'axios';
import {
  BANNER_GET_REQUEST,
  BANNER_GET_SUCCESS,
  BANNER_GET_FAIL,
} from '../constants/bannerConstants';
import final from '../../config';

export const listBanner = () => async (dispatch) => {
  try {
    dispatch({ type: BANNER_GET_REQUEST });
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/banners`,
    
    );

    console.log()
    dispatch({
      type: BANNER_GET_SUCCESS,
      payload: [data],
    });
  } catch (error) {
    dispatch({
      type: BANNER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
