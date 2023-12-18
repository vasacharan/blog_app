import React from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreateAccount from "./Components/CreateAccount";
import CreateBlog from "./Components/CreateBlog";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Contributors from "./Components/Contributors";
import BlogDetails from "./Components/BlogDetails";
import AboutBlog from "./Components/AboutBlog";



const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
     
        <Routes>
        <Route exact path="/" element={<AboutBlog />}/>
        <Route exact path="/Home" element={<Home />}/>
        <Route exact path="/CreateAccount" element={<CreateAccount />} />
        <Route exact path="/CreateBlog" element={<CreateBlog />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/ContactUs" element={<ContactUs />}/>
        <Route exact path="/Contributors" element={<Contributors />}/>
        <Route exact path="/Home/:blogId" element={<BlogDetails />}/>
        </Routes>
      
        <Footer />
      </BrowserRouter>
    
    
    </div>
  )
}

export default Router;