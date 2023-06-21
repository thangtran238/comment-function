import React, { useState, useEffect } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {

    const [dataForm, setDataForm] = useState({
        "email": "",
        "password": ""
    });




    const onLogin = async () => {
        if (dataForm.email != "" && dataForm.password != "") {
            const _formData = new FormData();
            _formData.append("email", dataForm.email)
            _formData.append("password", dataForm.password)


            const requestOptions = {
                method: 'POST',
                body: _formData
            };

            const response = await fetch('http://127.0.0.1:8000/api/obtainers/login', requestOptions)

            if (response.status == 200) {
                var res = await response.json();

                sessionStorage.setItem('obtainer_id', res.data.id);
                sessionStorage.setItem('token', res.token);

                alert('Login successful!');
                setTimeout(() => {
                    window.location = 'http://localhost:3000/';
                }, 1000);

            } else {
                alert('Wrong email or password!');
            }
        }
    }


    // const checkTokenAndRedirect = () => {
    //     const token = sessionStorage.getItem("token");
    //     if (token) {
    //         setTimeout(() => {
    //             window.location = "http://localhost:3000";
    //         }, 100)
    //     }
    // };

    // useEffect(() => {
    //     checkTokenAndRedirect();
    //   }, []);



    return (
        <div className="form-login">

            <div className="box-login">
                <div className="form-group-login">
                    <h3>Login</h3>
                </div>
                <div className="form-group-login">
                    <label>Email</label>
                    <input type="email" name="email" onChange={(e) => setDataForm({ ...dataForm, "email": e.target.value })} />
                </div>
                <div className="form-group-login">
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setDataForm({ ...dataForm, "password": e.target.value })} />
                </div>
                <div className="form-group-login">
                    <button className="btn-login" onClick={() => onLogin()}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
