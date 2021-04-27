import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {loginUser, logoutUser} from '../redux/ActionCreators'
import LoginForm from './LoginForm';
import ShowRide from './ShowRides';
import BG from "../Assets/Images/BG.jpg";

var mapStateToProps = function(state){
    return {
      isAuthenticated:state.isAuthenticated
    };
  }
var mapDispatchToProps = function(dispatch){
    return {
        loginUser : (username,password) => dispatch(loginUser(username,password)),
        logoutUser : () => dispatch(logoutUser())
    }
  }


class Main extends React.Component{
    
    render(){
        const Home = () => {return this.props.isAuthenticated ? <Redirect to="/show_rides" /> : <LoginForm loginUser={this.props.loginUser} authentication={this.props} /> };
        const Logout = () => {
            this.props.logoutUser();
            return <Redirect to="/" />};
        
        return (
            <>
                <Header />
                <div className="dataDiv pt-5" style={{background: 'url('+BG+') no-repeat center', backgroundSize: "cover", height: "78vh",
            color: "#f5f5f5"}} >
                    <Switch>
                        <Route exact path = "/" component = {Home} />
                        <Route path = "/show_rides" component = {()=> <ShowRide />} />
                        <Route exact path = "/logout" component={Logout} />
                    </Switch>
                    </div>
                <Footer />
            </>
          );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));