import React from 'react';
import Footer from './Footer/Footer';
import './Home.css';
import Login from './Login/Login';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='home-div'>
                    <div className='title'>
                        <h1>facebook</h1>
                        <p>Facebook helps you connect and share<br/>with the people in your life.</p>
                    </div>
                    <div className='login-div'>
                        <Login></Login>
                    </div>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;