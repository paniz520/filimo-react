import { useContext } from "react"
import { userContext } from "../../context/userContext";
import { FaUser } from "react-icons/fa";
import './loginInfo.css'
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
export default function LoginInfo(){
    const{isLoggedIn,user,logOut} = useContext(userContext)
    return(
        <div className="main-division" >
            <div className="active-account">
                <span>
                 {isLoggedIn ? user?.validUser :
                 <Link style={{color:"white", listStyle:"none", textDecoration:"none", fontSize:".8rem"}} to={"/login"}>وارد شوید</Link>}
                 </span> 
                 
                <button style={{width:"30px", height:"30px", borderRadius:"50%", border:`2px solid ${isLoggedIn ? '#1CB561' : 'red'}`, backgroundColor:isLoggedIn ? '#19381C' : 'rgb(71 28 28)', display:"flex", justifyContent:"center", alignItems:"center", padding:".5em"}}><FaUser fill={isLoggedIn ? "#1CB561" : "red"} size={14}/>
                </button>
            </div>
            {isLoggedIn && 
            <div className="active-account-mobile">
                <span style={{fontSize:".7rem"}}>{user?.mobile}</span>
                <span style={{fontSize:".8rem"}}>:مدیریت اعضا</span>
                
            </div>}
            <div className="my-movie-list" style={{display:"flex", alignItems:"center", gap:".6em"
            }}>
            <Link to={'/MyList'} style={{fontSize:".8rem", color:"white", textDecoration:"none", listStyle:"none"}}>لیست های من</Link>
            <FaEye fill="gray" size={14} />
            
            </div>

           {isLoggedIn && <div className="exit" style={{display:"flex", alignItems:"center", gap:".6em", justifyContent:"end"}}>
                <span>خروج</span>
                 <IoIosLogOut fill="white" size={20} onClick={logOut}/>
            </div>}
        </div>
    )
}