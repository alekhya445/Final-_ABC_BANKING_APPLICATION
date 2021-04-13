import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
//import './App.css';


function CurrentBalence() {
    const [user, setUser] = useState({
        id: '',
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        currentBalance: 0,
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
            obj.type = "Credit";
        } else {
            obj.type = "Debit";
        }
        obj.accountType = "Current";
        user.transaction.push(obj);
        user.currentBalance = parseInt(user.currentBalance) + parseInt(amount);
        await axios.put(`http://localhost:3000/users/${user.id}`, user);
        getUser(user.id);
        alert('Amount added successfully');



    }
    const passwordinputvalchange = (e) => {
        setAmount(e.target.value);

    }
    return (


        <div className="currentadd">
            <br></br>
            <br></br>

            <center>
                <Link class='btn btn-outline-primary btnAdd' to={'/userpage'} block >Back to Current</Link>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                <Card className="currentcard" style={{ width: '24rem', backgroundColor: 'aqua' }}>
                    <Form>
                        <center>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >User ID:<b>{user.name}</b></Form.Label>

                            </Form.Group>
                            <Form.Group controlId="formBasicEBal">
                                <Form.Label>Current Balance: <b>{user.currentBalance}</b></Form.Label>
                            </Form.Group>
                        </center>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ paddingLeft: "10px" }}>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter an amount" onChange={passwordinputvalchange} />
                        </Form.Group>
                        <br></br>

                        <Button class="btn btn-outline-primary" variant="primary" onClick={onSubmit} block >Submit</Button>

                    </Form>
                </Card>
                <br></br>
                <br></br>
                <br></br>
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


export default CurrentBalence;



// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import {Card, Table } from 'react-bootstrap';


// function MiniStatement() {

//     const [user, setUser] = useState({

//         username: ' ',
//         balance: ' ',
//         transaction: []

//     });
//     const from = sessionStorage.getItem('from');
//     const { id } = useParams();

//     useEffect(() => {
//         loadUser();
//     }, []);

//     const loadUser = async () => {
//         const res = await axios.get(`http://localhost:3000/users/${id}`);
//         setUser(res.data);
//     }
//     return (
//         <div
//         style={{
//             backgroundImage: `url("https://cdn.hipwallpaper.com/i/3/4/KCu1jQ.jpg")`, backgroundRepeat: 'no-repeat', width: '1300px', height: '1100px'
//         }}>
//         <div>
//             <h3><center>Mini Statement</center></h3>
//         <Link class='btn btn-outline-primary btnAdd' to={'/useraxios'} block >Previous</Link>
//             <Card className="miniCard" style={{backgroundColor:"lightblue"}}>
//                 <p><center>Account Holder Name: <b>{user.name}</b></center></p>
//                 {from === 'Current' ? <p><center>Account Balance: <b>{user.currentBalance}</b></center></p>: <p><center>Account Balance: <b>{user.balance}</b></center></p>   }


//                 <Table striped bordered hover variant="primary">
//                     <thead>
//                         <tr>

//                             <th>Transaction Type</th>
//                             <th>Amount</th>
//                             <th>Account Type</th>
//                             <th>Date and Time</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         {
//                             user.transaction.map(tran => tran.accountType === from ?  (
//                                 <tr>
//                                     <td>{tran.type}</td>
//                                     <td>{tran.amount}</td>
//                                     <td>{tran.accountType}</td>
//                                     <td>{tran.dateTime}</td>
//                                 </tr>
//                             ) :  (<tr>

//                             </tr>)
//                              ) }
//                     </tbody>
//                 </Table>

//             </Card>

//         </div>
//         </div>
//     )

// }
// export default MiniStatement;