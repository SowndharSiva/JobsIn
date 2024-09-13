import React from 'react';  
import { useLocation } from 'react-router-dom';  
import "./index.css";  

const JobDetails = () => {  
    const location = useLocation();  
    const job = location.state?.job;   
    if (!job) {  
        return <p>Job not found.</p>;  
    }  
    const dateStr = job.updated_on;  
    const date = new Date(dateStr);  

    const options = { month: 'short', day: 'numeric' };  
    const formattedDate = date.toLocaleString('en-US', options);  

    const handleCallHRClick = () => {  
        window.location.href = job.custom_link;  
    };  

    return (  
        <div className="job-description-container">  
            <h2 className="job-title-d">{job.job_role}</h2>  
            <p className="company-name">{job.company_name}</p>  
            <p className="job-type">{job.job_hours}</p>  
            <div className="salary-container">  
                <div className="salary-container1">  
                    <p className="job-location">{job.primary_details.Place}</p>  
                    <div className="vertical-line"></div>  
                    <p className="job-location">{job.primary_details.Salary}</p>  
                </div>  
                <p className="job-date">Posted on {formattedDate}</p>  
            </div>  
            <hr className="horizon-line"/>  
            <h1 className="company-name">Experience:</h1>  
            <p className="job-content">{job.primary_details.Experience}</p>  
            <h1 className="company-name">Job Category:</h1>  
            <p className="job-content">{job.job_category}</p>  
            <h1 className="company-name">Qualification:</h1>  
            <p className="job-content">{job.primary_details.Qualification}</p>  
            <h1 className="company-name">Description:</h1>  
            <p className="job-content ">{job.other_details}</p>  
            <button onClick={handleCallHRClick} className="call-btn">  
                📞 Call HR  
            </button>  
        </div>  
    );  
};  

export default JobDetails;