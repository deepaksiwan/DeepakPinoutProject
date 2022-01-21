import React, { useEffect, useState } from 'react'
// import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../footer/Footer'
import MyNavbar from '../header-section/MyNavbar'
import Modal from 'react-modal'
import CareersCards from './CareersCards'
import { careerList } from '../../redux/actions/careerActions'
import CareersApply from './CareersApply'
import SignUpModal from '../join-mentokart/SignUpModal'

const Careers = () => {
  const dispatch = useDispatch()
  const careersList = useSelector((state) => state.careerList)
  const { career } = careersList

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(careerList())
  }, [dispatch])

  const allCareers = career?.map((job) => (
    <CareersCards
      key={job.id}
      id={job.id}
      jobDom={job['job_domain']}
      jobDescrip={job['job_description']}
    />
  ))

  return (
    <div className="courses">
      <MyNavbar />
      <header className="courses-head">
        <div className="container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3">
          <h1 className="mb-1">Careers</h1>
        </div>
      </header>
      <div className="courses-content">
        <div id="#all" className="blogs-cards-two container py-5">
          <div className="row">{allCareers}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Careers
