import React from 'react';
import Rides from './Ride';

class ShowRides extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            getRide : false,
            offerRide : false
        }
    }

    handleClick = (e)=>{
        if (e.target.name == 'give'){
            if (!this.state.getRide && this.state.offer){
                this.setState({offerRide:!this.state.offerRide})
            }
            this.setState({getRide:!this.state.getRide})
        }
        else{
            if (this.state.getRide && !this.state.offer){
                this.setState({offerRide:!this.state.giveRide})
            }
            this.setState({offerRide:!this.state.offerRide})
        }
    }

    render(){
        return(
            <>
                <div className="dataDiv pt-5" >
                    <div className="row">
                        <div className = "col-sm-8 offset-sm-2">
                            <div className="card ">
                                <div className="card-header bg-primary" >
                                    Book A Ride
                                </div>
                                <div className="card-body text-center" >
                                    <p style={{color:"black"}}> 
                                    Pool Carz is an online application which enable users to share rides with others. You can either
                                    book a ride or offer a ride. Did we mention that this app is advertisement free ? To add on top of that
                                    free of cost ! So what are you waiting for ? Check out the rides available and start PCing!!
                                    </p>

                                    {this.state.getRide ? <Rides handleClick={this.handleClick} /> :<button onClick={this.handleClick} name="give" className="btn btn-primary">Show All Rides</button>}
                                    <br/><br/>
                                    {this.state.offerRide ? <Rides /> :<button onClick={this.handleClick} name="offer" className="btn btn-primary">Offer a Ride</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ShowRides;