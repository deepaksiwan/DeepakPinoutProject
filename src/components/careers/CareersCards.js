import React, { useState } from 'react'
import SignInModal from '../header-section/SignInModal'
import Modal from 'react-modal'
import CareersApply from './CareersApply'
import SignUpModal from '../join-mentokart/SignUpModal'

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
                  // window.location = `https://mentorkart.org/mentorkart?SSO_Mtoken=${loggedIn}&domain=https://mentorkart-new-ui.netlify.app`
                  window.location =
                    `${process.env.REACT_APP_WEBSITE_URL_PINS}/uploaded-images/` + props.jobDescrip
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

  //   return (
  //     <>
  //     <div className="col-lg-4 col-md-6 col-12 px-lg-3 px-sm-2 px-3 mb-5">
  //       <div className="cards">
  //         <div className="program-card p-2">
  //           <div className="p-3">
  //             <div className="d-flex justify-content-between align-items-center">
  //               <div>
  //                 <h2 className="mt-0 mb-4 pe-3" style={{ fontSize: '16px' }}>
  //                   {props['jobDomain']}
  //                 </h2>
  //               </div>
  //               {/* <h6 className="mb-0">₹ {course.price} /-</h6> */}
  //             </div>

  //             <div className="row">
  //               <a
  //                 className="col-6"
  //                 href={`${process.env.REACT_APP_WEBSITE_URL_PINS}/uploaded-images/${props['jobDescription']}`}
  //               >
  //                 <button
  //                   onClick={() => {
  //                     if (loggedIn === null) {
  //                       setShowModal(true)
  //                     } else {
  //                       window.location = `https://mentorkart.org/mentorkart?SSO_Mtoken=${loggedIn}&domain=https://mentorkart-new-ui.netlify.app`
  //                     }
  //                   }}
  //                   className="enroll-btn form-control btn btn-ani"
  //                 >
  //                   View Details
  //                 </button>
  //               </a>
  //               <div className="col-6">
  //                 <button
  //                   className="enroll-btn form-control btn btn-ani"
  //                   onClick={() => setShowApplyNowModal(true)}
  //                 >
  //                   Apply Now
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  // <Modal
  // id="apply-modal"
  // isOpen={showApplyNowModal}
  // closeTimeoutMS={500}
  // shouldCloseOnEsc={true}
  // onRequestClose={() => setShowApplyNowModal(false)}
  // style={{
  //   overlay: {
  //     zIndex: '5000',
  //   },
  //   content: {
  //     maxWidth: '700px',
  //     // height: '50px',
  //     height: '400px',
  //     margin: 'auto',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: '15px',
  //   },
  // }}
  // >
  // <CareersApply applyNowBtn={showApplyHandler} />
  // </Modal>

  // <Modal
  // id='signup-modal'
  // isOpen={showModal}
  // onRequestClose={() => setShowModal(false)}
  // style={{
  //   overlay: {
  //     zIndex: '5000',
  //   },
  //   content: {
  //     maxWidth: '1100px',
  //     margin: 'auto',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: '15px',
  //   },
  // }}
  // >
  // <SignInModal showModalBtn={showModalBtn} />
  // </Modal>

  // </>
  //   )
}

export default CareersCards
