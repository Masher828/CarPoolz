import React from 'react';

class OfferRide extends React.Component{
    constructor(){
        super();
        this.state = {
            name :"",
            start :"",
            end:"",
            car:"",
            seats:"",
            error : {
                name : null,
                start : null,
                end : null,
                car : null,
                seats : null
            },
            added : false
        }
    }

    validateForm = () =>{
        let name,car, start, end,seats, check= true;
        if (!(this.state.name.length > 2 && this.state.name.length<51)){ 
            name = "Length of name must be between 3 and 50";
            check = false;
        }
        else{
            name= false;
        }
        if (!(this.state.start.length > 2 && this.state.start.length<21)){
            start = "Length of Starting Point must be between 3 and 20";
            check = false;
        }
        else{
            start = false;
            }
        if (!(this.state.end.length > 2 && this.state.end.length<21)){
            end = "Length of Destination must be between 3 and 20";
            check = false;
        }
        else{
            end = false;
        }
        if (!(this.state.car.length > 2 && this.state.car.length<21)){
            car="Length of Car Name must be between 3 and 20";
            check = false;
        }
        else{
            car = false;
          }  
        if (!(this.state.seats>0 && this.state.seats<9)){
                seats="Seats can be between 1-8";
                check = false;
        }
        else{
                seats = false;
        }
        this.setState({error:{
            name : name,
            start : start,
            end : end,
            seats : seats,
            car : car
        }})
        return check;
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if (this.validateForm()){
            this.setState({added : true})
            this.props.offerRide({name : this.state.name,
                                start : this.state.start, end : this.state.end,
                                car : this.state.car, seats : this.state.seats});
        }
    }
    render(){
        return(
            <div className="dataDiv" style={{overflowX:"hidden", overflowY:"inherit"}}>
                <div className="row" >
                    <div className = "col-sm-8 offset-sm-2">
                        <div className="card">
                            <div className="card-header bg-primary" >
                                Book A Ride
                            </div>
                            <div className="card-body text-center" >
                            <form style={{textAlign:"left"}}>
                                <div className="row" > 
                                    <div className="col-sm-10 offset-sm-1" >
                                        <label style={{color:"black"}}>Name</label>     
                                        <input type="text" name ="name" onChange={this.handleChange} value={this.state.name} className={this.state.error.name? "form-control is-invalid": "form-control" } id="name" placeholder="Name" required />
                                        {this.state.error.name? 
                                        <div className="invalid-feedback">
                                            {this.state.error.name}
                                        </div> 
                                        : ""}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-10 offset-sm-1">
                                        <label htmlFor="start" style={{color:"black"}}>Start Location</label>
                                        <input type="text" name="start" onChange={this.handleChange} value={this.state.start} className={this.state.error.start? "form-control is-invalid": "form-control" } id="start" placeholder="Start Location" required />
                                        {this.state.error.start? 
                                        <div className="invalid-feedback">
                                            {this.state.error.start}
                                        </div> 
                                        : ""
                                        }
                                    </div>
                                </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <label htmlFor="end" style={{color:"black"}}>Destination</label>
                                <input type="text" name="end" onChange={this.handleChange} value={this.state.end} className={this.state.error.end? "form-control is-invalid": "form-control" } id="end" placeholder="Destination" required />
                                {this.state.error.end? 
                                <div className="invalid-feedback">
                                    {this.state.error.end}
                                </div> 
                                : ""
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <label htmlFor="car" style={{color:"black"}}>Car</label>
                                <input type="text" name="car" onChange={this.handleChange} value={this.state.car} className={this.state.error.car? "form-control is-invalid": "form-control" } id="car" placeholder="Car" required />
                                {this.state.error.car?
                                <div className="invalid-feedback">
                                    {this.state.error.car}
                                </div> 
                                : ""
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 offset-sm-1">
                                <label htmlFor="seats" style={{color:"black"}}>Seats Available</label>
                                <input type="number" name="seats" onChange={this.handleChange} value={this.state.seats} className={this.state.error.seats? "form-control is-invalid": "form-control" } id="seats" placeholder="Seats Available" required />
                                {this.state.error.seats? 
                                <div className="invalid-feedback">
                                    {this.state.error.seats}
                                </div> 
                                : ""
                                }
                            </div>
                        </div>
                        <div className="row">
                            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary col-sm-2 mt-3 offset-sm-5">Submit</button>
                        </div>
                        {this.state.added ? <p className="text-center text-success" ><br/>Added Successfully</p> : "" }
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
            
            
        );
    }
}
export default OfferRide;