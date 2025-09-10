import React, { useEffect } from 'react'
import Praveen from '../Images/Praveen.png'
import '../About/About.css'
import AOS from 'aos'
import 'aos/dist/aos.css';


function About() {
     useEffect(() => {
    AOS.init({ duration: 2000, });
  }, []);
  return (
    <div className='w-100 about' id='About'>
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-12 col-md-6 col-lg-6 aboutImagePart' data-aos ="fade-right">
                    <img src={Praveen} alt='Praveen'/>

                </div>
                <div className='col-12 col md-6 col-lg-6 aboutTextPart text-white'data-aos ="fade-left">
                    <div>
                        <h3>
                            Hello, I Am Praveen KN
                        </h3>
                        <p>
                            Passionate aspiring React JS developer with a strong foundation in Java programming. Eager to contribute skills as an 
                            entry-level Front-end Developer proficient in, HTML, CSS, JavaScript, ReactJs and SQL. Enthusiastic about creating 
                            dynamic web applications and collaborating on impactful projects. Excited to join a team where I can learn, grow, and 
                            make a meaningful impact. 
                        </p>

                        <table>
                            <tbody>
                                <tr>
                                    <td className='pe-5'>Name</td>
                                    <td>Praveen KN</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Age</td>
                                    <td>23</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>address</td>
                                    <td>1/159A,NorthSoorankudy(PO),Nagercoil,Kanniyakumari-629501</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Phone</td>
                                    <td>9894500195</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Email</td>
                                    <td>praveen1816kn@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btn downloadcv mt-4'>Download CV</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default About