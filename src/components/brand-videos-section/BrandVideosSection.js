import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import { useDispatch, useSelector } from 'react-redux';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

const BrandVideosSection = () => {
  const dispatch = useDispatch();
  const websiteContentList = useSelector((state) => state.websiteContentList);

  const { websiteContent } = websiteContentList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listWebsiteContent());
  }, [dispatch]);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: 'https://localhost:8100',
    },
  };
  return (
    <div className='brand-videos-section'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 pb-5'>

        <div className='row text-center'>
          <span>{websiteContent[0]?.data[28]?.field_data}</span>
          <h1>{websiteContent[0]?.data[29]?.field_data}</h1>
        </div>
        <div className='content'>
          <div className='row align-items-center py-4'>
            <div className='col-lg-6'>
              <h1>{websiteContent[0]?.data[30].field_data}</h1>
              <p>{websiteContent[0]?.data[32].field_data}</p>

              <p className='mb-lg-0 mb-4'>
                <strong>{websiteContent[0]?.data[32].field_data}</strong>

              </p>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='youtube-video'>
                  <YouTube
                    videoId={getYouTubeID(
                      'https://www.youtube.com/watch?v=Lmchw6NraRs'
                    )}
                    opts={opts}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row py-4 align-items-center flex-column-reverse flex-lg-row pb-0'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='youtube-video'>
                  <YouTube
                    videoId={getYouTubeID(
                      'https://www.youtube.com/watch?v=cFbBwWM63so'

                    )}
                    opts={opts}
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-6 order-lg-12'>
              <h1>{websiteContent[0]?.data[33].field_data}</h1>
              <p>{websiteContent[0]?.data[34].field_data}</p>
              <p className='mb-lg-0 mb-4'>
                <strong>{websiteContent[0]?.data[35].field_data}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandVideosSection;


