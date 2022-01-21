import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { asCampus } from '../redux/actions/asCampusActions';
import { dataCountry } from '../CountryByPhoneInput';
import { listWebsiteContent } from '../redux/actions/websiteContentActions';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const AsACampus = () => {

  const dispatch = useDispatch();
  const websitesContent = useSelector((state) => state.websiteContentList)
  const { websiteContent, loading } = websitesContent;
  console.log(websiteContent);
  const dynamicData = websiteContent[0]?.data;
  console.log(dynamicData);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listWebsiteContent())
  }, [dispatch]);

  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState();
  const [orgName, SetOrgName] = useState('');
  const [message, SetMessage] = useState('');
  const [address, SetAddress] = useState('');
  const [designation, SetDesignation] = useState('');

  const handleSubmit = () => {


    let finalPhoneString = '+' + phone;
    console.log(finalPhoneString);
    console.log('dataCountry["countries"]',dataCountry["countries"], finalPhoneString);
    const found = dataCountry["countries"].find(e => finalPhoneString.startsWith(e["code"]));
    console.log(found["name"]);
    let finalUserPhoneNumber = finalPhoneString.replace(found["code"], "");
    console.log(finalUserPhoneNumber);

    dispatch(
      asCampus({name, email, phone:finalUserPhoneNumber, orgName, message, address, designation})
    );

    SetName('')
    SetEmail('')
    SetPhone()
    SetOrgName('')
    SetMessage('')
    SetAddress('')
    SetDesignation('')
  };

  return (
    <div>
      <MyNavbar />
      <div className='be-a-mentor'>
        <header className=''>
          <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-4 py-3'>
            <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
            <h4 className='mt-3 mb-1'>Register Now</h4>
            <h1 className='mb-1'>As A Campus</h1>
            <p className='mb-3 lead'>
              Leave your information here, we'll get back to you
            </p>
          </div>
        </header>
        <img className='rocket-img' src='/images/rocket.png' alt='' />
        <img className='plane-img' src='/images/plane.png' alt='' />
        <div className='form-container'>
          <div className='container-xxl px-lg-5 px-md-4 px-sm-3 py-md-5 py-4'>
            <div className='row mx-xxl-5'>
              <div className='col-lg-5'>
                <div className='organisation-left'>
                  <span>{websiteContent[0]?.data[34]?.field_data}</span>
                  <h1>{websiteContent[0]?.data[35]?.field_data}</h1>
                  <p>
                  {websiteContent[0]?.data[36]?.field_data}
                  </p>
                  <p className='sec'>
                  {websiteContent[0]?.data[37]?.field_data}
                  </p>
                </div>
              </div>
              <div className='col-md-7'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='org-name'>Name of the Campus</label>
                      <input
                        type='text'
                        name='OrgName'
                        id='org-name'
                        required
                        value={orgName}
                        onChange={(e) => {
                          SetOrgName(e.target.value);
                        }}
                        placeholder='Enter Campus Name'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className='form-group mb-4'>
                    <label htmlFor='address'>Full Address of Campus</label>
                    <textarea
                      name='Address'
                      id='address'
                      className='form-control'
                      required
                      placeholder='Enter Address of Campus'
                      rows='3'
                      value={address}
                      onChange={(e) => SetAddress(e.target.value)}
                    ></textarea>
                  </div>
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='full-name'>Full Name of Applicant</label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        // id='full-name'
                        required
                        value={name}
                        onChange={(e) => {
                          SetName(e.target.value);
                        }}
                        placeholder='Enter Full Name'
                        className='form-control'
                      />
                    </div>
                  </div>

                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='designation'>
                        Designation of Applicant
                      </label>
                      <input
                        type='text'
                        name='Designation'
                        id='designation'
                        required
                        value={designation}
                        onChange={(e) => {
                          SetDesignation(e.target.value);
                        }}
                        placeholder='Enter Designation'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='email'>Email Address</label>
                      <input
                        type='email'
                        name='Email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => {
                          SetEmail(e.target.value);
                        }}
                        placeholder='Enter Your Email'
                        className='form-control'
                      />
                    </div>
                  </div>
                  <div className=''>
                    <div className='form-group mb-4'>
                      <label htmlFor='mobile'>Mobile Number</label>
                      <PhoneInput
                        inputExtraProps={{
                          name: 'phone',
                          required: true,
                        }}
                        className='form-control'
                        country={'in'}
                        value={phone}
                        onChange={(phone) =>{SetPhone(phone);}}
                      />
                    </div>
                  </div>
                  <div className='form-group mb-4'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                      name='Message'
                      id='message'
                      className='form-control'
                      placeholder='Enter Your Message'
                      required
                      rows='4'
                      value={message}
                      onChange={(e) => SetMessage(e.target.value)}

                    ></textarea>
                  </div>

                  <div className='form-group my-md-5 mb-md-0 mb-3 text-center'>
                    <input
                      type='submit'
                      value='Register Now'
                      className='btn btn-md-lg btn-success'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AsACampus;
