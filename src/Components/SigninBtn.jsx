import React from 'react';
import { Link } from 'react-router-dom';


const SigninBtn = () => {


  return (
    <div>
        <Link to="/CreateBlog" className="nav-link fw-bolder" href="#">Sign in</Link>
    
    </div>
  )
}

export default SigninBtn;