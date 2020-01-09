import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import logo from '../logo.svg';
import {Link, withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/MainStore";


class Header extends React.Component {
    handleLogout = () =>{
        this.props.handleChange('loggedIn', false)
        this.props.history.push('/')
        alert('You have succesfully logged out!')
    }
    render(){
        return(
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">
                        <img src={logo} style={{height: '40px'}} alt='logo' />
                        <span>Movie</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleNavbar" aria-controls="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="toggleNavbar">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li class="nav-item">
                            {this.props.loggedIn?
                            <Link class="nav-link" onClick={this.handleLogout}>Logout</Link>
                            :
                            <Link class="nav-link" to="/login">Login</Link>
                            }
                        </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default connect("loggedIn", actions)(withRouter(Header));