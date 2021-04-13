import React, { Fragment, useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {

    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        AadharNo: "",
        role: "User",
        cType: "Current Account",
        sType: "Savings Account",
        balance: 0,
        currentBalance: 0,
        transaction: []

    });

    const { name, username, email, password, phone, AadharNo, role, balance, currentBalance, transaction } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/users", user);
        history.push('/login');
    };
    return (
        <div >
            <Container className="container1">

                <Form onSubmit={e => onSubmit(e)}>
                    <center>

                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" size="sm" name="name" value={name}
                            onChange={e => onInputChange(e)} required />

                        <Form.Label >UseName</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your UserName" size="sm" name="username" value={username}
                            onChange={e => onInputChange(e)} required />
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your E-mail Address" size="sm" name="email" value={email}
                            onChange={e => onInputChange(e)} required />

                        <Form.Label >Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your Password" size="sm" name="password" value={password}
                            onChange={e => onInputChange(e)} required />

                        <Form.Label >MobileNo</Form.Label>
                        <Form.Control type="mobile" placeholder="Enter your Phone Number" size="sm" name="phone" value={phone}
                            onChange={e => onInputChange(e)} required />

                        <Form.Label >AadharNo</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Aadhar Number" size="sm" name="AadharNo" value={AadharNo}
                            onChange={e => onInputChange(e)} required />

                        {/* <Form.Label >Balance</Form.Label>
                        <Form.Control type="mobile" placeholder="Enter your Balance" size="sm" name="balance" value={balance}
                            onChange={e => onInputChange(e)} />

                        <Form.Label >NetBalance</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Current Balance" size="sm" name="currentBalance" value={currentBalance}
                            onChange={e => onInputChange(e)} /> */}
                        {/* <Form.Label >Role</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Role" size="sm" name="role" value={role}
                            onChange={e => onInputChange(e)} required /> */}

                        <br />
                        <button className="btn btn-primary btn-block">SignUp</button>
                    </center>
                </Form>
            </Container>
        </div>

    )
}
export default Signup;




