import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/posts";



export default class createPost extends React.Component {
    constructor(props) {
        super(props)
        this._onChangeUsername =  this._onChangeUsername.bind(this);
        this._onChangeName = this._onChangeName.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangeAddress = this._onChangeAddress.bind(this);
        this._onSubmit = this._onSubmit.bind(this);

        this.state = {
            username: '',
            name: '',
            email: '',
            address: '',
        }

    }

    _onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        })
    }
    _onChangeName(e) {
        this.setState({
            name: e.target.value,
        })  
    }
    _onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        })  
    }
    _onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        })  
    }
    _onSubmit(e) {
        e.preventDefault();
        const obj = {
            username : this.state.username,
            name : this.state.name,
            email :  this.state.email,
            address : this.state.address,
        }
        axios.post(url,obj)
        .then((response)=>{
            console.log(response);
        })
        this.setState({
            username: '',
            name : '',
            email : '',
            address : '',
        })
        
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Users</h3>
                <form onSubmit={this._onSubmit}>
                    <div className="form-group">
                        <label>Name  </label>
                        <input 
                        type="text" 
                        value={this.state.name} 
                        onChange={this._onChangeName} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Username </label>
                        <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this._onChangeUsername} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email </label>
                        <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this._onChangeEmail} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Address </label>
                        <input 
                        type="text" 
                        value={this.state.address} 
                        onChange={this._onChangeAddress} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                        <Link to={'/users'} className="btn btn-default">Back</Link>
                    </div>
                </form>
            </div>

        )
    }
};