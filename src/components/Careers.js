import React, { useEffect, useState } from 'react';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';
import Modal from 'react-modal'

const Careers = () => {

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [showFilterModal, setFilterModal] = useState(false);
  // const [search, setSearch] = useState('')

  const handleCLick = (value) => () => {
    setSort(value);
  }

  const showFilterModalBtn = (bool) => {
    setFilterModal(bool)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='courses'>
      <MyNavbar />
      <header className='courses-head'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
          <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
          <h1 className='mb-1'>Careers</h1>
          <form action="" className="courses-search">
            <div className="form-group">
              <span>
                <i className="fas fa-search me-2 ms-1"></i>
              </span>
              <input
                type="text"
                name="search-text"
                placeholder="Search Course"
                className="form-control"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
          <div className="tags d-flex mt-3 justify-content-center">
            <ul className="d-flex flex-wrap">
              <li>
                <button className="btn" onClick={handleCLick('')}>
                  All
                </button>
              </li>
              <li>
                <button className="btn" onClick={handleCLick('Web Dev')}>
                  Web Dev
                </button>
              </li>
              <li>
                <button className="btn" onClick={handleCLick('Android Dev')}>
                  Android Dev
                </button>
              </li>
              <li>
                <button className="btn" onClick={handleCLick('ML')}>
                  ML
                </button>
              </li>
              <li>
                <button
                  className="btn"
                  onClick={() => showFilterModalBtn(true)}
                >
                  More Filters
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
