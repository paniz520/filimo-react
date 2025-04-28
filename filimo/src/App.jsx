import HeaderLarge from './components/header large/HeaderLarge'
import HeaderSmall from './components/header small/HeaderSmall'
import './App.css'
import Media from "react-media"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import { useLocation } from "react-router-dom";
import { useState } from 'react'
import FullPage from './pages/login/fullPage/fullPage'
import MyList from './pages/myList/MyList'
import { ToastContainer } from 'react-toastify';

export default function App(){
  /* here we conditionally render header!! */
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/404"];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);
   const[clicked,setClicked] = useState({}) 
 return(
 <>
  <main>
  {/*  --------header--------- */}
  {shouldShowHeader &&       <div>
        <Media queries={{
          small: "(max-width: 756px)",
          large: "(min-width: 757px)"
        }}>
          {matches => (
            <>
              {matches.small && <HeaderSmall />}
              {matches.large && <HeaderLarge />}
            </>
          )}
        </Media>
      </div>}

<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/FullPage' element={<FullPage />}></Route>
  <Route path='/MyList' element={<MyList />}></Route>
</Routes>


  
 
</main>
<div >
<ToastContainer 
        position="bottom-left" // Change position
        autoClose={3000}        // Auto close after 3 seconds
        hideProgressBar={true}  // Hide the progress bar
        newestOnTop={true}      // Newest toasts appear on top
        closeButton={false}     // Disable the close button
        pauseOnHover={false}    // Disable pause when hovering over toast
        draggable={false}       // Disable dragging
      
/>
</div>
</>
 )}


