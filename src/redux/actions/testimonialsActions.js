import axios from 'axios'
import {
  TESTIMONIAL_GET_REQUEST,
  TESTIMONIAL_GET_SUCCESS,
  TESTIMONIAL_GET_FAIL,
} from '../constants/testimonialConstants'
import final from '../../config'

export const listTestimonial = () => async (dispatch) => {
  try {
    dispatch({ type: TESTIMONIAL_GET_REQUEST })
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/testimonials`
    )

    dispatch({
      type: TESTIMONIAL_GET_SUCCESS,
      payload: [data],
    })
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
