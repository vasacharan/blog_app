import React, { createContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


export const userContext = createContext();

function Login() {

    const navigate = useNavigate();
    // window.location.reload();

    useEffect(()=>{
        
        sessionStorage.clear();
       
    },[]);

    const [signInInputs, setSignInInputs] = useState({
        email : "",
        password : ""
    });
    // const [storedVal, setStoredVal] = useState("charan");
    
    const {email, password } = signInInputs;
    var errMsgSignIn = "Please enter Valid";
    const handleSignInInputs =(e)=>{
        setSignInInputs({...signInInputs, [e.target.name] : e.target.value})
    }

    const isLoginValidate =()=>{
        var loginValid = true;
        

        if(signInInputs.email === null || signInInputs.email === ""){
            loginValid = false;
            errMsgSignIn += " Email";

        }

        if(signInInputs.password === null || signInInputs.password === ""){
            loginValid = false;
            errMsgSignIn += " Password";

        }
        return loginValid;
    }

    async function handleSignInSubmit(e){
        e.preventDefault();

        if(isLoginValidate()){

            try{
                const signInResponse = await fetch("https://blog-application-qiks.onrender.com/api/v1/auth/login",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(signInInputs)
            })

            console.log('crediatials: ',email,password);
            const signInResult = await signInResponse.json();
            console.log("result: ",signInResult);
            
            // localStorage.setItem("password", signInInputs.password);
            // setStoredVal(email);
            
    
            if(signInResult.success){
                alert("LogIn successful!!!");
                sessionStorage.setItem("userProfile", JSON.stringify(signInResult));
                // sessionStorage.setItem("data", signInResult);
                navigate("/");
                window.location.reload();
                
            }

        }catch(error){
            console.log(error.message);
        }
       
    }
}


  return(
        <div className='bg-img-sign'>
            <div className='d-flex justify-content-center'>
                <div className='card p-3 mt-5 mb-5 text-center cardcolor sign-card'>
                           
                    <h4 className='text-center mt-2 '>Log in</h4>
                    <form onSubmit={handleSignInSubmit}>
                        <input type='email' className="rounded backcolor w-75 mt-4 border-0 shadow-lg text-white" onChange={handleSignInInputs} name='email' placeholder='Email...'/><br/>
                        <input type='password' className=" rounded backcolor w-75  mt-4 border-0 text-white" onChange={handleSignInInputs} name='password' placeholder='Password'/><br/>
                        <button className= 'butshadow rounded w-75 mt-4 border-0 '>Login</button><br/>
                     </form>
                         <p className='mt-4 '>Don't have an account?<Link to='/CreateAccount' className=''>Register</Link></p>
                                  
                </div>
            </div>
        </div>
    )
}

export default Login;

// <h2>{storedVal}</h2>
// <userContext.Provider value={storedVal}>
//    <Navbar /> 
// </userContext.Provider> 
