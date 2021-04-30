import React from 'react';
import {Redirect} from 'react-router-dom';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            username : "",
            password : "",
        };
    }

    handleChange = (event)=>{
        let field = event.target.name;
        let value = event.target.value;
        this.setState({[field]:value});
    }

    validateForm = ()=>{
        if ((this.state.username.length>2 && this.state.username.length<16) && this.state.password.length>7 && this.state.password.length<21){
            this.setState({error:false});
            return true;
        }
        else{
            this.setState({error:true});
            return false;
        }

    }

    handleSubmit = (event) =>{
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
                if (this.props.page){
                    return (<div className="dataDiv pt-5"  >
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-sm-4 offset-sm-4">
                                <center>
                                <label htmlFor="username" style={{color:"black"}}>First name</label>
                                </center>        
                                <input type="text" name ="username" onChange={this.handleChange} value={this.state.username} className={this.state.error? "form-control is-invalid": "form-control" } id="username" placeholder="First name" required />
                            </div>
                            <div className="col-sm-4 offset-sm-4 pt-3">
                                <center>
                                    <label htmlFor="password" style={{color:"black"}}>Last name</label>
                                </center>
                                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} className={this.state.error? "form-control is-invalid": "form-control" } id="password" placeholder="Password" required />
                                {this.state.error? <div className="invalid-feedback">
                                    Invalid Username & Password
                                </div> : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 offset-sm-4 mt-3">
                                <center><button name ="login" className="btn btn-primary">Login</button></center>
                            </div>
                        </div>
                    </form>
                </div>);
                }
                else{
                    return (<div className="dataDiv pt-5"  >
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-sm-4 offset-sm-1">
                                <center>
                                <label htmlFor="fname" style={{color:"black"}}>First name</label>
                                </center>        
                                <input type="text" name ="fname" onChange={this.handleChange} value={this.state.username} className={this.state.error? "form-control is-invalid": "form-control" } id="fname" placeholder="First name" required />
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <center>
                                    <label htmlFor="lname" style={{color:"black"}}>Last name</label>
                                </center>
                                <input type="text" name="lname" onChange={this.handleChange} value={this.state.password} className={this.state.error? "form-control is-invalid": "form-control" } id="lname" placeholder="Last Name" required />
                                {this.state.error? <div className="invalid-feedback">
                                    Invalid Username & Password
                                </div> : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 offset-sm-1">
                                <center>
                                <label htmlFor="username" style={{color:"black"}}>Usernamw</label>
                                </center>        
                                <input type="text" name ="username" onChange={this.handleChange} value={this.state.username} className={this.state.error? "form-control is-invalid": "form-control" } id="username" placeholder="Username" required />
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <center>
                                    <label htmlFor="state" style={{color:"black"}}>State</label>
                                </center>
                                <input type="text" name="state" onChange={this.handleChange} value={this.state.state} className={this.state.error? "form-control is-invalid": "form-control" } id="state" placeholder="State" required />
                                {this.state.error? <div className="invalid-feedback">
                                    Invalid Username & Password
                                </div> : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 offset-sm-1">
                                <center>
                                <label htmlFor="password1" style={{color:"black"}}>Password</label>
                                </center>        
                                <input type="password" name ="password1" onChange={this.handleChange} value={this.state.password1} className={this.state.error? "form-control is-invalid": "form-control" } id="password1" placeholder="Password" required />
                            </div>
                            <div className="col-sm-4 offset-sm-1">
                                <center>
                                    <label htmlFor="password2" style={{color:"black"}}>Password</label>
                                </center>
                                <input type="password" name="password2" onChange={this.handleChange} value={this.state.password2} className={this.state.error? "form-control is-invalid": "form-control" } id="password2" placeholder="Confirm Password" required />
                                {this.state.error? <div className="invalid-feedback">
                                    Invalid Username & Password
                                </div> : ""}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 offset-sm-4 mt-3">
                                <center><button name ="register" className="btn btn-primary">Register</button></center>
                            </div>
                        </div>
                    </form>
                </div>);
                }
            }
        }

}
export default Form;