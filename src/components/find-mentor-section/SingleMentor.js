import React, { useState } from 'react';
import MentorCardButtons from './MentorCardButtons';
import { Link } from 'react-router-dom';

import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';
import final from '../../config';

const SingleMentorCard = ({
  id,
  img,
  name,
  categories,
  charges,
  position,
  designation,
  about,
}) => {
  const [showModal, setShowModal] = useState(false);
  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const url_name = name.toLowerCase().split(' ').join('-');
  return (
    <div className='col-lg-12 mt-4 px-lg-3 px-sm-2 px-0 mx-xl-2'>
      <div className='mentor-card p-2'>
        <div className='img'>
          {img === null ? (
            <img src='/images/user.png' alt='' />
          ) : (
            <img
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              src={`${final['REACT_APP_S3STORAGE_URL_PINS']}/${img}`}
              alt=''
            />
          )}
        </div>
        <div className='ms-lg-4 mentor-card-content p-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h2 className='mt-0 mb-0'>{name}</h2>
              <span className='text-left my-0 text-capitalize'>
                {designation ? designation : 'NULL'}
              </span>
            </div>
            <h6 className='mb-0 price'>
              ₹ {charges} <br /> <span>(per session)</span>
            </h6>
          </div>

          <div className='category-tags mt-2'>
            {categories &&
              categories.split(',').map((cate, index) => {
                return (
                  <span key={index} className='btn btn-sm me-2'>
                    {cate}
                  </span>
                );
              })}
          </div>
          <p className='about'>{about ? about.substring(0, 80) : 'NULL'}...</p>
          <div className='row btn-container'>
            <div className='span-checks mb-3'>
              <div className='d-flex justify-content-between ms-2'>
                <div className='me-2'>
                  <i className='fas fa-check-square me-1'></i>
                  Book a call
                </div>
                <div className=''>
                  <i className='fas fa-check-square me-1'></i>
                  Mentorship Packages
                </div>
              </div>
            </div>
            <Link to={`/mentor-profile/${url_name}/${id}`} className='px-0'>
              <MentorCardButtons
                classes='mentor-card-btn active'
                text='View Profile'
                smtext=''
              />
            </Link>
          </div>
        </div>
      </div>
      <Modal
        id='signup-modal'
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {
            zIndex: '5000',
          },
          content: {
            maxWidth: '1100px',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <SignUpModal showModalBtn={showModalBtn} />
      </Modal>
    </div>
  );
};

export default SingleMentorCard;
