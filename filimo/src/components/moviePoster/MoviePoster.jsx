import './MoviePoster.css'
export default function MoviePoster({url, title, year}){
    return(
        <>
        <div  className="container">
            <img className="img" src={url} alt={url} />

            <div className="hoverEffect">

                <div className='discription'>
                    <p className='title'>{title}</p>
                    <p className='year'>{year}</p>
                </div>
            </div>
        </div>
        
        </>
    )
}