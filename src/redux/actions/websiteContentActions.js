import axios from 'axios'
import {
  WEBSITE_CONTENT_GET_REQUEST,
  WEBSITE_CONTENT_GET_SUCCESS,
  WEBSITE_CONTENT_GET_FAIL,
} from '../constants/websiteContentConstants'
import final from '../../config'

export const listWebsiteContent = () => async (dispatch) => {
  try {
    dispatch({ type: WEBSITE_CONTENT_GET_REQUEST })
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/websitecontents`
    )
    dispatch({
      type: WEBSITE_CONTENT_GET_SUCCESS,
      payload: [data]
    })
  } catch (error) {
    dispatch({
      type: WEBSITE_CONTENT_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
