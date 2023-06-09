import axios from 'axios'
import 
{
  FEATURE_GET_REQUEST,
  FEATURE_GET_SUCCESS,
  FEATURE_GET_FAIL
} from "../constants/featureConstants";
import final from '../../config';

export const listFeature = () => async (dispatch) => {
  try {
    dispatch({ type: FEATURE_GET_REQUEST })
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/news`
    )

    dispatch({
      type: FEATURE_GET_SUCCESS,
      payload: [data]
    } )
  } catch ( error ) 
  {
    dispatch( {
      type: FEATURE_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
