import React from 'react';
import Login from '../../Auth/Login';
import Header from '../../Compoments/Header/Header';

const Home = () => {
  return (
    <>
      <div className="main">
        <Header />

        <div className='landingLogin'>
          <div className='loginSection'>
            <Login />
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