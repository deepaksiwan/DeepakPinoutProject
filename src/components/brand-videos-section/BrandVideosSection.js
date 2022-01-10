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
              <h1>I am a Student</h1>
              <p>
                There are challenging times in our life when we are grappling
                with some difficultly and require guidance. Your family and
                friends are rarely in the position to fill the gaps as they may
                not be able to relate to the issue you are facing, they may also
                lack the skills and may not be that trustworthy.
              </p>

              <p className='mb-lg-0 mb-4'>
                <strong>
                  A mentor coach handholds you on the journey you have never
                  walked before, like taking up a new career. They channelize
                  your energy constructively and shorten the learning curve.
                </strong>
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
              <h1>I am a Professional</h1>

              <p>
                We often come across situations in life where it gets
                challenging to rise to the occasion and we feel ourselves
                deficient in taking up the task. It may be taking up a new
                career, trying to become an exemplary performer in that new and
                much coveted job, career transitioning, building a freelance
                career or needing a financial mentor to streamline your
                finances.
              </p>
              <p className='mb-lg-0 mb-4'>
                <strong>
                  If one needs to succeed in life without wasting much of time
                  and resources, enrolling in a mentorship program is the right
                  approach. Mentorship programs aim at long term professional
                  development of an individual. It follows a mentoring plan with
                  the mentor performing a skills analysis and setting up a
                  milestone-based program to lead you towards success.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandVideosSection;

          
          