import React from 'react';
import {Redirect} from 'react-router-dom';
class RegisterForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "",
            password : "",
            password2 : "",
            username : "",
            error : {
                name : "",
                password : "",
                password2 : "",
                username : ""
            }
        }
    }

    validateForm = ()=>{
        let name,username, password , check= true;
        if (!(this.state.username.length>2 && this.state.username.length<16)){ 
            username = "Length of name must be between 3 and 30";
            check = false;
        }
        else{
            username= false;
        }
        if (!(this.state.password == this.state.password2)){
            password = "Password is not matching";
            check = false;
        }
        else
        {if (!(this.state.password.length>7 && this.state.password.length<21)){
            password = "Length of Password must be between 8 and 20";
            check = false;
        }
        else{
            password = false;
        }}
        if (!(this.state.name.length>2 && this.state.name.length<30)){
            name="Length of Name must be between 3 and 30";
            check = false;
        }
        else{
            name = false;
          }  
        
        this.setState({error:{
            name : name,
            password : password,
            username : username
        }})
        return check;
    }

    handleChange = (event)=>{
        let field = event.target.name;
        let value = event.target.value;
        this.setState({[field]:value});
    }

    handleRegister = (event) =>{
        event.preventDefault();
        if (this.validateForm()){
            this.props.registerUser({username : this.state.username,
                                    password : this.state.password, 
                                    name : this.state.name});
        }
    }
    render(){
        if (this.props.isAuthenticated){
            return <Redirect to="/showrides" />;
        }
        else{   
                return (
                <div className="row">
                    <div className="dataDiv mt-5 pb-3 card offset-sm-2 col-sm-8">
                        <div className="card-header bg-primary text-center" >
                            <h3>Register</h3>
                        </div>
                    <form>
                    <div className="row pt-5">
                        <div className="col-sm-4 offset-sm-1">
                            <center>
                            <label htmlFor="name" style={{color:"black"}}>Name</label>
                            </center>        
                            <input type="text" name ="name" onChange={this.handleChange} value={this.state.name} className={this.state.error.name? "form-control is-invalid": "form-control" } id="name" placeholder="Name" required />
                            {this.state.error.name? <div className="invalid-feedback">
                                {this.state.error.name}
                            </div> : ""}
                        </div>
                        <div className="col-sm-4 offset-sm-1">
                            <center>
                            <label htmlFor="username" style={{color:"black"}}>Username</label>
                            </center>        
                            <input type="text" name ="username" onChange={this.handleChange} value={this.state.username} className={this.state.error.username? "form-control is-invalid": "form-control" } id="username" placeholder="Username" required />
                            {this.state.error.username? <div className="invalid-feedback">
                                {this.state.error.username}
                            </div> : ""}
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-sm-4 offset-sm-1">
                            <center>
                            <label htmlFor="password" style={{color:"black"}}>Password</label>
                            </center>        
                            <input type="password" name ="password" onChange={this.handleChange} value={this.state.password} className={this.state.error.password? "form-control is-invalid": "form-control" } id="password" placeholder="Password" required />
                            {this.state.error? <div className="invalid-feedback">
                                {this.state.error.password}
                            </div> : ""}
                        </div>
                        <div className="col-sm-4 offset-sm-1">
                            <center>
                                <label htmlFor="password2" style={{color:"black"}}>Password</label>
                            </center>
                            <input type="password" name="password2" onChange={this.handleChange} value={this.state.password2} className={this.state.error.password? "form-control is-invalid": "form-control" } id="password2" placeholder="Confirm Password" required />
                            {this.state.error? <div className="invalid-feedback">
                                {this.state.error.password}
                            </div> : ""}
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-sm-4 offset-sm-4 mt-3">
                            <center>
                                {this.props.isLoading?
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only"></span>
                                </div>:
                                <>
                                <button name ="register" className="btn btn-primary" onClick={this.handleRegister}>
                                    Register
                                </button><br /><br />
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
                </div>
            );
        }

    }

}
export default RegisterForm;