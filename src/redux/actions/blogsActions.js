import axios from 'axios';
import {
  BLOGS_GET_REQUEST,
  BLOGS_GET_SUCCESS,
  BLOGS_GET_FAIL,
  BLOGS_DETAILS_GET_REQUEST,
  BLOGS_DETAILS_GET_SUCCESS,
  BLOGS_DETAILS_GET_FAIL,
} from '../constants/blogsConstants';
import final from '../../config';

export const listBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_GET_REQUEST });
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/blogs`,
    
    );

    dispatch({
      type: BLOGS_GET_SUCCESS,
      payload: [data],
    });
  } catch (error) {
    dispatch({
      type: BLOGS_GET_FAIL,
      payload: error,
    });
  }
};

export const listBlogsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_DETAILS_GET_REQUEST });
    const { data } = await axios.get(
      `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/blogs/${id}`
    
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
