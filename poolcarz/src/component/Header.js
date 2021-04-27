import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{
    render(){
        return (
<>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">PoolCarz</a>
        </nav>
        <p className="mb-0" style={{textAlign:"center", backgroundColor:"gray", color:"white"}}>
            Friends don't let friends ride alone
        </p>
        </>
        );
    }
}

export default Header;