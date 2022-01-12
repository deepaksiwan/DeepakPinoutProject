import axios from 'axios';
import {
  CAMPUS_GET_REQUEST,
  CAMPUS_GET_SUCCESS,
  CAMPUS_GET_FAIL,
} from '../constants/asCampusConstants';

export const asCampus =
  ({ name, email, phone, orgName, message, address, designation }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: CAMPUS_GET_REQUEST });
      const { data } = await axios.post(
        `${process.env.REACT_APP_WEBSITE_URL_PINS}/campus`,
      
        { name, email, phone, orgName, message, address, designation },
        config
      );
      console.log(data);
      dispatch({
        type: CAMPUS_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CAMPUS_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const asOrganisation =
  ({name, email, phone, orgName, message, address, designation }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: CAMPUS_GET_REQUEST });
      const { data } = await axios.post(
       `${process.env.REACT_APP_WEBSITE_URL_PINS}/organisation`,
        { name, email, phone, orgName, message, address, designation },
        config
      );
      console.log(data);

      dispatch({
        type: CAMPUS_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CAMPUS_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const beMentor =
  ({
    full_name,
    email,
    mobile_number,
    gender,
    linked_in,
    dob,
    full_address,
    interests,
    whom_to_mentor,
    industry,
    otherIndustry,
    first_pref,
    second_pref,
    third_pref,
    designation,
    bio,
    get_to_know,
    grad_college,
    grad_degree,
    grad_year,
    post_grad_college,
    post_grad_degree,
    post_grad_year,
  }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: CAMPUS_GET_REQUEST });
      const { data } = await axios.post(
       `${process.env.REACT_APP_WEBSITE_URL_PINS}/be-a-mentor`,
        
      
        {
          full_name,
          email,
          mobile_number,
          gender,
          linked_in,
          dob,
          full_address,
          interests,
          whom_to_mentor,
          industry,
          otherIndustry,
          first_pref,
          second_pref,
          third_pref,
          //firstPref,
          //secondPref,
          //thirdPref,
          designation,
          bio,
         // about,
          get_to_know,
          grad_college,
          grad_degree,
          grad_year,
          post_grad_college,
          post_grad_degree,
          post_grad_year,
        },
        config
      );
      console.log(data);
      
      dispatch({
        type: CAMPUS_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CAMPUS_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
