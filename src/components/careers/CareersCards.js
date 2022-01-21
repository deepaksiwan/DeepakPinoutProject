import React, { useState } from 'react'

import Modal from 'react-modal'
import CareersApply from './CareersApply'
import SignUpModal from '../join-mentokart/SignUpModal'
import final from '../../config'

const CareersCards = (props) => {
console.log('careerCards',props)
  const loggedIn = JSON.parse(localStorage.getItem('userInfo'))
  const [showModal, setShowModal] = useState(false)
  const [showApplyNowModal, setShowApplyNowModal] = useState(false)

  const showApplyHandler = (bool=true) => {
    setShowApplyNowModal(bool)
  }

  const showModalBtn = (bool) => {
    setShowModal(bool)
  }

  return (
    <>
    <div className="col-lg-4 col-md-6 col-12 px-lg-3 px-sm-2 px-3 mb-5">
      <div className="cards">
        <div className="program-card p-2">
          <div className="mx-auto">{props.jobDom}</div>
          <div className="p-3 mx-auto d-flex justify-content-around">
              <button
              onClick={() => {
                if (loggedIn === null) {
                  setShowModal(true)
                } else {
                 
                  window.location =
                    `${final['REACT_APP_WEBSITE_SERVER_URL_PINS']}/uploaded-images/` + props.jobDescrip
                }
              }}
              className="enroll-btn btn btn-ani"
              >
                View Now
              </button>
              <button className="enroll-btn btn btn-ani" onClick={()=>showApplyHandler(true)}>
                Apply Now
              </button>
          </div>
        </div>
      </div>
    </div>
    <Modal
        id="signup-modal"
        isOpen={showApplyNowModal}
        onRequestClose={() => setShowApplyNowModal(false)}
        style={{
          overlay: {
            zIndex: '5000',
          },
          content: {
            maxWidth: '700px',
            margin: 'auto',
            height: '400px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <CareersApply showApplyModalHandler={showApplyHandler} id={props.id} name={props.jobDom} />
      </Modal>
      <Modal
        id="signup-modal"
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
    </>
  )

  
  
}

export default CareersCards
