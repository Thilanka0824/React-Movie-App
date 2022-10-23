import { useState } from "react"




const MovieFormPage = (props) => {
    const { handleAddMovie } = props

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [actors, setActors] = useState('')
    const [plot, setPlot] = useState('')

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
            <br />
            <button className="submit-button" onClick={() => {
                handleAddMovie(title, director, actors, plot)
                console.log("Movie Added")
                
                
            }}>Add Movie</button>
        </div>
    )
}

export default MovieFormPage