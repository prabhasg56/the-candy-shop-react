import React from 'react';
import Header from '../Layout/Header';
import CandyList from '../Candy/CandyList';
import './Home.css';

const Home = () => {
  return (
    <div className='main'>
      <Header/>
      <CandyList/>
    </div>
  )
}

export default Home
