import React, { useState, useEffect } from "react";  
import { SpinnerCircular } from 'spinners-react';  

import JobCard from "../JobCard";  
import "./index.css";  

const Jobs = () => {  
    const [jobs, setJobData] = useState([]);  
    const [page, setPages] = useState(1);  
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null);  

    useEffect(() => {  
        const fetchJobs = async () => {  
            try {  
                setLoading(true);  
                const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);  
                const data = await response.json();  
                setJobData([ ...data.results]);   
                setLoading(false);  
            } catch (e) {  
                setLoading(false);  
                setError("The Jobs failed to load"); 
            }  
        };  
        fetchJobs();  
    }, [page]);  

    const loadMorePage = () => {  
        setPages((prevPage) => prevPage + 1);  
    };  

    const loadPrevPage = () => {  
        if (page > 1) {  
            setPages((prevPage) => prevPage - 1);  
        }  
    };  

    return (  
        <div className="bg-container">  
            <p className="page-title">Jobs Recommended</p>
            {loading && <SpinnerCircular color="#070871 "/>}
            {error && <p>ERROR: {error}</p>} 
            
            <div className="job-container">  
                {jobs.map(job => (  
                    <JobCard key={job.id} job={job} />  
                ))}  
            </div>
            <div>
            <div className="button-container">  
                {page > 1 && <button className="prev-button" onClick={loadPrevPage}>Previous</button>}  
                <button className="load-more-button" onClick={loadMorePage}>Load More</button>
            </div>  
            </div>
        </div>  
    );  
}  

export default Jobs;