import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterMentor } from '../../redux/actions/mentorActions';
import { Button } from 'react-bootstrap';
// import SelectSearch from 'react-select-search';
import Select from 'react-select';
import "react-select-search/style.css";
  // export const moreFilterFirstPrefOptions = allOptions.filter((v) => v!=='Others').map((val) => {
    import { moreFilterFirstPrefOptions } from './../data/moreFilterFirstPrefOptions';
// import { firstPrefOptions } from './../data/firstPrefOptions';
import { moreFilterindustryOptions } from '../data/moreFilterindustryOptions';

const MentorFilter = (props) => {
  const dispatch = useDispatch();
  const valuesInputIndustry = useRef();
  const valuesInputFirstPref = useRef();
  const [check, setCheck] = useState([])
  // const [values, setValues] = useState([]);
  // const [industry, setIndustry] = useState();

  // const map = new Map();
  // filterMentor.



 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('At final form submittion',check);
    dispatch(filterMentor(check));
    props.mentorFilterBtn(false)
  }

  const onClear = (e) => {
    e.preventDefault();
    setCheck([]);
    
    
    valuesInputIndustry.current.clearValue();
    valuesInputFirstPref.current.clearValue();
    

  }

  
  

  
  const industryHandleChange = (...args) => {
    console.log('currentOnchange-->',args)
    
    let clicked = args[0]?.length;
    
    clicked = args[0][clicked-1]?.value;
    console.log('current clicked value',clicked);
    
    setCheck((prevState) => {
     
      let isIndexFound = prevState.indexOf(clicked);
      console.log(isIndexFound);
      if(isIndexFound === -1){
        prevState.push(clicked);
        return prevState;
      }
      else
        return prevState;
    });
    console.log("CHANGE:");
    console.log('FULL LENGTH ARRAY TO CHECKED',check);
    
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <button style={{position: 'absolute',right:'10px', top:'25px', border:'none', color:'black'}}> &#10006;</button>
      <div style={{
        marginTop: '40px',
        marginBottom: '50px'
      }}>
      <label htmlFor="Industry">Select Your Industry</label>

      
      

<Select
  
    isMulti={true}
    name="industry"
    options={moreFilterindustryOptions.map((e) => {return {value:e.value,label:e.name}})}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={industryHandleChange}
    ref={valuesInputIndustry}
    />

</div>
      <div className="form-group mb-4">
        <label htmlFor="first-pref">
          Choose Domain Expertise <span>(1st preference)</span>
        </label>

<Select
    
    isMulti={true}
    name="domain"
    options={moreFilterFirstPrefOptions.map((e) => {return {value:e.value,label:e.name}})}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={industryHandleChange}
    ref={valuesInputFirstPref}
  />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          listStyle: 'none',
          marginTop: '75px'
        }}
      >
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Button
          // classNamePrefix="select"
          variant="danger"
          onClick={onClear}
        >
          Clear
        </Button>
      </div>
    </form>
  )
}

export default MentorFilter;
