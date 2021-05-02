import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchRide, loginUser, logoutUser, bookRide, cancelRide, offerRide, registerUser} from '../redux/ActionCreators'
import LoginForm from './Login';
import ShowRide from './ShowRides';
import OfferRide from './OfferRide';
import RegisterFrom from './Register';
import BG from "../Assets/Images/BG.jpg";

var mapStateToProps = function(state){
    return {
      auth: state.Auth,
      rides : state.FetchRide
    };
  }
var mapDispatchToProps = function(dispatch){
    return {
        loginUser : (username,password) => dispatch(loginUser(username,password)),
        logoutUser : () => dispatch(logoutUser()),
        bookRide : (rideId)=> dispatch(bookRide(rideId)),
        cancelRide : (rideId) => dispatch(cancelRide(rideId)),
        offerRide : (rideDetails) => dispatch(offerRide(rideDetails)),
        registerUser : (data) => dispatch(registerUser(data)),
        fetchRide : ()=> dispatch(fetchRide())
    }
  }


class Main extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        console.log("Hi");
        this.props.fetchRide();
    }
    changeHomePage = (e)=>{
        this.setState({homeLogin1Register0:!this.state.homeLogin1Register0});
    }
    render(){
        let height = String(window.screen.availWidth+100);
        return (
            <>
                <Header 
                isAuthenticated={this.props.auth.isAuthenticated} 
                isFetching={this.props.auth.isAuthFetching}
                changeHomePage={this.changeHomePage}
                logoutUser = {this.props.logoutUser}/>
                {this.props.auth.isAuthenticated? null: <Redirect to="/" />}
                <div className="dataDiv pt-4 pb-4" style={{background: 'url('+BG+') no-repeat center',
                                backgroundSize: "cover", height: "78vh", color: "#f5f5f5", overflowX:"hidden",
                                overflowY:"auto", maxHeight:{height}}}>
                    <Switch>
                        <Route exact path = "/" component = {()=><LoginForm 
                                                                message = {this.props.auth.lmessage}
                                                                isAuthenticated={this.props.auth.isAuthenticated} 
                                                                loginUser={this.props.loginUser} />} />
                        <Route exact path ="/register" component = {()=><RegisterFrom 
                                                                    status = {this.props.auth.status}
                                                                    message = {this.props.auth.rmessage}  
                                                                    isLoading = {this.props.auth.isLoading}
                                                                    isAuthenticated={this.props.auth.isAuthenticated}
                                                                    registerUser = {this.props.registerUser} />} />
                        <Route path = "/showrides" component = {()=> <ShowRide 
                                                                cancelRide = {this.props.cancelRide}
                                                                bookRide = {this.props.bookRide}
                                                                offer = {this.props.rides.offer}/>} />
                        <Route path= "/offerride" component = {()=><OfferRide 
                                                                offerRide = {this.props.offerRide}/>} />
                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer />
            </>
          );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));