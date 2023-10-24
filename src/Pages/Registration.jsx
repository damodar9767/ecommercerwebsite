import React, { useEffect, useState } from 'react'
import './CSS/App.css'
import github from '../Components/logos/github.svg'
import discord from '../Components/logos/discord.svg'
import glogo from '../Components/logos/glogo.svg'
import insta from '../Components/logos/insta.svg'
import linkedin from '../Components/logos/linkedin.svg'

import react from '../Components/logos/react.svg'
import { Link } from 'react-router-dom'



const LoginSignup = () => {
  useEffect(() => {
    window.scrollTo(100,100)
  }, [])
  

  const [cred, setCred] = useState({
    email :'',
    name:'',
    password:'',
 });
 

 const handleSubmit = async (e) =>{
    e.preventDefault()

   

 }



 const handleChange =(e) =>{
    const {name, value} = e.target;
    setCred({
    ...cred,
    [name]: value,


    })
 }
  return (
    <div className="relative z-0 " >
       <div className='signUp '>
          <h3 className='logo'>SHOPAWAY</h3>

         <div className='singUp__board '>

           <div className='board'>
            Hi, there.
           </div>

           <div className='signUp__social'>
              <img src={github} alt='github' className='singUp__social-logo '/>
              <img src={react} alt='react' className='singUp__social-logo'/>
              <img src={linkedin} alt='linkedin' className='singUp__social-logo'/>
              <img src={discord} alt='discord' className='singUp__social-logo'/>
           </div>

         </div>

         <div className='signUp__form'>
            <div className='sub__form w-[350px]'>
            <h3 className=' text-[30px] font-[700] pb-1  mb__signin '>Register</h3>
            <p className='mb__signinp'>Regiter to get activate your account</p>
            <div className='googleapple flex gap-1 py-3'>
                  <button   className='flex bg-white  content-center  flex-1 gap-2 text-[11px]  items-center  glogo1'><img src={glogo} alt='glogo' />Register with Google </button>


                  <button className='flex bg-white content-center flex-1  gap-3 text-[11px]  items-center applogo1'> <img src={github} alt='applogog' className='applogog invert ' />Register with Github </button>
            </div>

            <form className='form  bg-white mb-6' onSubmit={handleSubmit}>
               <p className='text-[14px] mb-2'>Email Address</p>
               <input type='email' placeholder='Enter your email' className='email' name='email' value={cred.email} onChange={handleChange}/>

               <p className='text-[14px] mb-2'>Name</p>
               <input type='text' placeholder='Enter your Name' className='email' name='name' value={cred.name} onChange={handleChange}/>

               <p className=' text-[14px] my-2'>Password</p>
               <input type='password' placeholder='Password' className='pasword '  name='password' value={cred.password} onChange={handleChange}  /> 


               <Link to='/'><button className='form__sign mt-5' type='submit' >Register</button></Link>


            </form>

            <p className='text-[14px] text-[#858585] text-center'>Already  have an account ? <a href='/login' className='text-[#346BD4]'> Login here</a> </p>

            </div>
         </div>
    </div>
    </div>

  
)
}

export default LoginSignup