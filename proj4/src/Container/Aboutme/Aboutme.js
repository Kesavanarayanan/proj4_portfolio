import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Screenheading from '../Screenheading/Screenheading';
import './Aboutme.css';

const Aboutme = (props) => {
 
  const SCREEN_CONTENTS ={
     description: "Hello, This is Kesav. I am so interested in Front End Developing. In order to enhance the skills, I have been learning HTML, CSS, Javascript, Bootstrap, SASS and React. I am Creating Responsive Websites that can be displayed in all devices such as Desktops and SmartPhones. I have also completed couple of Projects in using React. I can Fulfill the expectation in Technical and also designing part. Finally, I am eagerly waiting to work in your company if the offer is provided. I would expose my full potential and commitment to the work that is assigned and wants to be a friendly addition to your team. ",
     highlights : {
        bullets : [
           "Front End web developer",
           "Interactive Front End as per the design",
           "React",
        ],
     heading:"Here are a Few Highlights:"
     }
   }
  
   const renderHighlight =() =>{
      return(
         SCREEN_CONTENTS.highlights.bullets.map((value,i) => (
            <div className='highlight' key={i}>
               <div className='highlight-bulb'></div>
               <span>{value}</span>
            </div>
         ) )
      )
   }

   return (
      <div className='aboutme-container screen-container'>
         <div className='aboutme-parent'>
            <Screenheading title={'About Me'} subtitle={'Why Choose Me?'}/>
            <Container className='container2'>
               <Row>
                  <Col className='about-me-profile ' xs={12} sm={12} md={6} lg={6} xl={6} xll={6}>
                    <div></div>
                  </Col>

                  <Col className='about-me-profile2' xs={12} sm={12} md={6} lg={6} xl={6} xll={6}>
                     <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONTENTS.description}</span>
                        <div className='about-me-highlights'>
                           <div className='highlight-heading'>
                               <span>{SCREEN_CONTENTS.highlights.heading}</span>
                           </div>
                           {renderHighlight()}
                        </div>
                        <div className='about-option'>
                         <Button className="btn primary-btn" href="/Contactsm" variant="success">Hire Me</Button>{' '}
                         <a href='#' download='myresume.pdf'>
                         <Button className="btn highlighted-btn" variant="warning">Get Resume</Button>{' '}
                         </a>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
      
  );
};

export default Aboutme;
