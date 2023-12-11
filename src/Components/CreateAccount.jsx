import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const CreateAccount = () => {
    const [register, setRegister] = useState({
        username : "",
        email : "",
        ph_no : "",
        password : ""
    });
    var errMsg = "Please enter the value in";

    const {username, email, ph_no, password} = register;

    const isInputsValidate =()=>{
        let isProceed = true;
        
        if(register.username === null || register.username === ""){
            isProceed = false;
            errMsg += ' username';
        }

        if(register.email === null || register.email === null){
            isProceed = false;
            errMsg += " email";
        }

        if(register.ph_no === null || register.ph_no === ""){
            isProceed = false;
            errMsg += " Phone number";
        }

        if(register.password === null || register.password === ""){
            isProceed = false;
            errMsg += " password";
        }

        if(!isProceed){

        }else{
            if(/^[6-9]{1}[0-9]{9}$/.test(ph_no) && /^[a-zA-Z0-9]+$/.test(username)){
               
            }else{
                isProceed = false;
                // errMsg += " valid ph number";
                alert('Please enter the Valid username / Phone number');

            }
        }
       
        return isProceed;
        
    }

    const handleRegisterInputs =(e)=>{
        setRegister({...register, [e.target.name] : e.target.value});
    }

    const handleRegisterSubmit =(e)=>{
        e.preventDefault();
        if(isInputsValidate()){
            console.log(register);
           alert('Registration Successfull!!!');
        }else{
            alert(errMsg);
            // console.log(errMsg);
        }
        
    }

  return (
    <div>
        <div className='d-flex justify-content-center mt-2'>
        <div class="card p-3" style={{backgroundColor:'#3e4a61'}}>
            
            <div class="card-body">
                <h5 class="card-title" style={{color:'whitesmoke'}}>Create Account</h5>
                    <div class="mb-3 mt-5">
                        <form className='text-white' onSubmit={handleRegisterSubmit}>
                            <input type="text" class="form-control" onChange={handleRegisterInputs} name='username' id="exampleFormControlInput1" placeholder="Name" style={{backgroundColor:'#3e4a61'}} /><br /><br />
                            <input type="email" class="form-control" onChange={handleRegisterInputs} name='email' id="exampleFormControlInput2" placeholder="Email" style={{backgroundColor:'#3e4a61'}}/><br /><br />
                            <input type="number" class="form-control" onChange={handleRegisterInputs} name='ph_no' id="exampleFormControlInput3" placeholder="Phone Number" style={{backgroundColor:'#3e4a61'}}/><br /><br />
                            <input type="password" class="form-control" onChange={handleRegisterInputs} name='password' id="exampleFormControlInput4" placeholder="Password" style={{backgroundColor:'#3e4a61'}}/><br /><br />
                            <button class="form-control button-style">Register</button>
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