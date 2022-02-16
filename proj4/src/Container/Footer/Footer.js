import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <>
     <Container fluid>
         <Row className='last-foot'>
            <Col>
              <p>its.<span className='foot-name'>mee_kesav</span>©2022</p>
            </Col>        
         </Row>
     </Container>
    </>
  )
}

export default Footer