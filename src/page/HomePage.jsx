import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header';
import romance from '../image/romance.jpg';
import action from '../image/action.jpg';
import fiction from '../image/fiction.jpg';
import comedy from '../image/comedy.jpg';
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";
import { withRouter, Link } from "react-router-dom";

class HomePage extends React.Component{
    handleMoviePage = (category) => {
        this.props.history.push("/" + category);
        this.props.handleChange('category', category);
    }
    render(){
        return (
            <React.Fragment>
                <Header {...this.props}/>
                <div className="container mt-5">
                    <div className="row mt-5">
                        <div className="col-lg-3 movie-box">
                            <h3>Romance</h3>
                            <img src={romance} alt="romance-img"/>
                            <Link className="btn btn-primary"
                                onClick={()=>this.handleMoviePage('romance')}>
                                    See Movies
                            </Link>
                        </div>
                        <div className="col-lg-3 movie-box">
                            <h3>Action</h3>
                            <img src={action} alt="action-img"/>
                            <Link className="btn btn-primary"
                                onClick={()=>this.handleMoviePage('action')}>
                                    See Movies
                            </Link>
                        </div>
                        <div className="col-lg-3 movie-box">
                            <h3>Fiction</h3>
                            <img src={fiction} alt="fiction-img"/>
                            <Link className="btn btn-primary"
                                onClick={()=>this.handleMoviePage('fiction')}>
                                    See Movies
                            </Link>
                        </div>
                        <div className="col-lg-3 movie-box">
                            <h3>Comedy</h3>
                            <img src={comedy} alt="comedy-img"/>
                            <Link className="btn btn-primary"
                                onClick={()=>this.handleMoviePage('comedy')}>
                                    See Movies
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default connect("",actions)(withRouter(HomePage));