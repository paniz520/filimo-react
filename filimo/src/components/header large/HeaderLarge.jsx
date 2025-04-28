import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import logo from "../.././images/filimoLogo.png";
import { VscSearch } from "react-icons/vsc";
import { BsPlayBtn } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./HeaderLarge.css"
import { useContext, useState } from "react";
import { userContext } from "../../context/userContext";

import LoginInfo from "../loginInfo/LoginInfo";

export default function HeaderLarge(){
    const[userInfo, setUserInfo] =useState(false)
    const{isLoggedIn,user ,logOut} = useContext(userContext)
    const handleUserInfo = ()=> {
        setUserInfo(!userInfo)
    }
    return(
        <>
                <header style={{width: "100vw", backgroundColor: "rgb(0 0 0 / 82%)", height: "4rem", display:"flex", alignItems:"center", zIndex:"100",
                    justifyContent: "space-between", position:"fixed", top:"0", zIndex:"2"
                    }}>
                    <div style={{width:"17%", display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                        <button onClick={handleUserInfo} style={{width:"34px", height:"34px", borderRadius:"50%", border:`2px solid ${isLoggedIn ? '#1CB561' : 'red'}`, backgroundColor:isLoggedIn ? '#19381C' : 'rgb(71 28 28)', display:"flex", justifyContent:"center", alignItems:"center", padding:".5em"}} ><FaUser fill={isLoggedIn ? "#1CB561" : "red"} size={14}/></button>

                        {userInfo && <LoginInfo />}
        
                        <Link to="/login" style={{borderRadius:"5px", fontFamily:"filimo1", fontSize:"0.65rem", padding:".6rem 2em", border:"none", textDecoration:'none',
                        backgroundColor:"#1CB561", color:"white", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1em"
                        }}>{isLoggedIn ? `welcome ${user.validUser}` : 'خرید اشتراک'} {!isLoggedIn && <BsPlayBtn size={17}/>}</Link>

                        
                    </div>
                    <ul  style={{width:"60%", display:"flex", justifyContent:"space-evenly", height:"2rem", alignItems:"flex-end",
                    color:"white", gap:"0.9rem", listStyle:"none"
                    }}>
                    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                    <VscSearch style={{width:"25px", padding:"1px"}} />
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>جست و جو</li>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flex:"0 0 50px"}}>
                    <FaAngleDown style={{width:"13px", padding:"2px"}} />
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>کودک</li>
                    </div>
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem", flex: "0 0 70px"}}>فیلیمو مدرسه</li>
                    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                    <FaAngleDown style={{width:"13px", padding:"2px"}} />
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>مجموعه ها</li>
                    </div>
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>خارجی</li>
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>ایرانی</li>
                    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                    <FaAngleDown style={{width:"13px", padding:"2px"}} />
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}> سریال</li>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                    <FaAngleDown style={{width:"13px", padding:"2px"}} />
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>فیلم</li>
                    </div>
                    <li style={{ fontFamily:"filimo1", fontSize: "0.7rem",flex: "0 0 70px"}}>گنج فیلیمو</li>
                    </ul>

                    <div className="logo" style={{width: "10%", display: "flex", alignItems:"center"}}>
                        <img src={logo} alt="" style={{width:"70%", height: "auto"}}/>
                    </div>
                </header>
        </>
    )
}