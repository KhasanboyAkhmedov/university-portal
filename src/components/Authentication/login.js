import React from 'react';
import {useState} from "react";
import {Link, useHistory} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);
    const history = useHistory();

    async function login() {
        try {
            console.warn(email, password);
            let item = { email, password };
            const response = await fetch('https://dev.api.millatumidi.uz:9090/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(item),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                setError('Wrong email or password.');
                console.error('Error:', errorResponse);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result, 'token');

            // Assuming the token is in the response and is named 'token'
            const token = result.token;
            if (token) {
                localStorage.setItem('token', token);
            }

            localStorage.setItem('user', JSON.stringify(result));

            history.push('/');
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <div className="auth option2">
            <div className="auth_left">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <Link to="/">
                                <img className="logo" src="/assets/images/gallery/15.jpg" alt="Logo"></img>
                            </Link>
                            <div className="card-title mt-3">Login to your account</div>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">
                                <Link to="forgotpassword" className="float-right small">
                                    I forgot password
                                </Link>
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"/>
                                <span className="custom-control-label">Remember me</span>
                            </label>
                        </div>
                        <div className="text-center">
                            <button onClick={login} className="btn btn-primary btn-block" title="">
                                Sign in
                            </button>
                            {error && <div className="text-danger mt-3">{error}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;