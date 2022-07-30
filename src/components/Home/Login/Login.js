import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="login-form">
                <input type="text" placeholder='Email address or phone number'/> <br />
                <input type="password" name="" id="" placeholder='Password'/> <br />
                <button className='login-btn'>Log In</button>
                <a href="">Forgotten password?</a>
                <hr />
                <div className='create-ac-btn-div'>
                    <button className='create-ac-btn'>Create New Account</button>
                </div>
            </div>
            <p className='page-link'><strong><a href="">Create a Page</a></strong> for a celebrity, brand or business.</p>
        </div>
    );
};

export default Login;