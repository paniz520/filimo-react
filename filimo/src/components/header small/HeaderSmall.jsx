import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import logo from "../.././images/filimoLogo.png";
import './HeaderSmall.css'
import { useContext , useState} from "react";
import { userContext } from "../../context/userContext";
import LoginInfo from "../loginInfo/LoginInfo";

export default function HeaderSmall(){
    const[userInfo, setUserInfo] =useState(false)
    const{isLoggedIn,user ,logOut} = useContext(userContext)
    const handleUserInfo = ()=> {
        setUserInfo(!userInfo)
    }
    return(
        <>
        <div style={{width:"100%"}}> 
        <div style={{width: "100%", backgroundColor: "#030104", height: "4rem", display:"flex", alignItems:"center",
            justifyContent: "space-between"
        }}>
            <div style={{width:"40%", display:"flex", justifyContent:"space-evenly"}}>
                <button onClick={handleUserInfo} style={{width:"27px", height:"27px", borderRadius:"50%", border:"1px solid red", backgroundColor:"rgb(71 28 28)", display:"flex", justifyContent:"center", alignItems:"center"}}><FaUser fill="red" /></button>

                {userInfo && <LoginInfo />}

                <button style={{borderRadius:"5px", fontFamily:"filimo1", fontSize:"0.65rem", padding:".29rem", border:"none",
                backgroundColor:"rgb(1 149 68", color:"white"
                }}>{isLoggedIn ? `welcome ${user.validUser}` : 'خرید اشتراک'}</button>
            </div>
            <div className="logo" style={{width: "30%", display: "flex", alignItems:"center"}}>
                <img src={logo} alt="" style={{width:"100%", height: "auto"}}/>
            </div>
        </div>
        <ul  className="scrollable-list" >
        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flex:"0 0 50px"}}>
        <FaAngleDown style={{width:"13px", padding:"2px"}} />
        <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>کودک</li>
        </div>
        <li style={{ fontFamily:"filimo1", fontSize: "0.7rem", flex: "0 0 70px"}}>فیلیمو مدرسه</li>
        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flex:"0 0 70px"}}>
        <FaAngleDown style={{width:"13px", padding:"1px"}} />
        <li style={{ fontFamily:"filimo1", fontSize: "0.7rem",flex: "0 0 60px"}}>مجموعه ها</li>
        </div>
        <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>خارجی</li>
        <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>ایرانی</li>
        <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>سریال</li>
        <li style={{ fontFamily:"filimo1", fontSize: "0.7rem"}}>فیلم</li>
        <li style={{ fontFamily:"filimo1", fontSize: "0.7rem",flex: "0 0 70px"}}>گنج فیلیمو</li>
        </ul>
        </div>
        </>
    )
}