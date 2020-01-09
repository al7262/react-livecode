import React from "react";
import '../style/bootstrap.min.css';
import '../style/style.css';
import Header from '../component/Header'
import { connect } from "unistore/react";
import { withRouter, Redirect } from "react-router-dom";

class ProfilePage extends React.Component{
    render(){
        if (this.props.loggedIn === false) {
            return <Redirect to={{ pathname: "/login" }} />;
        } else {
            return (
                <React.Fragment>
                    <Header />
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6 profile-box shadow-sm">
                                <img src={this.props.avatar} alt="profile-picture"/>
                                <h4>{this.props.name}</h4>
                                <div className="details">
                                    <p><span>Email:</span>{this.props.email}</p>
                                </div>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}


export default connect("name, avatar, email, loggedIn")(withRouter(ProfilePage))