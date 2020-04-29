import React, { useState, useEffect } from "react"
import axios from "axios"
import Card from "../../components/Card/Card"

const Movie = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/movie/getMovie")
      .then((res) => {
        setMovie(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const showData = movie.map((item, id) => {
    return <Card key={id} data={item} />
  })

  return (
    <div className="container">
      <h1>Movie</h1>
      <div className="row">{showData}</div>
    </div>
  )
}

export default Movie
