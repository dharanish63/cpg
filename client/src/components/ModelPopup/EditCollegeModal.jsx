import React, { useState } from 'react'
import { useFormik } from 'formik'
import "./ModelPopup.css";
import { axiosPut } from "../../axiosServices";

const EditCollegeModal = ({ clgById, setEditModal }) => {
    const { name, address, city, email, phone, image, courses, link } = clgById;
    const [loading, setLoading] = useState(false);
    const handleEdit = async (values) => {
        setLoading(true);
        try {
            const res = await axiosPut(`/college/${clgById._id}`, values);
            setLoading(false);
            setEditModal(false);
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }

    const formik = useFormik({
        initialValues: {
            name,
            address,
            city,
            email,
            phone,
            image,
            courses,
            link
        },
        onSubmit: values => {
            handleEdit(values);
        }
    })

    return (
        <div className="modalContainer">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="modalBox">
                    <div className="modalHeader">
                        <h2>Edit College Details</h2>
                    </div>
                    <div className="modalInner"

                    >
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">Name</label>
                                <input type="text" name="name"
                                    required
                                    defaultValue={name}
                                    onChange={formik.handleChange}
                                    values={formik.values.name}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Address</label>
                                <input type="text" name="address"
                                    required
                                    defaultValue={address}
                                    onChange={formik.handleChange}
                                    values={formik.values.address}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                            <label htmlFor="">City</label>
                            <input type="text" name="city"
                                required
                                defaultValue={city}
                                onChange={formik.handleChange}
                                values={formik.values.city}
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Image</label>
                            <input type="text" name="image"
                                required
                                defaultValue={image}
                                onChange={formik.handleChange}
                                values={formik.values.image}
                            />
                        </div>

                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">Email Address</label>
                                <input type="email" name="email"
                                    required
                                    defaultValue={email}
                                    onChange={formik.handleChange}
                                    values={formik.values.email}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Phone</label>
                                <input type="text" name="phone"
                                    required
                                    defaultValue={phone}
                                    onChange={formik.handleChange}
                                    values={formik.values.phone}
                                />
                            </div>
                        </div>
                        <div className="input-box">
                            <label htmlFor="">Courses</label>
                            <input type="text" name="courses"
                                required
                                defaultValue={courses}
                                onChange={formik.handleChange}
                                values={formik.values.courses}
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="">Link</label>
                            <input type="text" name="link"
                                required
                                defaultValue={link}
                                onChange={formik.handleChange}
                                values={formik.values.link}
                            />
                        </div>
                    </div>
                    <div className="modalFooter">
                        <button className="add-btn" type="submit">{loading ? 'Editing' : 'Edit and Save'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditCollegeModal;