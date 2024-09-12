import {useState,useEffect} from "react"
import JobCard from '../JobCard';
import "./index.css"

const Bookmark=()=>{
    const [bookmarkJobs,setBookmarkJobs]=useState([])
    useEffect(() => {
        const savedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
        setBookmarkJobs(savedJobs);
      }, []);
    const clearBookmarkJobs=()=>{
        localStorage.removeItem("BookmarkedJobs")
        setBookmarkJobs([])
    }
    return(
        <div>  
            <p className="bookmark-title">Bookmarked Jobs</p>
            <div className="clear-btn-container">
                <button className="clear-btn" onClick={clearBookmarkJobs}>Clear all</button>
            </div>
            
            <div className="job-container">  
                {bookmarkJobs.map(job => (  
                    <JobCard key={job.id} job={job} />  
                ))}  
            </div>
        </div>
    )
}
export default Bookmark