import React from 'react'
import '../Contact/Contact.css'

function Contact() {
  return (
    <div className='contact text-center text-white pb-2' id='Contact'>
        <br/> <h1>Contact</h1> <br/>

        <hr />
        <div className='mx-md-auto text-center container'>
            <form>
                <div className='form-group mt-2'>
                    <label for="Uname">User Name : </label>
                    <input type='text' className='form-control' id='uname' placeholder='Enter Name'></input>
                </div>
                 <div className='form-group mt-2'>
                    <label for="email">Email : </label>
                    <input type='text' className='form-control' id='email' placeholder='Enter Email'></input>
                </div>
                 <div className='form-group mt-2'>
                    <label for="Uname">Message : </label>
                    <textarea className='form-control' placeholder='Message..'col='30' rows='10'> </textarea>                
                </div>
                <button type='button'className='btn mt-2'>Contact Me</button>
            </form>

        </div>

    </div>
  )
}

export default Contact