import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {  Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Adduser from './adduser';
import Edituser from './edituser';
import Viewuser from './viewuser';
//import './App.css';



function Adminpage(props) {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/users/${id}`);
        loadUsers();
    }
    const user = () => {
        props.history.push('/adduser');
    }
    const user2 = () => {
        props.history.push('/');
    }

    const viewuser1 = (id) => {
        props.history.push(`/viewuser1/${id}`);
    }

    const edituser = (id) => {
        props.history.push(`/edituser/${id}`);
    }

    const loginpage = () => {
        props.history.push(`/login`);
    }
    return (

        <div className="adminpage">
            <center>
                <h3>USERS DATA</h3>
                <Router>

                    <Button style={{ marginLeft: '1000px' }} onClick={user2}>Logout</Button>
                    <br></br>
                    <br></br>
                    <Button style={{ marginLeft: '1000px' }} onClick={user}>Add Users</Button>

                    <br></br>
                    <br></br>




                    <Container>
                        <div class="tab">
                            <table class="table border shadow" >
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope='col'>S.No</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Username</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>MobileNumber</th>


                                        <th scope='col'>Action</th>
                                    </tr>

                                </thead>
                                <tbody>

                                    {
                                        users.map((user, index) => (
                                            <tr>
                                                <th scope='row'>{index + 1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>


                                                <td>

                                                    <Link class='btn btn-outline-primary' onClick={() => viewuser1(user.id)} to={`/viewuser1/${user.id}`}>View</Link>{' '}
                                                    <Link class='btn btn-outline-info' onClick={() => edituser(user.id)} to={`/edituser/${user.id}`}>Edit</Link>{' '}
                                                    <Link class='btn btn-outline-danger' onClick={() => deleteUser(user.id)}>Delete</Link>{' '}
                                                    {/* <Link class='btn btn-outline-danger' onClick={() => loginpage()}>Back to Login</Link>{'/login/ '} */}


                                                </td>
                                            </tr>
                                        ))

                                    }

                                </tbody>
                            </table>
                            <Button style={{ marginLeft: '1000px' }} onClick={loginpage}>Back To LoginPage</Button>
                        </div>
                    </Container>
                    <Switch>
                        <Route path="/adduser" component={Adduser}></Route>
                        <Route path="/edituser/:id" component={Edituser}></Route>
                        <Route path="/viewuser/:id" component={Viewuser}></Route>
                    </Switch>
                </Router>
            </center>


        </div>


    )
}

export default Adminpage;