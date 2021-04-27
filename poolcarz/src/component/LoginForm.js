import React from 'react';
import BG from "../Assets/Images/BG.jpg";


class LoginForm extends React.Component{
    constructor(){
        super();
        this.state = {
            username : "",
            password : "",
            error : false
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
            this.props.loginUser(this.state.username, this.state.password);
        }
    }

    render(){
        return(
            <div className="dataDiv pt-5"  >
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
                            <center><button className="btn btn-primary">Login</button></center>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}
export default LoginForm;