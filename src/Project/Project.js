import React, { useEffect } from 'react';
import SocialMedia from '../Images/top-5-reasons-why-you-need-a-social-media-manager-616015983b3ba-sej.webp'
import QRCode from '../Images/QRCode.png'
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
              <img src={SocialMedia} className ="card-img-top" style={{height:"230px"}} alt=" Social Media" />
              <div className='card-body'>
                <h5 className=' card-title'>Ecommerce</h5>
                <p>A platform for browsing and managing products online, without integrated payment functionality.</p>
                <a href='https://68d0eefcdc2c6fa06881d0ba--eshopyyyyy.netlify.app/' className='btn'>Visit</a>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
            <div className='card text-dark'>
              <img src={QRCode} className ="card-img-top" alt=" QRCode" style={{height:"230px"}} />
              <div className='card-body'>
                <h5 className=' card-titile'>Automatic QR Code Generatorr</h5>
                <p>This tool generates QR codes instantly based on user input. It supports text, URLs, and other types of data.</p>
                <a href='https://qrcode-generatorrrrr.netlify.app/' className='btn'>Visit</a>
              </div>
            </div>
          </div>

           <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
            <div className='card text-dark'>
              <img src={Protfolio} className ="card-img-top" style={{height:"150px"}} alt="Protfolio" />
              <div className='card-body'>
                <h5 className=' card-titile'>Employee Management System</h5>
                <p> A full-featured system that allows management of employee data including CRUD operations, attendance tracking, salary management, and leave handling. 
                  Designed to streamline HR tasks and improve operational efficiency.</p>
                <a href='https://github.com/Praveennnnn/EMSs' className='btn'>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
