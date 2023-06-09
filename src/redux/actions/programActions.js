import axios from 'axios'
//import { FormCheck } from 'react-bootstrap'
import {
  PROGRAM_GET_REQUEST,
  PROGRAM_GET_SUCCESS,
  PROGRAM_GET_FAIL,
  PROGRAM_GET_SEARCH,
} from '../constants/programConstants'
import final from '../../config'

export const listProgram = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST })
    const { data } = await axios.get(
       `${final['REACT_APP_SYSTEM_SERVER_URL_PINS']}/api/sso-courses`
    )
    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const filterProgram = (chec) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST })
    console.log('chec',chec);
    //console.log(chec.toString(), 'chec.toString')
    const { data } = await axios.get(
      `${final['REACT_APP_SYSTEM_SERVER_URL_PINS']}/api/sso-courses`
    )
    const fil = data.data
    console.log('DATA', fil);

    let priceGiven;
    let p = chec.map(x => {
        const j = x.split(' ');
        console.log('eachCheckedItemSplitted', j);
        if(Number(j[0]) >= 1000){
          priceGiven = Number(j[0]);
        }
        return (j.length>=2 && j[1]==='Months')?j[0]:-1;
    })
    // d = d.concat(p);
    console.log('itemsWithDuration', p);
    let newAddedItems;
    if(p){
    newAddedItems = fil.filter((x) => {

      const d1  = new Date(x['from_date']);
      const d2 = new Date(x['to_date']);
      // console.log(d1 ,d2, 'd1, d2')
      const computedMonths = Math.ceil(((d2 - d1)/(1000*60*60*24))/30)
      // console.log(computedMonths);
      // console.log('final sorted',d);
      // console.log('just checkkinnggg',computedMonths <= Number(p));
      return computedMonths <= Number(p);
    })
  }
  console.log('Just duration items result from DB',newAddedItems)
  // d = d.concat(newAddedItems);
  // console.log('concatedArray', d);
  let d = chec
  .map((g) =>
    fil.filter((x) => 
      Object.values(x).join(',').toLowerCase().includes(g.toLowerCase())
    ))
  .flat()
  const newPriceAddedItems = fil.filter(x => x.price <= priceGiven)
  d = d.concat(newAddedItems,newPriceAddedItems);
  console.log('finalConcatenated',d);
  // fil.filter(x => Number(x.price) <= )
  console.log('finalResult of concatenation',d)
    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: d,
    })
  } catch (error) {
    //console.log(error)
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const listStudentCourse = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST })
    const { data } = await axios.get(
      `${final['REACT_APP_SYSTEM_SERVER_URL_PINS']}/api/sso-courses`
    )
    const fil = data.data
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('STUDENT')
    )

    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: std,
    })
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const listProfessionalCourse = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST })
    const { data } = await axios.get(
      `${final['REACT_APP_SYSTEM_SERVER_URL_PINS']}/api/sso-courses`
    )
    const fil = data.data
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('PROFESSIONAL')
    )

    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: std,
    })
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const listEntrepreneurCourse = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST })
    const { data } = await axios.get(
      `${final['REACT_APP_SYSTEM_SERVER_URL_PINS']}/api/sso-courses`
    )
    const fil = data.data
    const std = fil.filter((x) =>
      x.user_category.split(',').includes('ENTREPRENEUR')
    )

    dispatch({
      type: PROGRAM_GET_SUCCESS,
      payload: std,
    })
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const searchProgram = (query) => async (dispatch) => {
  try {
    dispatch({ type: PROGRAM_GET_REQUEST })
    const { data } = await axios.get(
      `${final['REACT_APP_SYSTEM_SERVER_URL_PINS']}/api/sso-courses`
    );
    const fil = data.data
    // let isFound = false;
    const std = fil.filter((x) => {

      // if(query.toLowerCase() === "free"){
      //   return x.price === 0;
      // }

      return x.LMS_course_name.toLowerCase().includes(query.toLowerCase()) ||
            x.mk_course_name.toLowerCase().includes(query.toLowerCase());

      //LMS_course_name	:	Test
      //mk_course_name	:	Test

      // if (x.LMS_course_name) {
      //   isFound = x.LMS_course_name.toLowerCase().includes(query.toLowerCase());
      //   if(isFound)
      //     return isFound;
      // }
      // if (x.mk_course_name) {
      //   isFound = x.mk_course_name.toLowerCase().includes(query.toLowerCase());
      //   if(isFound)
      //     return isFound;
      // }
      // if (x.description) {
      //   isFound = x.description.toLowerCase().includes(query.toLowerCase());
      //   if(isFound)
      //     return isFound;
      // }
      // if (x.user_category) {
      //   isFound = x.user_category.toLowerCase().includes(query.toLowerCase());
      //   if(isFound)
      //     return isFound;
      // }
      // if (x.from_date) {
      //   isFound =  x.from_date.toLowerCase().includes(query.toLowerCase());
      //   if(isFound)
      //     return isFound;
      // }
      // if (x.to_date) {
      //   isFound =  x.to_date.toLowerCase().includes(query.toLowerCase());
      //   if(isFound)
      //     return isFound;
      // }
      // if (x.course_type) {
      //   isFound =  x.course_type.toLowerCase().includes(query.toLowerCase());
      //   if(isFound)
      //     return isFound;
      // }
      // if (x.icon_url) {
      //   isFound =  x.icon_url.toLowerCase().includes(query.toLowerCase());
      //   if(isFound)
      //     return isFound;
      // }
      //   return x.price;
    });

    // console.log(std);
    dispatch({
      type: PROGRAM_GET_SEARCH,
      payload: std,
    });
  } catch (error) {
    dispatch({
      type: PROGRAM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
