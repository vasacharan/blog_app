import React from 'react';
import blog_logo from '../Assets/blogger.png';
import blog from '../Assets/blog.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#dfd3c3'}}>
            <div class="container">
                <a class="navbar-brand"><img src={blog_logo} alt='blog_logo' width="45px" height="45px" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                          <li class="nav-item">
                            <Link to="/" class="nav-link active fw-bolder nav-list-ani" aria-current="page" href="#">Home</Link>
                          </li>
                          <li class="nav-item">
                            <Link to='/ContactUs' class="nav-link fw-bolder" href="#">Contact Us</Link>
                          </li>
                          <li class="nav-item">
                            <Link to="/CreateBlog" class="nav-link fw-bolder" href="#">Create Blog</Link>
                          </li>
                          <li class="nav-item">
                            <Link to="/CreateAccount" class="nav-link fw-bolder" href="#">Sign In</Link>
                          </li>
                        </ul>
                        <a class="navbar-brand pl-5"><img src={blog} alt='blog_logo' width="45px" height="45px" /></a>
                    </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;