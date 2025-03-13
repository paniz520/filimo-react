import { useEffect, useState } from "react"
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./carousel.css"
export default function Carousel({urls}){
    const[index,SetIndex]= useState(0)
    function moveLeft(){
        if(index == 0){
            SetIndex( urls.length - 1)
        }
        else{
            SetIndex(index - 1)
        }
        console.log(index)
    }
    function moveRight(){
        if(index == urls.length - 1){
            SetIndex(0)
            
        }
        else{
            SetIndex(index + 1)
           
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
          SetIndex(prevIndex => {
            // Calculate the next index (looping back to the last image if necessary)
            if (prevIndex === 0) {
              return urls.length - 1;
            } else {
              return prevIndex - 1;
            }
          });
        }, 10000); // Change the index every 10 seconds
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, [urls.length]); // Dependency array is just `urls.length` since `index` doesn't need to be a dependency
    
    return(
        <>
        <div className="main-div"> {/* learn more about */}
            
            {urls.map((url, i) => (
            <div className="carousel-image"  style={{ transform: `translateX(-${index * 100}%)` }} // Moves carousel images left/right
            > 
            <img
              key={i}
              src={url}
              alt={`slide-${i}`}
              className={i === index ? "active" : ""}
              style={{ maxWidth: "100%", objectFit: "cover" }}
              
            />
            </div>
          ))}
             
                <button className="moveLeft" onClick={moveLeft}><FaAngleLeft /></button>
                <button className="moveRight" onClick={moveRight} >
            <FaAngleRight />
            </button> 
            
        </div>   
        </>
    )
}