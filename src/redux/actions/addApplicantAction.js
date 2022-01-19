import axios from 'axios'
import {
  APPLICANT_GET_REQUEST,
  APPLICANT_GET_SUCCESS,
  APPLICANT_GET_FAIL,
} from '../constants/applicantsConstants'
import final from '../../config';

export const addApplicant =
  ({ id, resume, domain }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      }

      dispatch({ type: APPLICANT_GET_REQUEST })
      const { data } = await axios.post(
        `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/careers/application`,
        { id, resume, domain },
        config
      )
      console.log(data)
      dispatch({
        type: APPLICANT_GET_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: APPLICANT_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      })
    }
  }
