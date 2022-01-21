import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filterProgram } from '../../redux/actions/programActions'
import { Button } from 'react-bootstrap'

const FilterModal = (props) => {
  const dispatch = useDispatch()
  const priceRef = useRef()
  const [check, setCheck] = useState([])
  const [priceValue, setPriceValue] = useState(1000)



  const showModalHandler = () => {
    props.showFilterModalBtn(false);
  }

  const handleCheck = (e) => {

    
    let clicked = e.target.value
    console.log('clicked:', clicked);
    console.log('Event Target', e.target);
    

    setCheck((prevState) => {
      
      let isIndexFound = prevState.indexOf(clicked);
      console.log(isIndexFound, 'isIndexFound');
      if(isIndexFound === -1){
        prevState.push(clicked);
        return prevState;
      }
      else{
        prevState.splice(isIndexFound,1);
        return prevState;
      }
    });

    console.log(check);


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCheck((prevState) => {
      prevState.push(priceValue);
      return prevState;
    })
    dispatch(filterProgram(check))
    
    props.showFilterModalBtn(false)
  }
  
  const setPrice = () => {
    setPriceValue(priceRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
     <button onClick={showModalHandler} style={{position: 'absolute',right:'15px', top:'20px', border:'none', color:'black'}}> &#10006;</button>
      <h4>Course Category</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input
              type="checkbox"
              onChange={handleCheck}
              value="Free"
             
              id="Free"
            />
            <label className="m-3" htmlFor="Free">Free
             
            </label>
          </li>
          <li>
            <input
              type="checkbox"

              value="paid"
              onChange={handleCheck}
             
              id="Paid"
            />

            <label className="m-3" htmlFor="Paid">Paid
              

            </label>
          </li>
          <li>
            <input
              type="checkbox"
              value="Subscription"

              onChange={handleCheck}
              
              id="Subscription"
            />
            <label className="m-3" htmlFor="Subscription">Subscription
              
            </label>
          </li>
        </div>
      </ul>

      <h4>Duration</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input type="checkbox" id="3months" value="3 Months" onChange={handleCheck}/>
            <label className="m-3" htmlFor="3months">3 Months
              {/* <h4>3 Months</h4> */}
            </label>
          </li>
          <li>
            <input type="checkbox" id="6 Months" value="6 Months" onChange={handleCheck}/>
            <label className="m-3" htmlFor="6 Months">6 Months
              {/* <h4>6 Months</h4> */}
            </label>
          </li>
        </div>
      </ul>

      <h4>Level</h4>
      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input type="checkbox" id="Beginner" value="Beginner" onChange={handleCheck}/>
            <label className="m-3" htmlFor="Beginner">
              Beginner
              {/* <h4>Beginner</h4> */}
            </label>
          </li>
          <li>
            <input type="checkbox" id="Advanced" value="Advanced" onChange={handleCheck}/>
            <label className="m-3" htmlFor="Advanced">Advanced
              {/* <h4>Advanced</h4> */}
            </label>
          </li>
          <li>
            <input type="checkbox" id="Master" value="Master" onChange={handleCheck}/>
            <label className="m-3" htmlFor="Master">Master
              {/* <h4>Master</h4> */}
            </label>
          </li>
        </div>
      </ul>
      {/* Guarenteed */}

      <h4> Guarenteed</h4>

      <ul>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
            <input type="checkbox" id="Interview" value="Interview" onChange={handleCheck}/>
            <label className="m-3" htmlFor="Interview">Interview
              {/* <h4>Interview</h4> */}
            </label>
          </li>
          <li>
            <input type="checkbox" id="Internships" value="Internships" onChange={handleCheck}/>
            <label className="m-3" htmlFor="Internships">Internships
              {/* <h4>Internships</h4> */}
            </label>
          </li>
          <li>
            <input type="checkbox" id="Jobs" value="Jobs" onChange={handleCheck}/>
            <label className="m-3" htmlFor="Jobs">Jobs
              {/* <h4>Jobs</h4> */}
            </label>
          </li>
        </div>
      </ul>
      <h5 style={{
        marginBottom: '1rem'
      }}>Price</h5>
      <ul>
      <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            listStyle: 'none',
          }}
        >
          <li>
      <input
        type="range"
        min="500"
        max="10000"

        step="500"
        style={{ 
          width: '300px'
          // marginLeft: '80px'
          // marginBottom: '1.5rem'
        }}
        onChange={setPrice}
        ref={priceRef}
      ></input>
      </li>
      <li>MaxPrice : &#8377;{priceValue}</li>
      </div>
      </ul>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          listStyle: 'none',
          marginTop: '1.8rem',
          marginBottom: '1.5rem'
        }}
      >
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="danger" >Clear</Button>
      </div>
    </form>
  )
}

export default FilterModal
