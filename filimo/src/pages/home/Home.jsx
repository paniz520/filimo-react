import { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel"
import "./Home.css"
import Filter from "../../components/filter/Filter"
import Media from "react-media"
import { IoFilter } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { specials } from "./specials";
import MoviePoster from "../../components/moviePoster/MoviePoster";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home({clicked, setClicked}){
    const [activeIndex, setActiveIndex] = useState();
    const[filterDistplay, setFilterDisplay] = useState(false)
    const[windowWidth, setWindowWidth] = useState(window.innerWidth)
    const[itemsToShow, setItemsToShow] = useState(specials.length)
    const[position, setPosition] = useState(0)
    
   
    const array=[
        "https://static.cdn.asset.filimo.com/ct/asoc4_mobile_1_v1.jpeg?width=960&quality=85&sharpen=50&secret=ceN3oNIdVPBDgNv1rKsU3g?6",
        "https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg",
        "https://static.cdn.asset.filimo.com/agf/matchPic_1744266006-mp.jpg",
        "https://www.wisconsinmommy.com/wp-content/uploads/2024/04/UnsungHero-Poster-Horizontal-scaled.jpg",
        "https://wallpapersok.com/images/hd/shang-chi-official-movie-poster-kgiycfo4zeh71c5c.jpg"
    
    ]
    const filters = [{
        title: "HD",
        types : []
    },
    {
        title: "سن",
        types: ["همه", "زیر سه سال", "تا 6 سال", "تا 12 سال"]      
    } ,
    {
        title: "زبان",
        types: ["همه", "دوبله", "زبان اصلی"]  
    }
     ,
    {
        title: "کشور",
        types: ["همه", "ایران", "آمریکا", "ژاپن"]  
    }
    ,
    {
        title: "ژانر",
        types: ["همه", "دوبله", "زبان اصلی"]  
    }
    ,
    {
        title: "فیلم و سریال",
        types: ["همه", "دوبله", "زبان اصلی"]  
    }
    ]
    const handleFilterClick = (index) => {
        setActiveIndex(prev => prev === index ? null : index); // Set the clicked index as active
       
    }
    const handleFilterDisplay = ()=>{
        setFilterDisplay( prev => !prev )
        
    }
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
      setItemsToShow(15); // Default to the full list
    }
  }, [windowWidth]); // This effect runs when windowWidth changes

   function moveRight(){
    if(windowWidth <= 1440){
        if(position == 300){
            setPosition( prevPosition => prevPosition + 0 )
        }
        else{
            setPosition( prevPosition => prevPosition + 100 )
        }
    }
    else if(windowWidth <= 768){
        if(position == 504.3){
            setPosition( prevPosition => prevPosition + 0 )
        }
        else{
            setPosition( prevPosition => prevPosition + 101 )
        }
    }
    else if(windowWidth <= 425){
        if(position == 800){
            setPosition( prevPosition => prevPosition + 0 )
        }
        else{
            setPosition( prevPosition => prevPosition + 96 )
        }
    }

   }
   function moveLeft(){
    setPosition( prevPosition => prevPosition - 100 )
   }
 
    return(

        <>
        {/*  -------slider--------- */}
          <Carousel urls= {array}/>

        {/* ------filter options------- */}
    <div className="filter-container">
        <button className={`button ${filterDistplay ? "visible" : ""}`}>اعمال فیلتر</button>
        <Media queries ={ {
            small: "(max-width: 768px)",
            large: "(min-width: 769px)"
        }}>
            {matches => (
                <>
                {matches.small && <button className="filter-button" onClick={handleFilterDisplay}><IoFilter /><span>فیلتر</span></button>}
                {matches.large && setFilterDisplay(true)}
                </>
            )}
        </Media>
        <ul className={`filter-ul ${filterDistplay ? "visible" : "" }`}>
        {filters.map((filter, index) => (
           <div >
                <li 
                    key={index} 
                    className= {`li,  ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleFilterClick(index)} 
                >
                    <Filter>{filter.title}</Filter>
                </li>

                <ul className={`filterOptions-ul ${ activeIndex === index ? "filterOptions-ul-active" : '' }`}>

                    <button className="close-menu" onClick={()=> setActiveIndex(null)}><IoCloseSharp /></button>

                    {filter.types.map((type, idx) => (
                    <li key={idx}>{type}</li>))}
                </ul>
                
           </div>
            ))}
        </ul>
        
    </div>
    {/* ------ویژه ها------- */}
   {/*  explanation: We need a function that would change the number of grid items shown based on screen size.
   at the very top we declare a state to check the window size and put the whole thing in a useEffect. then we use the slice method and map over the sliced array that we declare based on screen size. */}
    <section className="specials_heading">
        <div className="see_more">
            <RiArrowLeftSLine size={17}/>
            <span>مشاهده همه</span>
        </div>
        <p className="vizheh">ویژه</p>
    </section>
    <div className="size_12_grid">
        {
            specials.slice(0 , itemsToShow).map((special, index) => (
              <div className="grid-item">
                <Link to={'/FullPage'} state={{clicked : special}}>
                <MoviePoster url={special.url} key={index} title={special.title} year={special.year}/>
                </Link>
                </div>
            ))
        }
    </div>
    
    <section className="live_heading">
        <div className="see_more">
            <RiArrowLeftSLine size={17}/>
            <span>مشاهده همه</span>
        </div>
        <p className="pakhsh-zendeh">پخش زنده</p>
    </section>
    {/* ------پخش زنده------ */}
     <div className="live_slider">
        <button className="live_move_left" onClick={moveLeft}><FaRegArrowAltCircleLeft size={30}/></button>
        <button className="live_move_right" onClick={moveRight}><FaRegArrowAltCircleRight size={30} /></button>
        {specials.slice(12,22).map((special,index)=>{
            return(
            <div className="sliding_div" style={{ transform: `translateX(-${position}%)` }}>
             
             <MoviePoster url={special.url} key={index} title={special.title} year={special.year}/>
             
             
            </div>
            )})} 
      
     </div>
        
        </>
    )
}