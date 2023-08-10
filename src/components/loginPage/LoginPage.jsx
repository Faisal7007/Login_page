import React, { useState,useEffect } from 'react'
// import './LoginPage.scss'
import './LoginPage.scss'
import screenLogo from '../../images/screenLogo.png'
import {BiUser} from 'react-icons/bi'
import {LiaLockSolid} from 'react-icons/lia'
import axios from 'axios'
import logo from '../../images/logo.gif'


function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e)=>{
     setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
 }

 const handleSubmit = ()=>{
  
  if(email && password){

    axios.post('https://64aed2b3c85640541d4dc4ab.mockapi.io/loginDetails',
    {
      email:email,
      password:password
    })
    .then(()=>{setEmail('')})
    .then(()=>{setPassword('')})
  }
  else{
    alert('Email or password is empty')
  }

 }

  return (
    <div className='login_page'>
          <img className='logo' src={logo} alt="logo" />
        <div className="main_div">
            <div className="left">
              <img className='screen_logo' src={screenLogo} alt="logo" />
            </div>
            <div className="middle">
            </div>
            <div className="right">
              <span className='horizontal_line' ></span>
              <h1 className='title' >Login as a Admin User </h1>
              <input className='input_field' type="email" placeholder='Email' onChange={handleEmail} value={email}  /> <span className='icon1'>< BiUser/></span> 
              <input className='input_field' type="password" placeholder='Password' onChange={handlePassword} value={password} /> <span className='icon2' ><LiaLockSolid/></span>
              <button className='button' onClick={handleSubmit} >LOGIN</button>
              <h1 className='forget_pass' >Forget your password?</h1>
              <h2 className='get_help' >Get help Signed in.</h2>
              <h1 className='privacy_policy'>Terms of use. Privacy policy</h1>
            </div>
        </div>     
    </div>
  )
}

export default LoginPage
