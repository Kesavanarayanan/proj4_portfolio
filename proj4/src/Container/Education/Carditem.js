import React from 'react';
import { Card } from 'react-bootstrap';
import './Card.css'

const Carditem = (props) => {
  return (
   <div>
    <Card className='card-img'>
  <Card.Body className='card-body ml-md-4 ml-lg-1 ml-xl-1 ml-xxl-1' >
    <Card.Title className='card-title'>{props.cardtitle}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted card-subtitle">{props.cardsubtitle}</Card.Subtitle>
    <Card.Text className='card-text'>
    {props.cardtext}
    <p>Thanjavur, TamilNadu.</p>
    </Card.Text>
  </Card.Body>
</Card>
   </div>);
};

export default Carditem;
