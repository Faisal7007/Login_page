import React from 'react'
// import './LoginPage.scss'
import './LoginPage.scss'
import screenLogo from '../../images/screenLogo.png'
import {BiUser} from 'react-icons/bi'
import {LiaLockSolid} from 'react-icons/lia'


function LoginPage() {
  return (
    <div className='login_page'>
        <div className="main_div">
            <div className="left">
              <img className='screen_logo' src={screenLogo} alt="logo" />

            </div>
            <div className="middle">
             
            </div>
            <div className="right">
              <span className='horizontal_line' ></span>
              <h1 className='title' >Login as a Admin User </h1>
              <input className='input_field' type="text" placeholder='Email'  /> <span className='icon1'>< BiUser/></span> 
              <input className='input_field' type="text" placeholder='Password' /> <span className='icon2' ><LiaLockSolid/></span>
              <button className='button'>LOGIN</button>
              <h1 className='forget_pass' >Forget your password?</h1>
              <h2 className='get_help' >Get help Signed in.</h2>
              <h1 className='privacy_policy'>Terms of use. Privacy policy</h1>

            </div>
        </div>
      
    </div>
  )
}

export default LoginPage
