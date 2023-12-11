import React from 'react'
// import { Link } from 'react-router-dom'


function ContactUs() {
  return (
    <div>
       <div className='container mt-5 contactwidth'>
                <div className='row'>
                    <div className='col'>
                        <div className='card   cardcolor position-relative p-3'>
                            <div className='row  '>
                                <div className='col '>
                                    <h4 className='text-center mt-2 '>Contact Us</h4>
                                    <label for="name"className=' mt-4' >Name</label><br/>
                                    <input type='text' className="  rounded backcolor w-100 border-0 shadow-lg "/><br/>
                                    <label for="email"className='mt-4' >Email</label><br/>
                                    <input type='email' className=" rounded backcolor w-100 border-0 shadow-lg" /><br/>
                                    <label for="number"className='mt-4 ' >Phone Number</label><br/>
                                    <input type='number' className=" rounded backcolor w-100   border-0" /><br/>
                                    <label for="text"className=' mt-4' >Message</label><br/>
                                    <input type='text' className=" rounded backcolor w-100   border-0" /><br/>
                                    <button className= ' butshadow rounded w-100 mt-4 border-0 '>Submit</button><br/>
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
