import { useContext, useEffect, useState } from 'react'
import './MyList.css'
import { userContext } from '../../context/userContext.jsx'
import MoviePoster from '../../components/moviePoster/MoviePoster.jsx'
export default function MyList(){
    const{myListArray,isLoggedIn} = useContext(userContext)

    const[windowWidth, setWindowWidth] = useState(window.innerWidth)
    const[itemsToShow, setItemsToShow] = useState(myListArray.length)
    useEffect( ()=>{
        function handleResize(){
            setWindowWidth(window.innerWidth)
        }
         
       window.addEventListener("resize", handleResize)
        return () => window.removeEventListener('resize', handleResize); 
       },[])
        // Update itemsToShow based on windowWidth
      useEffect(() => {
        if (windowWidth <= 425) {
          setItemsToShow(3);
        } else if (windowWidth <= 768) {
          setItemsToShow(6);
        } else {
          setItemsToShow(myListArray.length); // Default to the full list
        }
      }, [windowWidth]); // This effect runs when windowWidth changes
    return(
       
         <div className='grid-container'>
            {isLoggedIn && myListArray.slice(0, itemsToShow).map((movie)=>{
               return  <div>
                            <MoviePoster url={movie.url} title={movie.title} year={movie.year} key={movie.title}/>
                       </div>
               
            })}
        </div> 
       
    )
    
}