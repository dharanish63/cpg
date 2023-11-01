import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { axiosGet } from "../axiosServices";
import { axiosPost } from "../axiosServices";
import CollegeCard from "../components/Cards/CollegeCard";
import { useFormik } from 'formik';
import "./Search.css";

const Employees = ({ setEmployeeId }) => {

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [reRender, setReRender] = useState(false);
    const [selectedBOIOptions, setSelectedBOIOptions] = useState([]);
    const [selectedCourseOptions, setSelectedCourseOptions] = useState([]);

      const searchColleges = async (values) => {
        console.log(values);
        setLoading(true);
        try {
          const res = await axiosGet('/searchcollege/'+values.location+'/'+values.course);
          setSearchResults(res.data);
          setLoading(false);
        }
        catch (err) {
          console.log(err)
        }
      }

      const handleEdit = async (id) => {
        // getCollegeById(id);        
    }

      const BOIOptions = [
    {
        label: "Diplamo",
      value: "diplamo",
      type:"dip"
    },
    {
        label: "Arts and Science",
      value: "Arts",
      type:"art"
      
    },
    {
      label: "Engineering",
      value: "engg",
      type:"eng"
    }
    
  ];

  const BackgroundOptions = [
    {
      label: "computer Science",
      value: "cs",
      type:"dip"
      
    },
    {
        label: "Arts",
      value: "Arts",
      type:"art"
    },
    {
      label: "biology",
      value: "bio",
      type:"bio"
    }
  ];
  const CourseOptions = [
    {
      label: "DC1",
      value: "DC1",
      type: "diplamo"
    },
    {
      label: "DC2",
      value: "DC2",
      type: "diplamo"
    },
    {
      label: "DC3",
      value: "DC3",
      type: "diplamo"
    },
    {
      label: "EC1",
      value: "EC1",
      type: "engg"
    },
    {
      label: "EC2",
      value: "EC2",
      type: "engg"
    },
    {
      label: "EC3",
      value: "EC3",
      type: "engg"
    },
    {
      label: "B.Sc(IT)",
      value: "Arts_and_Science",
      type: "Arts"
    },
    {
      label: "B.Sc(CS)",
      value: "Arts_and_Science",
      type: "Arts"
    },
    {
      label: "BBA",
      value: "Arts_and_Science",
      type: "Arts"
    },
    {
      label: "BCA",
      value: "Arts_and_Science",
      type: "Arts"
    }
    ,
    {
      label: "B.COM",
      value: "Arts_and_Science",
      type: "Arts"
    }
    ,
    {
      label: "B.COM(CA)",
      value: "Arts_and_Science",
      type: "Arts"
    },
    {
      label: "B.COM(ABA)",
      value: "Arts_and_Science",
      type: "Arts"
    },
    {
      label: "BA(ENGLISH)",
      value: "Arts_and_Science",
      type: "Arts"
    },
    {
      label: "BA(TAMIL)",
      value: "Arts_and_Science",
      type: "Arts"
    }
  ];
  const getAOIOptions = () => {
        return selectedCourseOptions.map((opt, index) => {
          return <option value={opt.value} key={index}>{opt.label} 
                 </option>;
        });
      }
  const onAOIOptionChange = (e) => {
        console.log(e.target.value);
        const filteredCourses = CourseOptions.filter(course => course.type === e.target.value);
        console.log(filteredCourses);
        setSelectedCourseOptions(filteredCourses);
      }

       const getBOIOptions = () => {
        return selectedBOIOptions.map((opt, index) => {
          return <option value={opt.value} key={index}>{opt.label} 
                 </option>;
        });
      }

      const getBackgroundOptions = () => {
        return BackgroundOptions.map((opt) => {
          return <option value={opt.value} key={opt.value}>{opt.label} 
                 </option>;
        });
      }

      const handleReRender = () => {
        setReRender(true);
    }
const onBOIOptionChange = (e) => {
        console.log(e.target.value);
        
        // console.log(filteredCourses);
        if(e.target.value=="cs" || e.target.value=="bio")
        {
            setSelectedBOIOptions(BOIOptions); 
        }
        else{
            const filteredCourses = BOIOptions.filter(interest => interest.value === e.target.value);
        setSelectedBOIOptions(filteredCourses); 
        }       
      }
    const formik = useFormik({
    initialValues: {
      tenth_perc: '',
      twelth_perc: '',
      background: '',
      area_of_interest: '',
      course: '',
      location: ''
    },
    onSubmit: values => {
      searchColleges(values);
    },
  })
    return (
        <>
            <main className="mainContainer">
                <div className="mainWrapper">
                    <h1>
                        Search
                    </h1>
                    
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="modalBox">
                          <div className="modalInner"

                          >
                                                   

                            <div className="input-box">
                                <label htmlFor="">Background</label>
                                <select name="background" onChange={onBOIOptionChange} onBlur={formik.handleBlur}
                                  values={formik.values.background}>
                                    <option value="">Select</option>
                                    {getBackgroundOptions()}
                                </select>
                              </div><br/>
                              <h4>Enter The Marks </h4><br/>
                              <div className="input-container">
                  
                              <div className="input-box">
                                <label htmlFor="">Biology</label>
                                <input type="number" name="bio_mark"
                                  required
                                  onChange={formik.handleChange}
                                  values={formik.values.bio_mark}
                                />
                              </div>
                              <div className="input-box">
                                <label htmlFor="">Chemistry</label>
                                <input type="number" name="che_mark"
                                  required
                                  onChange={formik.handleChange}
                                  values={formik.values.che_mark}
                                />
                              </div>
                            </div>
                          <div className="input-container">
                              <div className="input-box">
                                <label htmlFor="">Physics</label>
                                <input type="text" name="phy_mark"
                                  required
                                  onChange={formik.handleChange}
                                  values={formik.values.phy_mark}
                                />
                              </div>
                              <div className="input-box">
                                <label htmlFor="">Maths</label>
                                <input type="text" name="math_mark"
                                  required
                                  onChange={formik.handleChange}
                                  values={formik.values.math_mark}
                                />
                              </div>
                            </div>          

                              <div className="input-box">
                                <label htmlFor="">Area of Interest</label>
                                <select name="area_of_interest" onChange={onAOIOptionChange} onBlur={formik.handleBlur}
                                  values={formik.values.area_of_interest}>
                                    <option value="">Select</option>
                                    {getBOIOptions()}
                                </select>
                              </div>

                            <div className="input-box">
                              <label htmlFor="">Course</label>
                              <select name="course" onChange={formik.handleChange} onBlur={formik.handleBlur}
                                  values={formik.values.course}>
                                    <option value="">Select</option>
                                    {getAOIOptions()}
                                    </select>
                            </div>
                            <div className="input-box">
                              <label htmlFor="">Location</label>
                              <input type="text" name="location"
                                required
                                onChange={formik.handleChange}
                                values={formik.values.location}
                              />
                            </div>
                            
                            <div className="modalFooter" style={{ display: 'inline-flex' }}>
                              <button className="add-btn" type="submit">{loading ? 'Searching...' : 'Search'}</button>
                              &nbsp;&nbsp;
                              <button className="cancel-btn">Reset</button>
                            </div>
                          </div>
                        </div>
                      </form>

                      <div className="employees">
                          {
                            searchResults && searchResults.map((clg) => {
                                return <div key={clg._id}>
                                    <CollegeCard
                                        clgData={clg}
                                        handleEdit={handleEdit}
                                        handleReRender={handleReRender} />
                                </div>
                            })
                        }
                      </div>
                </div>
            </main>
        </>
    );
};

export default Employees;