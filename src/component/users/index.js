import React, { Component } from 'react';
import axios from 'axios';
import { MDBDataTable, Row, Col, Card, CardBody } from 'mdbreact';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

const url = 'https://jsonplaceholder.typicode.com/users';

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

    _deleteUsers = (UserId)=>{

        

        axios.delete(url+"/"+UserId,(response)=>{
            console.log(response);
        })

    }

    _Post = () => {
        let posts = this.state.post.map((user) => {
            return (
                {
                    number: user.id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    address : user.address.street,
                    city : user.address.city,
                    edit : <a href="" className="btn btn-info">Edit</a>,
                    delete : <button onClick= {this._deleteUsers(user.id)} className="btn btn-danger">Delete</button>,
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
                    label: 'Name',
                    field: 'name',
                },
                {
                    label: 'Email',
                    field: 'email',
                },
                {
                    label: 'Username',
                    field: 'username',
                },
                {
                    label: 'Address',
                    field: 'address',
                },
                {
                    label: 'City',
                    field: 'city',
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
                    <Link to={'/usersadd'} className="btn btn-primary" >Add Users</Link>
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