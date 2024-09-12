import React from 'react';
import { FaToolbox,FaMoneyBill, FaLocationArrow } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import "./index.css"

const JobCard = ({ job }) => {
    const navigate = useNavigate();

    const handleBookmark = () => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
        bookmarks.push(job); 
        localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarks));
    };

    const handleClick = () => {
        navigate(`/jobs/${job.id}`, { state: { job } }); 
    };
    if(job.job_role){
        return (
            <div className="job-card">
                <p className="jobs-title">{job.job_role}</p>
                <p className="company-name">{job.company_name}</p>
                <p className="experience"><FaToolbox /> {job.primary_details.Experience}</p>
                <p className="experience"><FaMoneyBill /> {job.primary_details.Salary}</p>
                <p className="experience"><FaLocationArrow />{job.primary_details.Place}</p>
                <div >
                <button onClick={handleClick} className="apply-now-btn">Apply Now <MdOutlineArrowOutward /></button>
                <button onClick={handleBookmark} className="bookmark-btn">Bookmark</button>
                </div>
            </div>
        );
    }else{
        return null
    }
};

export default JobCard;
