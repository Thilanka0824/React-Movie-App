import { useState } from "react"




const MovieFormPage = (props) => {
    const { handleAddMovie } = props

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [actors, setActors] = useState('')
    const [plot, setPlot] = useState('')
    const [comingSoon, setComingSoon] = useState('')
    const [year, setYear] = useState('')
    const [rated, setRated] = useState('')
    const [released, setReleased] = useState('')
    const [runtime, setRuntime] = useState('')
    const [genre, setGenre] = useState('')
    const [writer, setWriter] = useState('')
    const [language, setLanguage] = useState('')
    const [country, setCountry] = useState('')
    const [awards, setAwards] = useState('')
    const [imdbRating, setRating] = useState('')
    const [type, setType] = useState('')
    const [image, setImage] = useState([])

    return (
        <div className="input-boxes">
            <h1>Movie Form Page</h1>
            <input type="text" placeholder="Title here" value={title} onChange={(e) => {
                setTitle(e.target.value)
                console.log(title)
            }} />
            <br />
            <label> </label>
            <input type="text" placeholder="Director here" value={director} onChange={(e) => {
                setDirector(e.target.value)
                console.log(director)
            }} />
            <br />
            <input type="text" placeholder="Actors here" value={actors} onChange={(e) => {
                setActors(e.target.value)
                console.log(actors)
            }} />
            <br />
            <input type="text" placeholder="Plot here" value={plot}
                onChange={(e) => {
                    setPlot(e.target.value)
                    console.log(plot)
                }} />
            <br />
           
            <h3>Additional Fields</h3>
            <input type="text" placeholder="Coming Soon" value={comingSoon} onChange={(e) => {
                setComingSoon(e.target.value)
                console.log(comingSoon)
            }} />
            <br />
            <input type="text" placeholder="Year" value={year} onChange={(e) => {
                setYear(e.target.value)
                console.log(year)
            }} />
            <br />           
            <input type="text" placeholder="Rated" value={rated} onChange={(e) => {
                setRated(e.target.value)
                console.log(rated)
            }} />
            <br />          
            <input type="text" placeholder="Released" value={released} onChange={(e) => {
                setReleased(e.target.value)
                console.log(released)
            }} />
            <br />
            <input type="text" placeholder="Runtime" value={runtime} onChange={(e) => {
                setRuntime(e.target.value)
                console.log(runtime)
            }} />
            <br />
            <input type="text" placeholder="Genre" value={genre} onChange={(e) => {
                setGenre(e.target.value)
                console.log(genre)
            }} />
            <br />
            <input type="text" placeholder="Writer" value={writer} onChange={(e) => {
                setWriter(e.target.value)
                console.log(writer)
            }} />
            <br/>
            <input type="text" placeholder="Language" value={language} onChange={(e) => {
                setLanguage(e.target.value)
                console.log(actors)
            }} />
            <br />
            <input type="text" placeholder="Country" value={country} onChange={(e) => {
                setCountry(e.target.value)
                console.log(language)
            }} />
            <br />
            <input type="text" placeholder="imbd Rating" value={imdbRating} onChange={(e) => {
                setRating(e.target.value)
                console.log(imdbRating)
            }} />
            <br />
            <input type="text" placeholder="Awards" value={awards} onChange={(e) => {
                setAwards(e.target.value)
                console.log(awards)
            }} />
            <br />
            <input type="text" placeholder="Type" value={type} onChange={(e) => {
                setType(e.target.value)
                console.log(type)
            }} />
            <br />
            <input type="text" placeholder="Images" value={image} onChange={(e) => {
                setImage(e.target.value)
                console.log(image)
            }} />
            <br />
        

            <br />
            <br />
            <button className="submit-button" onClick={() => {
                handleAddMovie(title, director, actors, plot)
                console.log("Movie Added")
                
                
            }}>Add Movie</button>
        </div>
    )
}

export default MovieFormPage