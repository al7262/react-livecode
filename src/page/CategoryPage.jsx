import React from "react";
import axios from "axios";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header';
import MoviesList from '../component/MoviesList'
import {Link, withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";

const urlHeadLine = "https://api-todofancy.herokuapp.com/api/movies"

class CategoryPage extends React.Component{
    state = {
        listMovies: []
    }

    getDataMovies = async () => {
        const self=this
        await axios
            .get(urlHeadLine)
            .then( async (response) => {
                await self.setState({listMovies: response.data.movies})
            })
            .catch((error) => {
                console.warn(error)
            })
    }

    componentDidMount = async () => {
        await this.getDataMovies()
    }

    render(){
        const data = this.state.listMovies
        const category = this.props.match.params.category
        const moviesFiltered = data.filter( item => {
            return item.Category===category? item:false
        })
        console.log(moviesFiltered)
        const moviesToShow = moviesFiltered.map( item => {
            return(
                <MoviesList 
                image={item.Poster}
                title={item.Title}
                year={item.Year}
                context={item.Synopsis}
                />
            )
        })
        return (
            <React.Fragment>
                <Header {...this.props}/>
                <div className="container mt-5">
                    {moviesToShow}
                </div>
                
            </React.Fragment>
        );
    }
}


export default connect("data, listMovies", actions)(withRouter(CategoryPage))