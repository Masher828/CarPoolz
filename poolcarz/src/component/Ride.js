import React from 'react';

class Ride extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter : "all",
            rideIndex: -1,
            rideBooked : false
        }
    }

    bookRide = () =>{
        if (this.state.rideBooked){
            this.props.cancelRide({offerId:this.props.offer[this.state.rideIndex]._id});
            this.setState({rideBooked : !this.state.rideBooked});
        }
        else{
            this.props.bookRide({offerId : this.props.offer[this.state.rideIndex]._id});
            this.setState({rideBooked : !this.state.rideBooked});
        }
        
    }
    addRide = (val) =>{
        this.setState({rideIndex:Number(val)});
    }

    render(){
        return(
        <>
            <div className="text-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    
                    {this.state.rideBooked? 
                    <button type="button" name="give" onClick={this.props.handleClick} disabled className="btn btn-primary">Show All Rides</button>
                    :
                    <>
                    <button type="button" name="give" onClick={this.props.handleClick} className="btn btn-primary">Show All Rides</button>
                    <button type="button" className="btn btn-primary">From Infy</button>
                    <button type="button" className="btn btn-primary">To Infy</button>
                    <button type="button" className="btn btn-primary">Others</button>
                    </>
                    }
                </div>
                
                {this.state.rideBooked? null:
                
                <div className="table-responsive">
                <p className="text-primary mt-3">Please select a ride!</p>
                <table className="table table-hover table-bordered">
                    <thead className="thead-primary">
                        <tr className="bg-primary">
                        <th scope="col">Start</th>
                        <th scope="col">End</th>
                        <th scope="col">Seats Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.offer.map((ride, index)=> {
                            
                            return(
                                <tr key={ride._id} onClick={()=>this.addRide(index)}>
                                    <td>{ride.start}</td>
                                    <td>{ride.end}</td>
                                    <td>{ride.seats}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
                }
                {this.state.rideIndex > -1?
                <div className="card text-center mt-3">
                    <div className="card-header bg-primary">
                        Ride Details
                    </div>
                <div className="table-responsive">
                <table className="table table-hover table-bordered">
                    <thead className="thead">
                        <tr >
                            <th scope="col">Name</th>
                            <th scope="col">Start</th>
                            <th scope="col">End</th>
                            <th scope="col">Seats Available</th>
                            <th scope ="col">Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={this.props.offer[this.state.rideIndex]._id}>
                            <td>{this.props.offer[this.state.rideIndex].name}</td>
                            <td>{this.props.offer[this.state.rideIndex].start}</td>
                            <td>{this.props.offer[this.state.rideIndex].end}</td>
                            <td>{this.props.offer[this.state.rideIndex].seats-1}</td>
                            <td>{this.props.offer[this.state.rideIndex].car}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <center>
                {this.state.rideBooked?
                <>
                <p className="mt-3" style={{color:'black'}}>Ride Booked. Id is {this.props.offer[this.state.rideIndex]._id}</p>
                <button onClick={this.bookRide} 
                        name="give" className="btn btn-md btn-danger text-center mb-3"
                        style={{width:"8em"}}>
                        Cancel Ride
                </button>
                </>
                :<button onClick={this.bookRide} 
                        name="give" className="btn btn-md btn-primary text-center mb-3"
                        style={{width:"8em"}}>
                        Book Ride!
                </button>
                }
                </center>
                
              </div>
              
        :null}
                
            </div>
        </>
        );
    }
}

export default Ride;