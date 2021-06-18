import React, { Component } from 'react'

class StudentComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            emailId:'',
            address:''
        }

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }

    changeAddressHandler=(event)=>{
        this.setState({address: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={firstName: this.state.firstName,lastName: this.state.lastName,emailId: this.state.emailId, address: this.state.address};
        console.log('Student=>'+JSON.stringify(student));
    }

    cancel(){
        this.props.history.push();
    }

    render(){
        return(
            <div>

            <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Student Registration Form</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input placeholder="Email" name="emailId" className="form-control"
                                    value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Address:</label>
                                    <input placeholder="Address" name="address" className="form-control"
                                    value={this.state.address} onChange={this.changeAddressHandler}/>
                                </div>
                                <br></br>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default StudentComponent
