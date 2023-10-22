import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { axiosDelete } from "../../axiosServices";

const CollegeCard = ({ clgData, handleEdit, handleReRender}) => {
  const { name, address, city, email, phone, image, courses, link } = clgData;
  const [dropDown, setDropdown] = useState(false);
  const coursesList = courses.split(',');
  const listItems = coursesList.map(course => <li>{course}</li>);

  const handleDelete = async(id) =>{
    try{
      await axiosDelete(`/college/${id}`);
      handleReRender();
    }
    catch(err){
      console.log(err);
    }    
  }

  return (
    <div className="card-component">
      <div className="card-inner">
        <div className="dropdownContainer">
          <BsThreeDotsVertical size={20} onClick={() => setDropdown(!dropDown)} />
          {
            dropDown && <ul className="dropdown"
              onMouseLeave={() => setDropdown(false)}
            >
              <li onClick={()=>handleEdit(clgData._id)}>Edit</li>
              <li onClick={()=>handleDelete(clgData._id)}>Delete</li>
            </ul>
          }
        </div>
        <div className="profileImage">
          <img
          src={image}
            alt={name}
          />
        </div>
        <div className="emp-detail">
          <h3>{name}</h3>
          <p>{address}, {city}</p>
          <p className="courses-list">{courses}</p>
        </div>
      </div>
      <div className="job-role">
      <a className="add-btn" href={link} target="_blank">Read More</a>
      </div>
    </div>
  );
};

export default CollegeCard;
