import React from 'react';
import { Link } from 'react-router-dom';
import final from '../../config';
const ShowcaseImage = (props) => {
    return (
        <Link
            to={{
               
                pathname: 'https://app.mentorkart.com',
            }}
            target='_blank'
        >
            <img
                className='fluid-img'
                src={
                    `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/uploaded-images/` + props.image 
                }
                alt=''
            />
        </Link>

    );
};


export default ShowcaseImage;
