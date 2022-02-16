import React from 'react';
import '../../App.css';
import Profile from '../Home/Profile';
import Aboutme from '../Aboutme/Aboutme';
import Card from '../Education/Card';
import Resume from '../Resume/Resume';
import Contact from '../Contactme/Contact';
import Footer from '../Footer/Footer';

function Home() {
  return (
                    <>
                    <Profile />
                   <Aboutme />
                   <Card />
                    <Resume/>
                    <Contact/>
                    <Footer />
                  </>
  );
}

export default Home;