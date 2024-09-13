import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"; // Ensure you import Routes  
import Jobs from "./components/Jobs";  
import Bookmarks from "./components/Bookmarks";  
import JobDetails from "./components/JobDetails";  
import './App.css';  

function App() {  
  return (  
    <Router>  
      <div className="App">  
        <nav className="nav-container"> 
          <div className="logo-container">
          <img src="https://tse2.mm.bing.net/th?id=OIP.e9Tb3d9LMelGlCjdOotjJQHaHa&pid=Api&P=0&h=180" className="logo-img" alt="logo" />  
          <h1 className="job-title">HireIn</h1>
          </div> 
          <div className="navlink-container">  
            <NavLink to="/" className='nav-link'>
              Jobs
            </NavLink>  
            <NavLink to="/bookmarks" className="nav-link">
              Bookmarks
            </NavLink>  
            
          </div> 
          <button className="logout">Logout</button> 
        </nav> 
        <div className="main-container">
        <Routes>  
          <Route path="/" element={<Jobs />} />  
          <Route path="/bookmarks" element={<Bookmarks />} />  
          <Route path="/jobs/:jobId" element={<JobDetails />} />  
        </Routes>  
      </div>  
      </div> 
    </Router>  
  );  
}  

export default App;