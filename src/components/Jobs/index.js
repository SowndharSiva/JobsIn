import React, { useState, useEffect } from "react";  
import { SpinnerCircular } from 'spinners-react';  
import { FaInstagram ,FaLinkedin,FaTwitterSquare,FaYoutube, FaFacebook } from "react-icons/fa";

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
        <div>  
            <div className="img-container">  
                <img src="https://www.workindia.in/employers/_next-images/?url=http%3A%2F%2Fresources.workindia.in%2Femployer%2Fassets%2Fimg%2Flanding_hero.png&w=1920&q=75" alt="home"  className="img"/>  
                <div>
                    <button className="hire-btn">Hire now</button>
                    <button className="hire-btn">Get a Job</button>
                </div>
            </div>  
            <div className="bg-container">  
                <p className="page-title">Jobs Recommended</p>  
                {loading && <SpinnerCircular color="#070871 "/>}  
                {error && <p>ERROR: {error}</p>}   
                
                <div className="job-container">  
                    {jobs.map(job => (  
                        <JobCard key={job.id} job={job} />  
                    ))}  
                </div>  
                <div className="button-container">  
                    {page > 1 && <button className="prev-button" onClick={loadPrevPage}>Previous</button>}  
                    <button className="load-more-button" onClick={loadMorePage}>Load More</button>  
                </div>  
                <div className="footer_container">
                    <p className="follow-text">Follow us</p>
                    <div className="icon-container">
                    <FaInstagram className="icon"/>
                    <FaLinkedin  className="icon"/>
                    <FaTwitterSquare className="icon"/>
                    <FaYoutube className="icon"/>
                    <FaFacebook  className="icon"/>
                    </div>
                </div>
            </div>  
        </div>  
    );  
}  

export default Jobs;