import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';



export default class createPost extends React.Component {
    constructor(props) {
        super(props)
        this._onChangeBody =  this._onChangeBody.bind(this);
        this._onChangeTitle = this._onChangeTitle.bind(this);
        this._onSubmit = this._onSubmit.bind(this);

        this.state = {
            title: '',
            body: '',
        }

    }

    _onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        })
    }
    _onChangeBody(e) {
        this.setState({
            body: e.target.value,
        })  
    }
    _onSubmit(e) {
        e.preventDefault();
        const obj = {
            title : this.state.title,
            body : this.state.body
        }
        axios.post("https://jsonplaceholder.typicode.com/posts",obj)
        .then((response)=>{
            console.log(response);
        })
        this.setState({
            title: '',
            body : ''
        })
        
        console.log(`post ${this.state.title} and body ${this.state.body}`);
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Posts</h3>
                <form onSubmit={this._onSubmit}>
                    <div className="form-group">
                        <label>Add Title  </label>
                        <input 
                        type="text" 
                        value={this.state.title} 
                        onChange={this._onChangeTitle} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Body </label>
                        <input 
                        type="text" 
                        value={this.state.body} 
                        onChange={this._onChangeBody} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary" />
                        <Link to={'/post'} className="btn btn-default">Back</Link>
                    </div>
                </form>
            </div>

        )
    }
};