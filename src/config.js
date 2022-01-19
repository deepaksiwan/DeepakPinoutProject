const dev = {
    REACT_APP_WEBSITE_SERVER_URL_PINS : `http://localhost:5000`,
    REACT_APP_SYSTEM_SERVER_URL_PINS : `https://mentorkart.org`,
    REACT_APP_S3STORAGE_URL_PINS : `https://mentorkart-admin-staging.s3.amazonaws.com`
};

   
const stage = {
    REACT_APP_WEBSITE_SERVER_URL_PINS : `https://www.test.pinsoutinnovation.com`,
    REACT_APP_SYSTEM_SERVER_URL_PINS : `https://mentorkart.org`,
    REACT_APP_S3STORAGE_URL_PINS : `https://mentorkart-admin-staging.s3.amazonaws.com`
};

const prod = {
    REACT_APP_WEBSITE_SERVER_URL_PINS : `https://www.test.pinsoutinnovation.com`,
    REACT_APP_SYSTEM_SERVER_URL_PINS : `https://www.mentorkart.com/systemapi`,
    REACT_APP_S3STORAGE_URL_PINS : `https://mentorkart-admin-staging.s3.amazonaws.com`
};


let final;

// export const config = process.env.NODE_ENV === `development` ? dev : prod;
if(process.env.REACT_APP_ENVIRONMENT === 'development'){
    final = dev
}
else if(process.env.REACT_APP_ENVIRONMENT === 'staging'){
    final = stage
}
else if(process.env.REACT_APP_ENVIRONMENT === 'production'){
    final = prod
}

export default final;