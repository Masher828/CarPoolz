import React from 'react';

class Ride extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter : "all"
        }
    }

    addRide = (val) =>{
        console.log(val);
    }
    render(){
        return(
        <>
            <div className="text-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" name="give" onClick={this.props.handleClick} class="btn btn-primary">Show All Rides</button>
                    <button type="button" class="btn btn-primary">From Infy</button>
                    <button type="button" class="btn btn-primary">To Infy</button>
                    <button type="button" class="btn btn-primary">Others</button>
                </div>
                <p className="text-primary mt-3">Please select a ride!</p>
                <div className="table-responsive">
                <table class="table table-hover">
                    <thead class="thead-primary">
                        <tr className="bg-primary">
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  onClick={()=>this.addRide(1)}>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                
            </div>
        </>
        );
    }
}

export default Ride;