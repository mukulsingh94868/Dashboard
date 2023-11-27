import React from 'react';
import Header from '../../Compoments/Header/Header';
import LoginPage from '../../Auth/LoginPage';

const Home = () => {
  return (
    <>
      <div className="main">
        <Header />

        <div className='landingLogin'>
          <div className='loginSection'>
            <LoginPage />
          </div>

        </div>
        <div className=''>
        </div>
        <div className=''>
        </div>
        <div className=''>
        </div>
      </div>
    </>
  )
}

export default Home