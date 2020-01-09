import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header';
import MoviesList from '../component/MoviesList'
import { withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";

const urlHeadLine = "https://api-todofancy.herokuapp.com/api/movies"

class CategoryPage extends React.Component{
    componentDidMount = async () => {
        await this.props.handleGetApi(urlHeadLine);
    }
    
    render(){
        console.log(this.props.data.movies)
        const data = this.props.data.movies
        const category = this.props.match.params.category
        let moviesFiltered = [], moviesToShow = [];
        if(data!==undefined){
            moviesFiltered = data.filter( item => {
                return item.Category===category? item:false
            })
            moviesToShow = moviesFiltered.map( item => {
                return(
                    <MoviesList 
                    image={item.Poster}
                    title={item.Title}
                    year={item.Year}
                    context={item.Synopsis}
                    />
                )
            })
        }

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