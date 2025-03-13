import HeaderLarge from './components/header large/HeaderLarge'
import HeaderSmall from './components/header small/HeaderSmall'
import './App.css'
import Media from "react-media"
import Carousel from './components/carousel/Carousel'


export default function App(){
  const array=[
    "https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg",
    "https://wallpapersok.com/images/hd/iconic-movie-poster-of-the-big-lebowski-featuring-main-characters-hshqgehyft0ywo7s.jpg",
    "https://www.wisconsinmommy.com/wp-content/uploads/2024/04/UnsungHero-Poster-Horizontal-scaled.jpg",
    "https://wallpapersok.com/images/hd/shang-chi-official-movie-poster-kgiycfo4zeh71c5c.jpg"

]
 return(
 
  <main>
    <div>
  <Media queries={{
    small: "(max-width: 425px)",
    large: "(min-width: 426px)"
  }}>
    {matches => (
      <>
        {matches.small && <HeaderSmall />}
        {matches.large && <HeaderLarge />}
      </>
    )}
  </Media>
  </div>

  
    <Carousel urls= {array}/>

 
  </main>
 )}


