import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { axiosGet } from "../axiosServices";
import CollegeCard from "../components/Cards/CollegeCard";
import EditCollegeModal from "../components/ModelPopup/EditCollegeModal";
import AddCollegeModal from "../components/ModelPopup/AddCollegeModal";
import "./Colleges.css";

const Colleges = ({ setCollegeId }) => {
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [colleges, setColleges] = useState([]);
    const [clgById, setClgById] = useState([]);
    const [reRender, setReRender] = useState(false);

    const getAllColleges = async () => {
        try {
            const res = await axiosGet('/college')
            setColleges(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const getCollegeById = async (id) => {
        try {
            const res = await axiosGet(`/college/${id}`);
            setClgById(res.data);
            setEditModal(true);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleEdit = async (id) => {
        getCollegeById(id);        
    }

    const handleReRender = () => {
        setReRender(true);
    }

    useEffect(() => {
        getAllColleges();
    }, [showModal, editModal, reRender])
    return (
        <>
            {
                showModal && <AddCollegeModal setShowModal={setShowModal} />
            }
            {
                editModal && <EditCollegeModal setEditModal={setEditModal} clgById={clgById} />
            }

            <main className="mainContainer">
                <div className="mainWrapper">
                    <h1>
                        Colleges <span className="emp-count">{colleges.length}</span>
                    </h1>
                    <div className="employeeHeader">
                        <div className="searchBox">
                        </div>
                        <button className="add-btn"
                            onClick={() => setShowModal(true)}
                        ><IoMdAdd size="20" color="#fffff" />Add College</button>
                    </div>
                    <div className="employees">
                        {
                            colleges && colleges.map((clg) => {
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

export default Colleges;