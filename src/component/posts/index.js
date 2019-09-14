import React, { Component } from 'react';
import axios from 'axios';
import { MDBDataTable, Row, Col, Card, CardBody } from 'mdbreact';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

const url = 'https://jsonplaceholder.typicode.com/posts';

export default class View extends Component {

    state = {
        post: [],
        isLoading: true,
        tableRows: [],

    }

    componentWillMount = async () => {
        await axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ post: data });
            })
            .then(async () => {
                this.setState({
                    tableRows: this._Post(),
                    isLoading: false,
                })
            })
    }

    _deletePost = (Postid)=>{

        

        axios.delete(url+"/"+Postid,(response)=>{
            console.log(response);
        })

    }

    _Post = () => {
        let posts = this.state.post.map((post) => {
            return (
                {
                    number: post.id,
                    title: post.title,
                    user: post.userId,
                    body: post.body,
                    edit : <a href="" className="btn btn-info">Edit</a>,
                    delete : <button onClick= {this._deletePost(post.id)} className="btn btn-danger">Delete</button>,
                }
            );
        });
        return posts;
    }
    render() {

        const data = {
            columns: [
                {
                    label: '#',
                    field: 'number',
                },
                {
                    label: 'Title',
                    field: 'title',
                },
                {
                    label: 'User Id',
                    field: 'user',
                },
                {
                    label: 'Body',
                    field: 'body',
                },
                {
                    label : 'Edit User',
                    field : 'edit'+'delete',
                },
                {
                    label : 'Delete User'
                }

            ],
            rows: this.state.tableRows,
    }

        return (
            <Row className="mb-4">
                <Col md="12">
                    <Link to={'/postadd'} className="btn btn-primary" >Add Posts</Link>
                </Col>

                <Col md="12">
                    <Card>
                        <CardBody>
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                data={data}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        );
    }
}