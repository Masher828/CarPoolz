import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    handleLogout = (e)=>{
        this.props.logoutUser();
    }
    render(){
        return (
<>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">PoolCarz</a>
            {this.props.isAuthenticated ? 
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Link to ="/">
                        <button type="button" className="btn btn-dark" onClick={()=><Redirect to="/showrides" />}>Home</button>
                    </Link>
                    <button type="button" className="btn btn-dark" onClick={this.handleLogout}>Logout</button>
                </div>
            : this.props.isFetching ?
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
            </div>
            : <div className="btn-group" role="group" aria-label="Basic example">
                    {this.props.page? 
                    <button type="button" className="btn btn-dark" onClick={this.props.changeHomePage}>
                        Register
                    </button>
                    :<button type="button" className="btn btn-dark" onClick={this.props.changeHomePage}>
                        Login
                     </button>}  
              </div>
            }
        </nav>
        <p  style={{textAlign:"center", backgroundColor:"gray", color:"white"}}>
            Friends don't let friends ride alone
        </p>
        </>
        );
        
    }
}

export default Header;