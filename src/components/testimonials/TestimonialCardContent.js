import React from 'react';
import final from '../../config';

const TestimonialCardContent = ({ data }) => {
  return (
    <div className='testimonial-card-content'>
      <div className='testi-img mb-4'>
        <img
          src={
            //https://www.test.pinsoutinnovation.com
            `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/uploaded-images/` +
            data.testimonial_image
          }
          alt=''
        />
      </div>
      <p>{data.text.substring(0, 250)} {data.text.length > 250 ? '...' : ''}
      </p>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <p className='testimonial-writer mb-0'>{data.author}</p>
          <p className='sec mb-0'>{data.post}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardContent;
