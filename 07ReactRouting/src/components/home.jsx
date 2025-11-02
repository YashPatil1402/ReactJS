import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
const navigate =useNavigate();
  function handleClick(){
    navigate('./about')
  }
  return (
  <>
  <div>Home Page</div>
  <button onClick={handleClick}>
    move to about page
  </button>
  </>
  )
}

export default Home;
