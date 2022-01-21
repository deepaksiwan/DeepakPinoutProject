import React from 'react';
import final from '../../config';

const Partners = (props) => {
  
  return (
    <div className='partners-div'>
      <img
        height='80px'
        src={
          `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/uploaded-images/` + props.url
         
        }
        alt=''
      />
    </div>
  );
 
};


export default Partners;
