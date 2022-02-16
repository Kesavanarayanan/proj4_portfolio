import React from 'react';
import Screenheading from '../Screenheading/Screenheading';
import { Container, Row, Col } from 'react-bootstrap';
import './Card.css';
import Carditem from './Carditem';
import './Card.css';

const Card = () => {
  return (
  <div className='card-parent'>
      <div className='educard'>
        <Screenheading title={'Education'} />
      </div>
     
     <Container>
        <Row>
          <Col sm={12} md={12} lg={4} >
            <Carditem cardtitle='SSC🖋️' cardsubtitle='2013' cardtext='KALYANA SUNDARAM HIGHER SECONDARY SCHOOL.' />
          </Col>

          <Col sm={12} md={12} lg={4}>
          <Carditem cardtitle='HSC📖' cardsubtitle='2015' cardtext='KALYANA SUNDARAM HIGHER SECONDARY SCHOOL.' />
          </Col>

          <Col sm={12} md={12} lg={4} >
          <Carditem cardtitle='B.TECH🎓' cardsubtitle='2015 - 2019' cardtext='EEE - SASTRA DEEMED University.' />
          </Col>
        </Row>
     </Container>
  </div>);
};

export default Card;
