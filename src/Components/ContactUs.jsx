import React, { useState } from 'react';


function ContactUs() {
const [contactList, setContactList] = useState({
    name : "",
    email : "",
    phno : "",
    message : ""
})
const handleContactInputs =(e)=>{
setContactList({...contactList, [e.target.name] : e.target.value })
}

const handleContactSubmit =(e)=>{
    e.preventDefault();
    console.log(contactList);
}
  return (
    <div>
       <div className='container mt-5 contactwidth'>
                <div className='row'>
                    <div className='col'>
                        <div className='card cardcolor position-relative p-3'>
                            <div className='row'>
                                <div className='col'>
                                    <h4 className='text-center mt-2'>Contact Us</h4>
                                    <form onSubmit={handleContactSubmit}>
                                    <label for="name" className='mt-4'>Name</label><br/>
                                    <input type='text' id='name' className="rounded backcolor w-100 border-0 shadow-lg" onChange={handleContactInputs} name='name' /><br/>
                                    <label for="email" className='mt-4' >Email</label><br/>
                                    <input type='email' id='email' className="rounded backcolor w-100 border-0 shadow-lg" onChange={handleContactInputs} name='email' /><br/>
                                    <label for="number" className='mt-4'>Phone Number</label><br/>
                                    <input type='number' id='number' className="rounded backcolor w-100 border-0" onChange={handleContactInputs} name='phno' /><br/>
                                    <label for="message" className=' mt-4' >Message</label><br/>
                                    <input type='text' id='message' className="rounded backcolor w-100 border-0" onChange={handleContactInputs} name='message' /><br/>
                                    <button className='butshadow rounded w-100 mt-4 border-0'>Submit</button><br/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    </div>
  )
}

export default ContactUs;
