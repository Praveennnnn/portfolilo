import React from 'react'
import Typewriter from 'typewriter-effect'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Praveen from '../Images/Praveen.png'
import '../Home/Home.css'



function Home() {
  return (
    <div className='w-100  home' id='Home'>
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-12 col-md-6 col-lg-6 homeTextPart text-white'>
                    <div>
                        <h3 className='welcome'>WELCOME</h3>
                        <h1>
                            <Typewriter
                            options={{
                                autoStart :true,
                                loop: true,
                                delay:60,
                                strings:["I AM WEB DEVELOPER","I AM WEB DESIGNER"]
                            }} />
                        </h1>
                        <p>
                           I'm a Front-End developer with 1 years of experience.My expertise is
                            to create Front-end design for a website
                       </p>
                       <div className='icons'>
                        <a href='https://github.com/Praveennnnn'><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                        <a href='https://www.linkedin.com/in/praveen-kn2001/'><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
                       </div>
                    </div >
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <img src={Praveen} alt='Praveen' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home