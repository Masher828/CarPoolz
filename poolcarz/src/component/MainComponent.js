import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchRide, loginUser, logoutUser, bookRide, cancelRide, offerRide} from '../redux/ActionCreators'
import Form from './Home';
import ShowRide from './ShowRides';
import OfferRide from './OfferRide';
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
        fetchRide : () => dispatch(fetchRide()),
        bookRide : (rideId)=> dispatch(bookRide(rideId)),
        cancelRide : (rideId) => dispatch(cancelRide(rideId)),
        offerRide : (rideDetails) => dispatch(offerRide(rideDetails))
    }
  }


class Main extends React.Component{
    constructor(){
        super();
        this.state={
            homeLogin1Register0:true
        };
    }
    changeHomePage = (e)=>{
        this.setState({homeLogin1Register0:!this.state.homeLogin1Register0});
    }
    componentDidMount(){
        this.props.fetchRide();
    }
    render(){
        let height = String(window.screen.availWidth+100);
        return (
            <>
                
                <Header 
                page ={this.state.homeLogin1Register0}
                isAuthenticated={this.props.auth.isAuthenticated} 
                isFetching={this.props.auth.isAuthFetching}
                changeHomePage={this.changeHomePage}
                logoutUser = {this.props.logoutUser}/>
                {this.props.auth.isAuthenticated? null: <Redirect to="/" />}
                <div className="dataDiv pt-4 pb-4" style={{background: 'url('+BG+') no-repeat center',
                                backgroundSize: "cover", height: "78vh", color: "#f5f5f5", overflowX:"hidden",
                                overflowY:"auto", maxHeight:{height}}}>
                    <Switch>
                        <Route exact path = "/" component = {()=><Form 
                                                                page={this.state.homeLogin1Register0} 
                                                                isAuthenticated={this.props.auth.isAuthenticated} 
                                                                loginUser={this.props.loginUser} />} />
                        <Route path = "/showrides" component = {()=> <ShowRide 
                                                                cancelRide = {this.props.cancelRide}
                                                                bookRide = {this.props.bookRide}
                                                                rides = {this.props.rides.rides}/>} />
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