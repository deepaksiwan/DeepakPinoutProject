import axios from 'axios';
import {
  CAREER_GET_REQUEST,
  CAREER_GET_SUCCESS,
  CAREER_GET_FAIL,
} from '../constants/careerConstants';

export const careerList = () => async (dispatch) => {
  try {
    dispatch({ type: CAREER_GET_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_WEBSITE_URL_PINS}/careers`,
    
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

/*
export const listBlogsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_DETAILS_GET_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_WEBSITE_URL_PINS}/blogs/${id}`
    
    );

    dispatch({
      type: BLOGS_DETAILS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOGS_DETAILS_GET_FAIL,
      payload: error,
    });
  }
};
*/