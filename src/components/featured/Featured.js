import React from 'react';
import final from '../../config';

const Featured = (props) => {
  return (
    <div className='partners-div'>
      <img
        src={
          `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/uploaded-images/` + props.url 
        
        }
        alt=''
      />
    </div>
  );
};

export default Featured;
