import React, { Fragment, useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useHistory, useParams, Link } from 'react-router-dom';
import Adminpage from './adminpage';
import axios from 'axios';

const Edituser = () => {

    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' '

    });

    const history = useHistory();
    const { id } = useParams();

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }
    useEffect(() => {
        loadUser();

    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/users/${id}`, user);
        history.push('/adminpage');

    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(result.data);

    }
    return (

        <div className="editpage">

            <h3><center><i>EDIT USER</i></center></h3>
            <br></br>
            <br></br>
            <center>
                <Card style={{ width: '24rem', backgroundColor: "aqua" }}>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className='form-group' >
                            <p style={{ marginRight: "25px" }}>Name</p>
                            <input type='text' className='form-control'
                                placeholder='Enter Your Name' name='name' value={name} onChange={e => onInputChange(e)} />
                        </div>

                        <div className='form-group'>
                            <p style={{ marginRight: "25px" }}>Username</p>
                            <input type='text' className='form-control '
                                placeholder='Enter Your User Name' name='username' value={username} onChange={e => onInputChange(e)} />
                        </div>

                        <div className='form-group'>
                            <p style={{ marginRight: "25px" }}>Email</p>
                            <input type='text' className='form-control'
                                placeholder='Enter Your Email' name='email' value={email} onChange={e => onInputChange(e)} />
                        </div>



                        <div className='form-group'>
                            <p style={{ marginRight: "20px" }}>Mobile Number</p>
                            <input type='text' className='form-control '
                                placeholder='Enter Your Number' name='phone' value={phone} onChange={e => onInputChange(e)} />
                        </div>
                        <br></br>
                        <button className='btn btn-primary btn-block'>Update User</button>
                        
                        
                    </form>
                </Card>
                <br></br>
                <br></br>
                <br></br>

            </center>
        </div>

    )
}

export default Edituser;
