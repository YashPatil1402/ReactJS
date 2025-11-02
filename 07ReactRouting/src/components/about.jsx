

import React from 'react';
import { useNavigate } from 'react-router';

const About = () => {
  const navigate=useNavigate()
  function HandleClick(){
    navigate('/dashboard')

  }

 return (
    <>
  <div>About Page</div>
  <button onClick={HandleClick}>
    Move To Dashboard
  </button>
  </>
);
}

export default About;
