import React from 'react';

function Footer() {
  return (
    <div className='bg-secondary-subtle mt-5 '>
      <div className='container bg-secondary-subtle mt-5'>
        <div className='row g-3'>
            <div className='col-md-3 col-6'>
                <div className='card border-0 bg-secondary-subtle'>
                    <div className='row'>
                      <div className='col '>
                        <h6>CSS TECH</h6>
                        <p>Where Tech Meets Tomorrow,We lead The way innovate and inspire,<br/> crafting Solutions That Redefine the Digital Landscape and Peaple Success.</p>
                      </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='col-md-3 col-6'>
                <div className='card  border-0 bg-secondary-subtle'>
                    <div className='row'>
                      <div className='col'>
                         <ul className='liststyle lh-lg'>
                          <h6>PRODUCT</h6>
                          <li><a href='#'>Web Development</a></li>
                          <li><a href='#'>Andraid Development</a></li>
                          <li><a href='#'>Education</a></li>
                          <li><a href='#'>Fresher</a></li>
                         </ul>
                      </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='col-md-3 col-6'>
                <div className='card  border-0 bg-secondary-subtle'>
                    <div className='row'>
                      <div className='col'>
                      <ul  className='liststyle lh-lg'>
                          <h6>USEFUL LINKS</h6>
                          <li><a href='#'>Create Blog</a></li>
                          <li><a href='#'> Contact</a></li>
                          <li><a href='#'>About</a></li>
                          <li><a href='#'>Home</a></li>
                         </ul>
                      </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='col-md-3 col-6'>
                <div className='card  border-0 bg-secondary-subtle'>
                    <div className='row'>
                      <div className='col'>
                      <ul  className='liststyle lh-lg'>
                          <h6>CONTACT</h6>
                          <li>#10 Bengalur Karnataka 577401</li>
                          <li>jyothi@gmail.com</li>
                          <li>Andraid Development</li>
                          <li>9642345076</li>
                         </ul>
                         
                      </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Footer;
