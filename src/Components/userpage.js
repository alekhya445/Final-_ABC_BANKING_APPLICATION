import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



function Userpage(props) {
    
    let history = useHistory();

    useEffect(() => {
        let user = sessionStorage.getItem("user");
        user = JSON.parse(user);
        props.history.push(`/viewuser/${user.id}`);
        console.log(user);
    }, []);

    return (
        <h1>User page</h1>
    )
}

export default Userpage;