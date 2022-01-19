import axios from 'axios'
import {
  ADVERTISEMENTS_GET_REQUEST,
  ADVERTISEMENTS_GET_SUCCESS,
  ADVERTISEMENTS_GET_FAIL,
} from '../constants/advertisementsConstants'
import final from '../../config';

export const listAdvertisements = () => async (dispatch) => {
  try {
    dispatch({ type: ADVERTISEMENTS_GET_REQUEST })
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/advertisements`
    )

    dispatch({
      type: ADVERTISEMENTS_GET_SUCCESS,
      payload: [data],
    })
  } catch (error) {
    dispatch({
      type: ADVERTISEMENTS_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
