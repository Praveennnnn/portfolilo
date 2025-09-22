import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPen } from '@fortawesome/free-solid-svg-icons';
import '../Services/Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {
    useEffect(()=>{
        AOS.init({duration :2000,});
    },[])
  return (
    <div className='services p-10' id='Services'>
      <div className='myServicesText pt-5'>
        <h3 className='text-center'>MY <span>SERVICES</span></h3>
        <hr />
      </div>

      <div className='container text-center mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
            <div className='border service  p-4'>
              <p className='servicesIcon'><span className='border p-2'><FontAwesomeIcon icon={faCode} size="2x" /></span></p>
              <h5 className='mt-4'>WEB DEVELOPMENT</h5>
              <p>Building responsive and modern web applications using HTML, CSS, JavaScript, and React.</p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='border service text-center p-4' data-aos="zoom-left">
              <p className='servicesIcon'><span className='border p-2'><FontAwesomeIcon icon={faPen} size="2x" /></span></p>
              <h5 className='mt-4'>WEB DESIGN</h5>
              <p>Creating user-friendly and visually appealing designs using Figma, Adobe XD, and modern UI practices.</p>
            </div>
          </div>
           <div className='col-12 col-md-6 col-lg-4'>
            <div className='border service text-center p-4'data-aos="fade-left">
              <p className='servicesIcon'><span className='border p-2' ><FontAwesomeIcon icon={faPen} size="2x" /></span></p>
              <h5>WEB DESIGN</h5>
              <p>Creating user-friendly and visually appealing designs using Figma, Adobe XD, and modern UI practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
