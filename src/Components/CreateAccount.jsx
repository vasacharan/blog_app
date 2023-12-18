import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';



const CreateAccount = () => {
    const [register, setRegister] = useState({
        name : "",
        email : "",
        phone : "",
        password : ""
    });

    useEffect(()=>{
        sessionStorage.clear();
        
    },[])
   function selfcal(){
    window.location.reload();
   }
//    selfcal();

    const navigate = useNavigate();
    var errMsg = "Please enter the value in";

    // const {username, email, phone, password} = register;

    const isInputsValidate =()=>{
        let isProceed = true;
        
        if(register.name === null || register.name === ""){
            isProceed = false;
            errMsg += ' username';
        }

        if(register.email === null || register.email === null){
            isProceed = false;
            errMsg += " email";
        }

        if(register.phone === null || register.phone === ""){
            isProceed = false;
            errMsg += " Phone number";
        }

        if(register.password === null || register.password === ""){
            isProceed = false;
            errMsg += " password";
        }

        if(!isProceed){
            alert(errMsg);

        }else{
            if(/^[6-9]{1}[0-9]{9}$/.test(register.phone) && /^[a-zA-Z0-9]+$/.test(register.name)){
               
            }else{
                isProceed = false;
                // errMsg += " valid ph number";
                alert('Please enter the Valid username / Phone number');

            }
        }
       
        return isProceed;
        
    }

    const handleRegisterInputs =(e)=>{
        // setRegister({...register, [e.target.name] : e.target.value});
        setRegister((previous)=>({
            ...previous, [e.target.name] : e.target.value
        }))
    }

    async function handleRegisterSubmit(e){
        e.preventDefault();
        // console.log(register);

        if(isInputsValidate()){
            try{
                const res = await fetch("https://blog-application-qiks.onrender.com/api/v1/auth/registerUser",{
                    method : "POST",
                    headers : {"Content-type" : "application/json"},
                    body : JSON.stringify(register)
                })
            
                const result = await res.json();
                console.log(result);

                if(result.success){
                    console.log(result.message);
                    console.log("Registered Successful!!!");
                    navigate("/Login");
                }
                // console.log("Registered Successful!!!");
            
                }catch(error){
                    alert('error :',error.message)
                }

        }         
    }

  return (
    <div className="bg-img-ca" style={{backgroundColor:'#f1f6f5'}}>
        <div className='d-flex justify-content-center'>
        <div className="card p-3 mt-5 mb-5" style={{backgroundColor:'#3e4a61'}}>
            
            <div className="card-body">
                <h5 className="card-title" style={{color:'whitesmoke'}}>Create Account</h5>
                    <div className="mt-5">
                        <form className='text-white' onSubmit={handleRegisterSubmit}>
                            <input type="text" className="form-control text-white" onChange={handleRegisterInputs} name='name' placeholder="Name" style={{backgroundColor:'#3e4a61'}} /><br /><br />
                            <input type="email" className="form-control text-white" onChange={handleRegisterInputs} name='email' placeholder="Email" style={{backgroundColor:'#3e4a61'}}/><br /><br />
                            <input type="number" className="form-control text-white" onChange={handleRegisterInputs} name='phone' placeholder="Phone Number" style={{backgroundColor:'#3e4a61'}}/><br /><br />
                            <input type="password" className="form-control text-white" onChange={handleRegisterInputs} name='password' placeholder="Password" style={{backgroundColor:'#3e4a61'}}/><br /><br />
                            <button className="form-control button-style">Register</button>
                            <p className='lh-lg'>Already have an account? <Link to='/Login'>Sign In</Link></p> 
                        </form>
                    </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default CreateAccount;