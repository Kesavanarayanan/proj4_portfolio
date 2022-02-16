import React from 'react';
import Navbar from '../Home/Header';
import Resume from '../Resume/Resume';
import Footer from '../Footer/Footer';

const Resumesm = () => {
  return (
    <>
  <div  className='res-me'>
    <Navbar/>
    <Resume/>
  </div>
    <Footer /> 
  </>);
};

export default Resumesm;
