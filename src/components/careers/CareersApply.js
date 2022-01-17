import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { filterPackages } from '../../redux/actions/packagesActions'
// import { Button, Form } from 'react-bootstrap'
// import { useState } from 'react'
// import { addApplicant } from '../../redux/actions/addApplicantAction'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const CareersApply = (props) => {
  // console.log('props on Apply Modal', props);
  let history = useHistory()
  const [currentResume, setCurrentResume] = useState(``)
  //   const dispatch = useDispatch()
  const showModalHandler = () => {
    props.showApplyModalHandler(false)
  }
  //   const formSubmit = (e) => {
  //     e.preventDefault()
  //     dispatch(
  //       addApplicant({ id: props.id, resume: currentResume, domain: props.name })
  //     )
  //   }
  const handleRoute = () => {
    history.push('/careers')
  }

  const [uploadedImage, setUploadedImage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSspSdxbED4NVPS4AnmoyCV6cpQhm0Qxvu6Bo5rF4mLhAD0lkjRVn45RsMnB4ZT4ZP28&usqp=CAU'
  )

  function submitForm(contentType, data, setResponse) {
    console.log('data filed in application', data)
    Axios({
      url: `${process.env.REACT_APP_WEBSITE_URL_PINS}/careers/application`,
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': contentType,
      },
    })
      .then((res) => {
        setResponse(res.data)
        if (res.status === 201) {
          handleRoute()
        }
      })
      .catch((error) => {
        setResponse(error)
      })
  }

  const handleChange = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadedImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  function uploadWithFormData() {
    const formData = new FormData()

    formData.append('AppliedJOBID', props.id)
    // console.log('formDataatfirst', props.id);
    formData.append('AppliedDomain', props.name)
    formData.append('CandidateResume', currentResume)
    console.log(props.id, props.name, currentResume)
    console.log('formDattaAfter', formData)
    submitForm('multipart/form-data', formData, (msg) => console.log(msg))
  }

  return (
    // <form></form>
    <div>
      <button
        onClick={showModalHandler}
        style={{
          position: 'absolute',
          right: '10px',
          top: '25px',
          border: 'none',
          color: '#f07867',
        }}
      >
        &#10006;{' '}
      </button>
      <form
        className="p-3 mt-4"
        onSubmit={(e) => {
          e.preventDefault()
          uploadWithFormData()
        }}
      >
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="img-file" className="form-label">
              Drop your Resume Below :
            </label>
            <input
              className="form-control"
              type="file"
              id="img-file"
              name="CandidateResume"
              // value={banner_image}
              accept="image/png, image/jpeg, application/pdf"
              onChange={(e) => {
                handleChange(e)
                setCurrentResume(e.target.files[0])
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-block btn-success"
              value="Add Application"
            />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default CareersApply
