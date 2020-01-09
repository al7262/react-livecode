import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';

const MoviesList = (props) =>{
    return(
        <div className="row movie-list mr-5 ml-5">
            <div className="col-lg-3 pic-box">
                <img src={props.image} alt="movie-image"/>
            </div>
            <div className="col-lg-9">
                <h4>{props.title}</h4>
                <span>{props.year}</span>
                <br/>
                <p>{props.context}</p>
            </div>
        </div>
    )
}

export default MoviesList