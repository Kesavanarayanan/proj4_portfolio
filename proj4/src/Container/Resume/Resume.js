import React from 'react';
import './Resume.css'
import { Accordion, Container,Row, Col,ProgressBar} from 'react-bootstrap';
import {MdWork} from 'react-icons/md';
import {GrPersonalComputer, GrProjects} from 'react-icons/gr';
import{IoColorPaletteOutline} from 'react-icons/io5';
import {DiReact,DiCss3,DiSass} from 'react-icons/di'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'
import {BsBootstrap} from 'react-icons/bs'
import {RiReactjsFill} from 'react-icons/ri'
import {SiMaterialui} from 'react-icons/si'

import Screenheading from '../Screenheading/Screenheading';


 const Resume = () => {
  
  return (
  
<div className='resume-parent'>
  <div className='resume-head'>
    <Screenheading title={'Resume'} subtitle={'My format Bio Details'} />
  </div>
     
     <Container className="para1">
        <Row>
           <Col  >
           <Accordion defaultActiveKey={['1']} alwaysOpen>
              
               <Accordion.Item eventKey="0" >
                  <Accordion.Header><h4>Work History <MdWork/></h4> </Accordion.Header>
                    <Accordion.Body className="work-history-main">
                      <div className='work-history'>
                        <div className='work-heading'>
                        <span>Atos global IT solutions and services private limited. Chennai.</span>
                        </div>
                        <div className='work-subheading'>
                        <span>Associate Engineer | 2+ Yrs of Experience.</span>
                        </div>
                        <div className='work-bullets'>
                        <span>
                           Role: Mainframe Production control - Batch Operation.<br/>
                           Tools: CONTROL-M, CA7, ZEKE.<br/>
                           Clients: Schneider Electric, 7-Eleven, Franklin Templeton.
                         </span>
                        </div>
                      </div>
                   </Accordion.Body>
                </Accordion.Item>

               <Accordion.Item eventKey="1" >
                  <Accordion.Header><h4>Programming Skills <GrPersonalComputer/></h4></Accordion.Header>
                    <Accordion.Body className="skills-main">
                      <Container>
                        <Row>
                          <Col xs={12} s={12} md={6} lg={6} >
                          <div className='skills-Topic1'>
                           <ul>
                            <li><DiReact/> React JS <ProgressBar variant="warning" className='bg-black' style={{height:"10px"}} now={70} /></li>
                            <li><AiOutlineHtml5/> HTML <ProgressBar variant="warning" className='bg-black' style={{height:"10px"}}  now={80} /></li>
                            <li><DiCss3/> CSS <ProgressBar variant="warning" className='bg-black' style={{height:"10px"}} now={75} /></li>
                            <li><IoLogoJavascript/> Javascript <ProgressBar className='bg-black' variant="warning"  style={{height:"10px"}} now={70} /></li>
                            </ul>
                           </div>
                          </Col>
                          <Col xs={12} s={12} md={6} lg={6}>
                          <div className='skills-Topic2'>
                           <ul>
                            <li><BsBootstrap/> Bootstrap <ProgressBar className='bg-black' variant="warning" style={{height:"10px"}} now={70} /></li>
                            <li><DiSass/> SASS <ProgressBar variant="warning" className='bg-black'  style={{height:"10px"}} now={70} /></li>
                            <li><RiReactjsFill/> React Bootstrap <ProgressBar className='bg-black' variant="warning" style={{height:"10px"}} now={70} /></li>
                            <li><SiMaterialui/> Material UI <ProgressBar className='bg-black' variant="warning"  style={{height:"10px"}} now={65} /></li>
                          </ul>
                          </div>
                          </Col>
                        </Row>
                      </Container>
                   </Accordion.Body>
                </Accordion.Item>

               <Accordion.Item eventKey="2" >
                  <Accordion.Header><h4>Projects <GrProjects/></h4></Accordion.Header>
                    <Accordion.Body className='projects-main'>
                      <div className='projects-main-details'>
                         <h5>Basic Frontend Website</h5>
                         <p>- The website gives you basic Details about HTML, CSS and Javascript.</p>
                         <p>- Technologies Used: HTML, CSS, Bootstrap</p>
                         <br/>
                         <h5>Trip Planner website</h5>
                         <p>- A website that's used for planning the vacation trips.</p>
                         <p>- Technologies Used: React</p>
                         <br/>
                         <h5>Personal Portfolio Website</h5>
                         <p>- A Personal Portfolio website to showcase all my details and projects at one place.</p>
                         <p>- Technologies Used: React, Bootstrap</p>  
                      </div>
                   </Accordion.Body>
                </Accordion.Item>

               <Accordion.Item eventKey="3" >
                  <Accordion.Header><h4>Interests <IoColorPaletteOutline/></h4></Accordion.Header>
                    <Accordion.Body className='interest-main'>
                      <ul>
                        <li>Drawing</li>
                        <li>Cricket</li>
                        <li>Music</li>
                      </ul>
                   </Accordion.Body>
                </Accordion.Item>
            
            </Accordion>
           </Col>
        </Row>

</Container>
  
  
  </div>
  );


};

export default Resume;
