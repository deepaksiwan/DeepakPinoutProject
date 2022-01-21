import React, { useState, useEffect } from 'react';
import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { listshowcase } from '../../redux/actions/showcase';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

// import Swiper core and required modules
import SwiperCore, { EffectFade, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import ShowcaseImage from './ShowcaseImage';

// install Swiper modules
SwiperCore.use([EffectFade, A11y, Autoplay]);

const Showcase = () => {
  const user = localStorage.getItem('userInfo');

  const dispatch = useDispatch();
  const websiteContentList = useSelector((state) => state.websiteContentList);
  const showcaseList = useSelector((state) => state.showcaseList);
  const { websiteContent } = websiteContentList;
  const { showcase } = showcaseList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listWebsiteContent());
    dispatch(listshowcase());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const handleClick = () => {
    if (user) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className='showcase-section'>
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

      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row'>
          <div className='col-md-6 left d-flex flex-column justify-content-center'>
            <p className='showcase-para mb-0 mt-md-0 mt-4'>
              {ReactHtmlParser(websiteContent[0]?.data[1]?.field_data)}

              {`Hey There, Welcome!!!`}
            </p>
            <h1 className='showcase-heading mt-md-3 mb-md-5 mt-3 mb-4'>
              {websiteContent[0]?.data[0]?.field_data}
              <sup>
                <h6 className='d-inline'>
                  <sup>&reg;</sup>
                </h6>
              </sup>
            </h1>
            <div className='row showcase-cards'>
              <div className='col-xl-5 col-6'>
                <Link to='/all-mentors' className='showcase-card one'>
                  <div className='showcase-card-top d-flex align-items-center py-md-2 px-md-3 py-1 px-2'>
                    <div>
                      <img src='/images/showcase-card-one.png' alt='' />
                    </div>
                    <div className='ms-2'>
                      <span>Find a</span>
                      <h2>Mentor</h2>
                    </div>
                  </div>
                  <div className='showcase-card-bottom text-center'>
                    Find a mentor
                  </div>
                </Link>
              </div>
              <div className='col-xl-5 col-6'>
                <div onClick={handleClick} className='showcase-card two'>
                  <div className='showcase-card-top d-flex align-items-center py-md-2 px-md-3 py-1 px-2'>
                    <div className=''>
                      <img src='/images/showcase-card-two.png' alt='' />
                    </div>
                    <div className='ms-2'>
                      <span>Ask a</span>
                      <h2>Mentor</h2>
                    </div>
                  </div>
                  <div className='showcase-card-bottom text-center'>
                    Ask a mentor
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-6 right d-md-block d-none'>
            <div className='right-img container'>
              <Swiper
                effect={'fade'}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ autoplay: true, delay: 10000 }}
                breakpoints={{
                  // when window width is >= 0px
                  0: {
                    slidesPerView: 1,
                  }
                  // when window width is >= 1000px
                }}
              >
                {showcase[0]?.data?.map((x, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ShowcaseImage image={x.image} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Showcase;

