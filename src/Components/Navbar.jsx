import React, { useState } from 'react';
import blog_logo from '../Assets/blogs.png';
import {Link} from 'react-router-dom';


const Navbar = () => {

  const [isLogin, setIsLogin] = useState(true);


  const signInOutValidation = JSON.parse(sessionStorage.getItem("userProfile"));
  const userProfile =  JSON.parse(sessionStorage.getItem("userProfile"));
  console.log("Form navbar / session storage data",signInOutValidation);
  console.log("Form navbar / session storage data",userProfile);

  const handleSignin=()=>{
    setIsLogin(prev=>!prev);
}

  const handleSignout=()=>{
  setIsLogin(prev=>!prev);
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#dfd3c3'}}>
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={blog_logo} alt='blog_logo' width="55px" height="55px" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" >
                        <ul className="navbar-nav" >
                          <li className="nav-item">
                            <Link to="/Home" className="nav-link active fw-bolder" aria-current="page" href="#" style={{color:"blueviolet"}}>Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link to='/ContactUs' className="nav-link fw-bolder" href="#" style={{color:"blueviolet"}}>Contact Us</Link>
                          </li>
                          <li className="nav-item">
                            <Link to='/Contributors' className="nav-link fw-bolder" href="#" style={{color:"blueviolet"}}>Contributors</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/CreateBlog" className="nav-link fw-bolder" href="#" style={{color:"blueviolet"}}>Create Blog</Link>
                          </li>
                          {
                            (isLogin === false ) ?
                              <li className="nav-item">
                              <Link to="/Login" value={isLogin} onClick={handleSignin} className="nav-link fw-bolder" href="#">Sign in</Link>
                              </li>

                            :
                              <li className="nav-item">
                              <Link to="/CreateAccount" value={isLogin} onClick={handleSignout} className="nav-link fw-bolder" href="#">Sign out</Link>
                            </li>

                            }
                            <li className="nav-item">
                            <Link to="" className="nav-link fw-bolder bg-info" href="#">{userProfile?.data.name}</Link>
                            </li>
                          
                        </ul>
                       
                    </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;