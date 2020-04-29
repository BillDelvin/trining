import React from "react"

const Card = (props) => {
  const { data } = props
  return (
    <div className="col-md-4">
      <div className="card pb-3">
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.genre}</h6>
          <p className="card-text">playing : {data.playing}</p>
          <p className="card-text">release : {data.release}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
