import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Alert, Card, Row, Col } from 'react-bootstrap';

const Viewuser = (props) => {

    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        AadharNo: ' ',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentBalance: 0,

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push('/addamount');
    }
    const userButton2 = () => {
        props.history.push('/delamount');

    }
    // const userButton3 = () => {
    //     props.history.push('/delamount');
    // }
    const currentAddAmount = () => {
        props.history.push('/currentadd');
    }
    const currentDelAmount = () => {
        props.history.push('/currentdel');
    }
    // const ministatement = () => {
    //     props.history.push('/mini');
    // }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const currentButton2 = () => {
        props.history.push('/');
    }

    const savingsButton = () => {
        setShowBotton(true);
    }
    const setData = (flag) => {
        sessionStorage.setItem('from', flag)
    }
    return (

        <div className="viewuserpage">

            <center>

                <div>
                    <h1 className="display-4">Welcome {user.username} !!!</h1>
                    <br></br>
                    <br></br>
                    <br></br>


                    <Row>

                        <Col className="currentImage">
                            <Card style={{ width: '14rem' }}>

                                <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.xDDYMYxTMoLrDTQNX0wLzwHaEJ?w=332&h=187&c=7&o=5&dpr=1.5&pid=1.7" />
                                <Button variant="dark" onClick={currentButton}>Current</Button>
                            </Card>
                        </Col>
                        <Col className="savingImage">
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.xDDYMYxTMoLrDTQNX0wLzwHaEJ?w=332&h=187&c=7&o=5&dpr=1.5&pid=1.7"/>
                                <Button variant="dark" onClick={savingsButton}>Savings</Button>
                            </Card>
                        </Col>
                    </Row><br></br>

                    {
                        showButton === true && (<div>
                            <Link class="btn btn-outline-primary" onClick={userButton}>Add Amount</Link>
                            <Link class="btn btn-outline-primary" onClick={userButton2}>Withdarw Amount</Link>
                            {/* <Link class="btn btn-outline-primary" onClick={ministatement}>Ministatementt</Link> */}
                            <Link class='btn btn-outline-primary' onClick={setData('Savings')} to={`/ministatement/${user.id}`}>MiniStatement</Link>
                            <ul className="list-group w-50" >
                                <li className="list-group-item">Name : {user.name}</li>
                                <li className="list-group-item">Username : {user.username}</li>
                                <li className="list-group-item">Email: {user.email}</li>
                                <li className="list-group-item">Account Type:Savings</li>
                                <li className="list-group-item">Mobile : {user.phone}</li>
                                <li className="list-group-item">AadharNo: {user.AadharNo}</li>
                                <li className="list-group-item">Balance : {user.balance}</li>

                            </ul>
                        </div>


                        )}{(showButton === false &&
                            <div>
                                <Link class="btn btn-outline-primary" onClick={currentAddAmount}>Add Amount</Link>
                                <Link class="btn btn-outline-primary" onClick={currentDelAmount}>Withdarw Amount</Link>
                                {/* <Link class="btn btn-outline-primary" onClick={ministatement}>Ministatementt</Link> */}
                                <Link class='btn btn-outline-primary' onClick={setData('Current')} to={`/ministatement/${user.id}`}>MiniStatement</Link>
                                <ul className="list-group w-50">
                                    <li className="list-group-item">Name : {user.name}</li>
                                    <li className="list-group-item">Username : {user.username}</li>
                                    <li className="list-group-item">Email: {user.email}</li>
                                    <li className="list-group-item">Account Type:Current</li>
                                    <li className="list-group-item">Mobile : {user.phone}</li>
                                    <li className="list-group-item"> AadharNo: {user.AadharNo}</li>
                                    <li className="list-group-item">Balance : {user.currentBalance}</li>

                                </ul>
                            </div>


                        )}



                </div>


            </center>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <Button variant="primary" onClick={currentButton2}>Logout</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Viewuser;