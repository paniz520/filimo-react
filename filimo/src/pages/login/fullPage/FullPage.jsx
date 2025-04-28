import './fullPage.css'
import { Link, useLocation } from "react-router-dom";
import trailer1 from '../../../videos/trailer.mp4'
import { MdLabelOutline } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import LoginAlert from '../../../components/loginAlert/LoginAlert';
import { userContext } from '../../../context/userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function FullPage(){
    const{isLoggedIn,user ,logOut,myListArray, handleMyListArray} = useContext(userContext)
    const[showLoginAlert, setShowLoginAlert] = useState(false)
    const[userInfo, setUserInfo] =useState(false)
    const location = useLocation();
    const { clicked } = location.state || {};

    useEffect(() => {
        console.log(myListArray);
      }, [myListArray])

      const handleUserInfo = ()=> {
        setUserInfo(!userInfo)
    }
    return(
        <>
        <div className=" video-container">
            <video 
            autoPlay loop muted playsInline
            className="w-full h-full object-cover "
            src={trailer1}>
            </video>

            <div 
            className="gradiant-overlay absolute top-16 right-0 w-full h-[70vh]">
            </div>
        <section className="movie-info">
            <div className="top">
                <div className='text'>
                    <div className="title">{clicked?.title}</div>
                    <div className="further-info">
                        <p>:کارگردان</p>
                        <p>:محصول کشور</p>
                    </div>
                </div>

                <div className='movie-poster'>
                    <img className='w-60 poster' src={clicked?.url} alt="" />
                </div>
            </div>
            <div className="bottom">
                <button className='Link' /* to={'/MyList'}  */
                onClick={(e)=>{
                    if(!isLoggedIn){
                        e.preventDefault()
                        setShowLoginAlert(true)
                    }
                    else{
                        handleMyListArray(clicked)
                        toast.success("Saved to Favorites!")
                    }
                }} ><MdLabelOutline size={16}/>بعدا میبینم</button>
            </div>
        </section>
        
                
        </div>

        {showLoginAlert && <LoginAlert showLoginAlert ={showLoginAlert} setShowLoginAlert={setShowLoginAlert} />}
        
        </>
    )
}