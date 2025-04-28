import filimoLogin from '../../images/filimo-login-page.png'
import { FaArrowRightLong } from "react-icons/fa6";
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../context/userContext';
import { FaCircleInfo } from "react-icons/fa6";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Login(){
    const inputFocus = useRef()
    const {user, logIn, logOut, isLoggedIn} = useContext(userContext)
    const[userName, setUserName] = useState('')
    const[validUser,setValidUser] = useState(null)
    const[passWord, setPassWord] = useState()
    const[validPass,setValidPass] = useState(null)
    const[mobile, setMobile] = useState()
    
    

    useEffect(() => {
        if (inputFocus.current) {
          inputFocus.current.focus();
        }
      }, []);
      useEffect( ()=>{
        setValidUser(USER_REGEX.test(userName))
      },[userName])

      useEffect(()=>{
        setValidPass(PWD_REGEX.test(passWord))
      },[passWord])

    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        logIn(userName, passWord, mobile)
    
    }
    
    return( 
    <>
        {!isLoggedIn ?
            
           <div className="login-container">
            <div className='first-div'>
                <img src={filimoLogin} alt="" />
                <p>ورود یا ثبت‌ نام در فیلیمو</p>
            </div>
    
            <div className="go-back">
                <Link to={'/'}>بازگشت <FaArrowRightLong /></Link>
            </div>
    
            <div className="login-section">
                <p>برای ورود یا ثبت‌نام، اطلاعات کاربری خود را وارد کنید</p>
                <form onSubmit={handleSubmit}>
                    <input 
                    ref={inputFocus}
                     type="text"
                     placeholder="نام کاربری"
                     aria-describedby="uidnote"
                     onChange={ (e)=> {setUserName(e.currentTarget.value)}}
                     />
                        <span id="uidnote" className={inputFocus && userName && !validUser ? "instructions" : "offscreen"}>
                       نام کاربری باید بین 8-24 حرف باشد و با یک حرف آغاز شود
                       <FaCircleInfo size={18} />
                        </span>
                    <input
                     type="password"
                     placeholder='پسورد'
                     onChange={ (e)=> {setPassWord(e.currentTarget.value)}}
                     aria-describedby="pwdnote"
                     />
                     <span id="pwdnote" className={inputFocus && passWord && !validPass ? "instructions" : "offscreen"}>
                       رمز عبور باید بین 4-24 کارکتر باشد. شامل حروف بزرگ و کوچیک و کارکتر های خاص باشد
                       <FaCircleInfo size={18} />
                        </span>
                    <input type="password"
                     placeholder='موبایل'
                     onChange={(e) =>{setMobile(e.currentTarget.value)}}
                     />
                    <button className='submit' type='submit' disabled={!validUser || !validPass || !mobile}>ورود</button>
                </form>
            </div>
        </div> : (
            <div>
             <h2>Welcome, {user?.validUser} 🎉</h2>
             <p>login time: {user.loginTime}</p>
             <button onClick={()=>{logOut()}}>logOut</button>
             <button onClick={()=> {navigate('/')}} >back to main</button>
            </div>
        )
        }
   
   </>   
    )
}