import React from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreateAccount from "./Components/CreateAccount";
import CreateBlog from "./Components/CreateBlog";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";



const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
     
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/CreateAccount" element={<CreateAccount />} />
        <Route exact path="/CreateBlog" element={<CreateBlog />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/ContactUs" element={<ContactUs />}/>
        </Routes>
      
        <Footer />
      </BrowserRouter>
    
    
    </div>
  )
}

export default Router;