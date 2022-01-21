import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { beMentor } from '../redux/actions/asCampusActions';
import { useDispatch } from 'react-redux';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';
import SelectSearch from 'react-select-search';
import { industryOptions } from './data/industryOptions';
import { firstPrefOptions } from './data/firstPrefOptions';
import "react-select-search/style.css";

import { dataCountry } from './../CountryByPhoneInput'




const BeAMentor = () => {
  // const genderM = useRef();
  // const genderF = useRef();
  // const bussCoach = useRef();
  // const entrepreneurship = useRef();
  // const indusRef = useRef();

  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  // console.log(industryOptions);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo();
  });
  
  const otherFirstPreference = useRef();
  const otherSecondPreference = useRef();
  const otherThirdPreference = useRef();
  const other_industry = useRef();
  //const otherIndustryName = useRef();
  const [full_name, Setfull_Name] = useState('');
  const [email, SetEmail] = useState('');
  const [mobile_number, Setmobile_number] = useState('');
  const [gender, SetGender] = useState(1);
  const [linked_in, Setlinked_in] = useState('');
  const [full_address, Setfull_Address] = useState('');
  const [dob, SetDOB] = useState('');
  const [interests, Setinterests] = useState([]);
  const [whom_to_mentor, Setwhom_to_mentor] = useState([]);
  const [industry, SetIndustry] = useState('');
  const [first_pref, Setfirst_pref] = useState('');
  const [second_pref, Setsecond_pref] = useState('');
  const [third_pref, Setthird_pref] = useState('');
  const [designation, Setdesignation] = useState('');
  const [bio, Setbio] = useState('');
  const [get_to_know, Setget_to_know] = useState('');
  const [grad_college, SetGradCollege] = useState('');
  const [grad_degree, SetGradDegree] = useState('');
  const [grad_year, SetGradYear] = useState('');
  const [post_grad_college, SetPostGradCollege] = useState('');
  const [post_grad_degree, SetPostGradDegree] = useState('');
  const [post_grad_year, SetPostGradYear] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // let mobileArray = [];
    // let num = 10;
    // let atLastIndex = mobile_number.length;
    // while(num--){
    //   mobileArray.unshift(mobile_number[atLastIndex])
    //   atLastIndex--;
    // }
    // let finalMobileNumber = mobileArray.join('');
    // console.log('finalMobileNumber', finalMobileNumber, );
    let finalPhoneString = '+' + mobile_number;
    console.log(finalPhoneString);
    console.log('dataCountry["countries"]',dataCountry["countries"], finalPhoneString);
    const found = dataCountry["countries"].find(e => finalPhoneString.startsWith(e["code"]));
    console.log(found["name"]);
    let finalUserPhoneNumber = finalPhoneString.replace(found["code"], "");
    console.log(finalUserPhoneNumber);

    dispatch(
      beMentor({
        full_name: full_name,
        email: email,
        mobile_number: finalUserPhoneNumber,
        gender: gender === 1 ? 'Male' : 'Female',
        linked_in: linked_in,
        dob: dob,
        full_address: full_address,
        interests: JSON.stringify(interests),
        whom_to_mentor: JSON.stringify(whom_to_mentor),
        industry: industry,
        other_industry: other_industry?.current?.value,
        first_pref: first_pref === 'Others' ? otherFirstPreference?.current?.value : first_pref,
        second_pref: second_pref === 'Others' ? otherSecondPreference?.current?.value : second_pref,
        third_pref: third_pref === 'Others' ? otherThirdPreference?.current?.value : third_pref,
        designation: designation,
        bio: bio,
        get_to_know: get_to_know,
        grad_college: grad_college,
        grad_degree: grad_degree,
        grad_year: grad_year,
        post_grad_college: post_grad_college,
        post_grad_degree: post_grad_degree,
        post_grad_year: post_grad_year,
      })
    );

    Setfull_Name('');
    SetEmail('');
    Setmobile_number('');
    SetGender(1);
    Setlinked_in('');
    Setfull_Address('');
    SetDOB('');
    Setbio('');
    Setfirst_pref('');
    Setget_to_know('');
    SetGradCollege('');
    SetGradDegree('');
    SetGradYear('');
    SetIndustry('');
    Setsecond_pref('');
    Setthird_pref('');
    Setwhom_to_mentor([]);
    Setdesignation('');
    Setinterests([]);
    SetPostGradCollege('');
    SetPostGradDegree('');
    SetPostGradYear('');


  };

  const toggleInterests = (x) => {
    var index = interests.indexOf(x);

    if (index === -1) {
      interests.push(x);
    } else {
      interests.splice(index, 1);
    }
    Setinterests(interests);
    
  };

  const toggleWhom = (x) => {
    var index = whom_to_mentor.indexOf(x);

    if (index === -1) {
      whom_to_mentor.push(x);
    } else {
      whom_to_mentor.splice(index, 1);
    }
    Setwhom_to_mentor(whom_to_mentor);
   
  };

  const searchDropdownHandler = (totalOptions) => {

    return (searchVal) => {
      if (searchVal === '')
        return totalOptions;

      const filteredOptions = totalOptions.filter(
        (val) => {
          return (
            val.name.toLowerCase().startsWith(searchVal.toLowerCase())
          );
        });
      return filteredOptions;
    }
  }
  

  const industryHandleChange = (...args) => {
    
    console.log("ARGS:", args);
    SetIndustry(args[1].name);
    
    console.log("CHANGE:");
  };

  const otherFirstPrefChangeHandler = (...args) => {
    
    console.log("ARGS:", args);
    Setfirst_pref(args[1].name);
   
    console.log("CHANGE_FIRST_PREF:");
  };

  const otherSecondPrefChangeHandler = (...args) => {
    
    console.log("ARGS:", args);
    Setsecond_pref(args[1].name);
   
    console.log("CHANGED_Second_Pref:");
  };

  const otherThirdPrefChangeHandler = (...args) => {
    
    console.log("ARGS:", args);
    Setthird_pref(args[1].name);
    
    console.log("CHANGE_THIRD_PREF:");
  };


  return (
    <div>
      <MyNavbar />
      <div className='be-a-mentor'>
        <header className=''>
          <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
            <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
            <h4 className='mt-3 mb-1'>Register Now</h4>
            <h1 className='mb-1'>BECOME A MENTOR</h1>
            <p className='mb-3 lead-md'>
              Leave your information here, we'll get back to you
            </p>
          </div>
        </header>
        <img className='rocket-img' src='/images/rocket.png' alt='' />
        <img className='plane-img' src='/images/plane.png' alt='' />
        <div className='form-container'>
          <div className='container py-md-5 py-3 px-md-3 px-4'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='full-name'>Full Name</label>
                    <input
                      type='text'
                      name='FullName'
                      required
                      id='full-name'
                      value={full_name}
                      onChange={(e) => {
                        Setfull_Name(e.target.value);
                      }}
                      placeholder='Enter Full Name'
                      className='form-control'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      type='email'
                      name='Email'
                      required
                      id='email'
                      value={email}
                      onChange={(e) => {
                        SetEmail(e.target.value);
                      }}
                      placeholder='Enter Your Email'
                      className='form-control'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='mobile'>Mobile Number</label>
                    <PhoneInput
                      inputExtraProps={{
                        name: 'mobile_number',
                        required: true,
                      }}
                      className='form-control'
                      name="mobile_number"
                      country={'in'}
                      value={mobile_number}
                      onChange={(mobile_number) => Setmobile_number(mobile_number)}
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label>Gender</label>
                    <div className='row'>
                      <div className='col-6'>
                        <div className='form-check me-5'>
                          <label className='form-check-label'>
                            <input
                              type='radio'
                              className='form-check-input'
                              name='Gender'
                              required
                              id='male'
                              value={gender}
                              onClick={(e) => {
                                SetGender(1);
                              }}
                            
                            />
                            Male
                          </label>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='form-check me-5'>
                          <label className='form-check-label'>
                            <input
                              type='radio'
                              className='form-check-input'
                              name='Gender'
                              id='female'
                              value={gender}
                              onClick={(e) => {
                                SetGender(0);
                              }}
                            // ref = {genderF}
                            />
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='linked-in'>Linked In URL</label>
                    <input
                      type='text'
                      name='linked_in'
                      id='linked_in'
                      required
                      className='form-control'
                      placeholder='Enter Your Linked In URL'
                      value={linked_in}
                      onChange={(e) => Setlinked_in(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group mb-4'>
                    <label htmlFor='dob'>Date of Birth</label>
                    <input
                      className='form-control'
                      type='date'
                      name='DOB'
                      required
                      id='dob'
                      value={dob}
                      onChange={(e) => SetDOB(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='address'>Full Address</label>
                <textarea
                  name='Address'
                  id='address'
                  className='form-control'
                  placeholder='Enter Full Address'
                  rows='3'
                  value={full_address}
                  onChange={(e) => Setfull_Address(e.target.value)}
                ></textarea>
              </div>
              <div className='form-group mb-4'>
                <label>Choose Your Interest</label>
                <div className='d-flex flex-wrap'>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      name=""
                      type='checkbox'
                      value='Entrepreneurship'
                      id='entrepreneurship'
                      onChange={(e) => toggleInterests(e.target.value)}
                    // ref = {entrepreneurship}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='entrepreneurship'
                    >
                      Entrepreneurship
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Business Coach'
                      id='business-coach'
                      onChange={(e) => toggleInterests(e.target.value)}
                    // ref = {bussCoach}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='business-coach'
                    >
                      Business Coach
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Industry Mentorhip'
                      id='industry'
                      onChange={(e) => toggleInterests(e.target.value)}
                    // ref = {indusRef}
                    />
                    <label className='form-check-label' htmlFor='industry'>
                      Industry Mentorhip
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Life Coaching'
                      id='life'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='life'>
                      Life Coaching
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Career Counselling'
                      id='career-counselling'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='career-counselling'
                    >
                      Career Counselling
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Create Webinars, Workshop etc.'
                      id='create-webinar'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='create-webinar'
                    >
                      Create Webinars, Workshop etc.
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Other'
                      id='other'
                      onChange={(e) => toggleInterests(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='other'>
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className='form-group mb-4'>
                <label>Whom do you want to Mentor</label>
                <div className='d-flex flex-wrap'>
                  <div className='form-check me-5'>
                    <input

                      className='form-check-input'
                      type='checkbox'
                      value='Students'
                      id='students'
                      onChange={(e) => toggleWhom(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='students'>
                      Students
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Entrepreneurs'
                      id='entrepreneurs'
                      onChange={(e) => toggleWhom(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='entrepreneurs'>
                      Entrepreneurs
                    </label>
                  </div>
                  <div className='form-check me-5'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='Professionals'
                      id='professionals'
                      onChange={(e) => toggleWhom(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='professionals'>
                      Professionals
                    </label>
                  </div>
                </div>
              </div>


              <div className='   form-group mb-4 ' >
                <label htmlFor=''>Select Your Industry</label>
                <SelectSearch
                  //  className ='form-select'

                  options={industryOptions}
                  filterOptions={searchDropdownHandler}
                  search
                  required
                  // className= 'form-select'
                  value={industry}
                  name="Industry"
                  emptyMessage='Not found'
                  placeholder='---'
                  onChange={industryHandleChange}
                />

              </div>
              {industry === 'Others' && (
                <div className='form-group mb-4'>
                  <label htmlFor='others'>
                    Others <span>(please specify)</span>
                  </label>
                  <input
                    type='text'
                    name='Others'
                    id='others'
                    required
                    className='form-select'
                    // className='form-control'
                    placeholder='Other Industry'
                    ref={other_industry}
                  // onChange={(e) => SetOtherIndustry(e.target.value)}
                  />
                </div>
              )}
              <div className='form-group mb-4'>
                <label htmlFor='first-pref'>
                  Choose Domain Expertise <span>(1st preference)</span>
                </label>
                <SelectSearch
                  // ref={searchIndustryDropdownValue}
                  options={firstPrefOptions}
                  filterOptions={searchDropdownHandler}
                  search
                  required
                  //className='form-select'
                  value={first_pref}
                  name="firstPref"
                  emptyMessage='Not found'
                  placeholder='---'
                  onChange={otherFirstPrefChangeHandler}
                />
              </div>
              {first_pref === 'Others' && (
                <div className='form-group mb-4'>
                  <label htmlFor='others'>
                    Others <span>(please specify)</span>
                  </label>
                  <input
                    type='text'
                    name='Others'
                    id='others'
                    className='form-select'
                    //className='form-control'
                    placeholder='1st-Preference'
                    ref={otherFirstPreference}
                  // onChange={(e) => SetOtherIndustry(e.target.value)}
                  />
                </div>
              )}
              <div className='form-group mb-4'>
                <label htmlFor='second-pref'>
                  Choose Domain Expertise <span>(2nd preference)</span>
                </label>
                <SelectSearch
                  // ref={searchIndustryDropdownValue}
                  options={firstPrefOptions}
                  filterOptions={searchDropdownHandler}
                  search
                  required
                  value={second_pref}
                  name="secondPref"
                  emptyMessage='Not found'
                  placeholder='---'
                  onChange={otherSecondPrefChangeHandler}
                />
              </div>
              {second_pref === 'Others' && (
                <div className='form-group mb-4'>
                  <label htmlFor='others'>
                    Others <span>(please specify)</span>
                  </label>
                  <input
                    type='text'
                    name='Others'
                    id='others'
                    className='form-control'
                    placeholder='2nd-Preference'
                    // value={otherIndustry}
                    ref={otherSecondPreference}
                  // onChange={(e) => SetOtherIndustry(e.target.value)}
                  />
                </div>
              )}
              <div className='form-group mb-4'>
                <label htmlFor='third-pref'>
                  Choose Domain Expertise <span>(3rd preference)</span>
                </label>

                <SelectSearch
                  // ref={searchIndustryDropdownValue}
                  options={firstPrefOptions}
                  filterOptions={searchDropdownHandler}
                  search
                  required
                  value={third_pref}
                  name="thirdPref"
                  emptyMessage='Not found'
                  placeholder='---'
                  onChange={otherThirdPrefChangeHandler}
                />
              </div>
              {third_pref === 'Others' && (
                <div className='form-group mb-4'>
                  <label htmlFor='others'>
                    Others <span>(please specify)</span>
                  </label>
                  <input
                    type='text'
                    name='Others'
                    id='others'
                    className='form-control'
                    placeholder='3rd-Preference'
                    ref={otherThirdPreference}
                  // value={otherIndustry}
                  // onChange={(e) => SetOtherIndustry(e.target.value)}
                  />
                </div>
              )}
              <div className='form-group mb-4'>
                <label htmlFor='designation'>Current Designation</label>
                <input type='text'
                  name='designation'
                  required
                  id='designation'
                  className='form-control'
                  placeholder='Current Designation'
                  value={designation}
                  onChange={(e) => Setdesignation(e.target.value)}
                />
              </div>

              <div className='form-group mb-4'>
                <label htmlFor='grad_college'>Graduation (mandatory)</label>
                <div className='row'>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradCollege'
                      required
                      id='grad_college'
                      className='form-control'
                      placeholder='University/College'
                      value={grad_college}
                      onChange={(e) => SetGradCollege(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradDegree'
                      required
                      id='grad_degree'
                      className='form-control'
                      placeholder='Degree'
                      value={grad_degree}
                      onChange={(e) => SetGradDegree(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradYear'
                      required
                      id='grad_year'
                      className='form-control'
                      placeholder='Passout Year'
                      value={grad_year}
                      onChange={(e) => SetGradYear(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='post_grad_college'>Post Graduation</label>
                <div className='row'>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradCollege'
                      id='post_grad_college'
                      className='form-control'
                      placeholder='University/College'
                      value={post_grad_college}
                      onChange={(e) => SetPostGradCollege(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradDegree'
                      id='post_grad_degree'
                      className='form-control'
                      placeholder='Degree'
                      value={post_grad_degree}
                      onChange={(e) => SetPostGradDegree(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-4 p-2'>
                    <input
                      type='text'
                      name='GradYear'
                      id='post_grad_year'
                      className='form-control'
                      placeholder='Passout Year'
                      value={post_grad_year}
                      onChange={(e) => SetPostGradYear(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='about'>
                  Write your short bio about yourself
                </label>
                <textarea
                  name='bio'
                  //name='About'
                  id='bio'
                  //id='about'
                  className='form-control'
                  required
                  placeholder='Write something about yourself'
                  rows='5'
                  value={bio}
                  onChange={(e) => Setbio(e.target.value)}
                ></textarea>
              </div>
              <div className='form-group mb-4'>
                <label htmlFor='get-to-know'>
                  How did you get to know about Mentorkart?
                </label>
                <select
                  name='industry'
                  required
                  className='form-select'
                  value={get_to_know}
                  onChange={(e) => Setget_to_know(e.target.value)}
                >
                  <option value=''>---</option>
                  <option value='Website'>Website</option>
                  <option value='Social Media'>Social Media</option>
                  <option value='Advertisements'>Advertisements</option>
                  <option value='Others'>Others</option>
                </select>
              </div>
              <div className='form-group my-5 text-center'>
                <input
                  type='submit'
                  value='Become a mentor'
                  className='btn btn-md-lg btn-success'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeAMentor;
