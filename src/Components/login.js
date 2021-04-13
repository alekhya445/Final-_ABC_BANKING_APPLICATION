import React, { useState, useEffect } from 'react';
import { Navbar, Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import Nav from './navbarBeforeLogin'
//import './App.css';

function Login(props) {

    useEffect(() => {
        loadUsers();
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameinputvalchange = (e) => {

        setUsername(e.target.value);

    }
    const passwordinputvalchange = (e) => {
        setPassword(e.target.value);

    }
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
        await axios.get('http://localhost:3000/users')
            .then(response => {
                setUser(response.data);
            });
    }

    const onSubmit = () => {

        const usernameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isUsernameValid = usernameRegex.test(username);
        const isPasswordValid = passwordRegex.test(password);

        if (isUsernameValid && isPasswordValid) {
            for (let i = 0; i < users.length; i++) {
              
                if (username == users[i].email && password == users[i].password && users[i].role == 'Admin') {
                    return props.history.push('/adminpage');
                } else if (username == users[i].email && password == users[i].password && users[i].role == 'User') {
                    sessionStorage.setItem("user", JSON.stringify(users[i]));
                    return props.history.push('/userpage');

                } else {
                    if (i == users.length - 1) {
                        alert("User name and password not matched");
                    }
                }
            }
        }
        else {
            alert("Invalid Credentials");
        }

    }
    return (




        <div>

            <Nav></Nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="loginpage">
                <br></br>
                <br></br>


                <Form>


                    <h2>ACCOUNT LOGIN</h2>
                    <br></br>
                    <div className="input-box ">
                        <input type="text" name="email" placeholder="Enter your Email Id**" onChange={usernameinputvalchange}

                            required />

                        <br></br>
                        <br></br>

                        <div className="input-box">
                            <input type="password" name="password" placeholder="Enter Your Password**"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}" title="Must contain at least 
                        nd one uppercase and lowercase letter, and at least 6 or 
                        more characters and one special character" onChange={passwordinputvalchange}

                                required />

                            <br></br>
                            <br></br>


                            <div className="text-center">
                                <button className="btn btn-primary" block onClick={onSubmit} >LOGIN</button>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>

                </Form>
            </div>
        </div>
    );
}
export default Login;