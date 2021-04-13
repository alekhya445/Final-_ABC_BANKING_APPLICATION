import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


function DelAmount() {
    const [user, setUser] = useState({
        id: '',
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        balance: 0,
        transaction: []

    });
    const [amount, setAmount] = useState('');

    const { id } = useParams();
    useEffect(() => {
        const res = sessionStorage.getItem('user');
        let user = JSON.parse(res);
        getUser(user.id);
    }, []);

    const getUser = async (id) => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
    }

    const onSubmit = async e => {
        e.preventDefault();
        let date = new Date;
        let obj = {
            "type": '',
            "accountType": '',
            "dateTime": date,
            "amount": 0
        };
        obj.amount = amount;
        if (parseInt(amount) > 0) {
            obj.type = "Debit";
        } else {
            obj.type = "Credit";
        }
        obj.accountType = "Savings";
        user.transaction.push(obj);
        user.balance = parseInt(user.balance) - parseInt(amount);
        await axios.put(`http://localhost:3000/users/${user.id}`, user);
        getUser(user.id);
        alert('Amount withdrawns successfully');



    }
    const passwordinputvalchange = (e) => {
        setAmount(e.target.value);

    }
    return (


        <div className="delamount">

            <br></br>
            <br></br>
            <br></br>
          
            <Link class='btn btn-outline-primary btnAdd' to={'/userpage'} block >Back to Savings</Link>
            <br></br>
            <br></br>
            <br></br>
            <center>

                <Card style={{ width: '24rem', backgroundColor: 'aqua' }}>
                    <Form>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label >User ID: <b>{user.name}</b></Form.Label>

                        </Form.Group>
                        <Form.Group controlId="formBasicEBal">
                            <Form.Label>Saving Balance: <b>{user.balance}</b></Form.Label>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ marginRight: "270px" }}>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter an amount" onChange={passwordinputvalchange} />
                        </Form.Group>

                        <Button class="btn btn-outline-primary" variant="primary" onClick={onSubmit} block >Submit</Button>
                    </Form>
                </Card>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </center>
        </div>

    )
}


export default DelAmount;