import React from 'react';
import {Container,Row, Col, Button} from 'react-bootstrap';
import Typical from 'react-typical';
import "./Profile.css";
import pic2  from './mypic1.jpg';
import Navbar from './Header';


const Profile = () => {
  return (<>
           <Container fluid className="container-1">
               <Navbar />
                   <Row className='Profile-detais'>
                      <Col className="colz1" sm={12} md={6} lg={7}>
                         <div className='social-icon'>
                               <a href='#'>
                                    <i className='fa fa-facebook-square'></i>               
                               </a>
                               <a href='#'>
                                    <i className='fa fa-google-plus-square'></i>               
                               </a>
                               <a href='#'>
                                    <i className='fa fa-instagram'></i>               
                               </a>
                               <a href='#'>
                                    <i className='fa fa-youtube-square'></i>               
                               </a>
                               <a href='#'>
                                    <i className='fa fa-twitter'></i>               
                               </a>
                         </div>

                         <div className='myName'>
                            <span className='name-text'>
                            {" "}
                               Hello, I'M <span className='name-highlight'>Kesav</span>
                            </span>                 
                         </div>

                         <div className='myRole'>
                            <span className='name-text2'>
                              <h1>
                                    <Typical 
                                       loop={Infinity}
                                       steps={["Enthusiastic Dev 😎 ",1000,
                                              "Web Developer 🌐",1000,
                                               "FrontEnd 💻",1000,
                                                "React ❤️",1000,]} />
                              </h1>
                              <span className='mytagline'>Front end Creater and Designer.</span>
                            </span>                 
                         </div>
                         <br />
                         <div className='profileOption'>
                         <Button className="btn primary-btn" href="/Contactsm" variant="success">Hire Me</Button>{' '}
                         <a href='#' download='myresume.pdf'>
                         <Button className="btn highlighted-btn" variant="warning">Get Resume</Button>{' '}
                         </a>
                         </div>
                      </Col>
                      <Col className='colz2' sm={12} md={6} lg={5}>
                         <div className='profile-picture'>
                             <div className='profile-picture-background'>
                                <img src={pic2} alt='no-connection' />
                             </div>
                         </div>
                      </Col>
                    </Row>
                    
                  </Container>
                  <Container fluid className='p-footer'>
                     <Row>
                        <Col>
                        <div className='profile-footer'>
                             <div className='profile-footer-background'>
                             
                             </div>
                         </div>
                        </Col>
                     </Row>
                  </Container>
                  
                  
                  
                  
                  
                  
                  
                  </>  );




                
                  };

export default Profile;
