import { Link } from 'react-router-dom';
import './LoginAlert.css'
import { IoIosCloseCircle } from "react-icons/io";
export default function LoginAlert({showLoginAlert, setShowLoginAlert}){
    return(
        <div className="main">
           <div className="content">
           <button onClick={(()=>{setShowLoginAlert(false)})} className="close"><IoIosCloseCircle size={30}/></button>

           <img src="https://www.filimo.com/assets/web/ui/img-RcUxgCneY3jP9ilnVr1Zg/lock.png" alt="" />

           <p>برای نشان دادن این فیلم باید ایتدا در فیلیمو وارد شوید</p>

           <Link style={{width:"105px", height:"38px", backgroundColor:"#FEC23B", borderRadius:"3px", display:"flex", justifyContent:"center", alignItems:"center", color:"black", listStyle:"none", textDecoration:"none", fontFamily:"filimo1", fontSize:".73rem", padding:".2em"}} to={'/Login'}>ورود یا ثبت نام</Link>
            
           </div>
        </div>
    )
}