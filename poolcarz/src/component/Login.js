import React from 'react';
import {Redirect} from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(){
        super();
        this.state = {
            username : "",
            password : "",
            password2 : "",
            name : ""
        };
    }

    handleChange = (event)=>{
        let field = event.target.name;
        let value = event.target.value;
        this.setState({[field]:value});
    }

    validateForm = ()=>{
        if ((this.state.username.length>2 && this.state.username.length<16) && 
            (this.state.password.length>7 && this.state.password.length<21)){
                    this.setState({error:false});
                    return true;

        }
        else{
                this.setState({error:true});
                return false;
            }

    }

    handleLogin = (event) =>{
        event.preventDefault();
        if (this.validateForm()){
            this.props.loginUser({username : this.state.username,password :  this.state.password});
        }
    }



    render(){
            if (this.props.isAuthenticated){
                return <Redirect to="/showrides" />;
            }
            else{   
                    return (<div className="dataDiv pt-5"  >
                         <div className="dataDiv mt-5 pb-3 card offset-sm-2 col-sm-8">
                        <div className="card-header bg-primary text-center" >
                            <h3>Login</h3>
                        </div>
                    <form>
                        <div className="row">
                            <div className="col-sm-4 offset-sm-4 pt-3">
                                <center>
                                <label htmlFor="username" style={{color:"black"}}>Username</label>
                                </center>        
                                <input type="text" name ="username" onChange={this.handleChange} value={this.state.username} className={this.state.error? "form-control is-invalid": "form-control" } id="username" placeholder="Username" required />
                            </div>
                            <div className="col-sm-4 offset-sm-4 pt-3">
                                <center>
                                    <label htmlFor="password" style={{color:"black"}}>Password</label>
                                </center>
                                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} className={this.state.error? "form-control is-invalid": "form-control" } id="password" placeholder="Password" required />
                                {this.state.error? <div className="invalid-feedback">
                                    Invalid Username & Password
                                </div> : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 offset-sm-4 mt-3">
                                <center>
                                    {this.props.isLoading?
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only"></span>
                                    </div>:
                                    <>
                                    <button name ="login" onClick={this.handleLogin} className="btn btn-primary">Login</button><br /><br/>
                                    <div style={{color:"red"}}>
                                        {this.props.message}
                                    </div>
                                    </>
                                    }
                                </center>
                            </div>

                        </div>
                    </form>
                    </div>
                </div>);
            }
        }

}
export default LoginForm;