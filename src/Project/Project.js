import React, { useEffect } from 'react';
import SocialMedia from '../Images/top-5-reasons-why-you-need-a-social-media-manager-616015983b3ba-sej.webp'
import Hospital from '../Images/Hospital-Management-System.webp'
import Protfolio from '../Images/images.jpeg'
import '../Project/Project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Project() {
    useEffect(()=>{
        AOS.init({duration :2000,});
    },[])
  return (
    <div className='Project p-5' id='Project'>
      <div className='myProjectText pt-5'>
        <h3 className='text-center'>MY <span>PROJECT</span></h3>
        <hr />
      </div>

      <div className='container text-center mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
            <div className='card text-dark'>
              <img src={SocialMedia} className ="card-img-top" alt=" Social Media" />
              <div className='card-body'>
                <h5 className=' card-title'>Social Media</h5>
                <p> A platform for managing and scheduling social media content efficiently </p>
                <a href='' className='btn'>GitHub</a>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
            <div className='card text-dark'>
              <img src={Hospital} className ="card-img-top" alt=" Hospital" />
              <div className='card-body'>
                <h5 className=' card-titile'>Hospital Management</h5>
                <p> A system designed to streamline hospital operations..A system designed to streamline hospital operations  </p>
                <a href='' className='btn'>GitHub</a>
              </div>
            </div>
          </div>

           <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
            <div className='card text-dark'>
              <img src={Protfolio} className ="card-img-top" alt="Protfolio" />
              <div className='card-body'>
                <h5 className=' card-titile'>Portfolio Website</h5>
                <p> A responsive portfolio website showcasing my work...A responsive portfolio website showcasing my work </p>
                <a href='https://github.com/Praveennnnn/portfolilo' className='btn'>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
