import React, { useState } from "react";
import "./ModelPopup.css";
import { useFormik } from 'formik'
import { axiosPost } from "../../axiosServices";

const AddCollegeModal = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false)

  const createCollege = async (values) => {
    setLoading(true);
    try {
      await axiosPost('/college', values);
      setLoading(false);
      setShowModal(false);
    }
    catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      email: '',
      phone: '',
      image: '',
      courses: '',
      link: ''
    },
    onSubmit: values => {
      createCollege(values)

    },
  })
  return (
    <div className="modalContainer">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="modalBox">
          <div className="modalHeader">
            <h2>New College Details</h2>
          </div>
          <div className="modalInner"

          >
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">Name</label>
                <input type="text" name="name"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.name}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Address</label>
                <input type="text" name="address"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.address}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">city</label>
              <input type="text" name="city"
                required
                onChange={formik.handleChange}
                values={formik.values.city}
              />
            </div>
            <div className="input-box">
              <label htmlFor="">image</label>
              <input type="text" name="image"
                required
                onChange={formik.handleChange}
                values={formik.values.image}
              />
            </div>

            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">Email Address</label>
                <input type="email" name="email"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.email}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Phone</label>
                <input type="text" name="phone"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.phone}
                />
              </div>

            </div>
            <div className="input-box">
              <label htmlFor="">Courses</label>
              <input type="text" name="courses"
                required
                onChange={formik.handleChange}
                values={formik.values.courses}
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Link</label>
              <input type="text" name="link"
                required
                onChange={formik.handleChange}
                values={formik.values.link}
              />
            </div>
            <div className="modalFooter" style={{ display: 'inline-flex' }}>
              <button className="add-btn" type="submit">{loading ? 'Saving...' : 'Save Details'}</button>
              &nbsp;&nbsp;
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCollegeModal;
