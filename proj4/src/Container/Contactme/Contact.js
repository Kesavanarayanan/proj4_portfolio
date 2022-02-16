import React, {useState} from 'react';
import Typical from 'react-typical';
import axios from 'axios';
import {toast} from 'react-toastify';
import './Contact.css';
import Screenheading from '../Screenheading/Screenheading';
import {Container, Row, Col} from 'react-bootstrap';
import load1 from './load2.gif';

const Contact = () => {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName =(e) => {
    setName(e.target.value);
  };
  const handleMail =(e) => {
    setMail(e.target.value);
  };
  const handleMessage =(e) => {
    setMessage(e.target.value);
  };
console.log(name);


const submitForm = async (e) =>{
 
  e.preventDefault();

  try {
    let data={
      name,
      mail, 
      message,
    };

    setBool(true)

    const res= await axios.post('/contact' , data);
    if(name.length === 0 || mail.length === 0 || message.length === 0){
      setBanner(res.data.msg);
      toast.error(res.data.msg);
      setBool (false);
    }else if (res.status=== 200) {
      setBanner(res.data.msg);
      toast.success(res.data.msg);
      setBool (false);

      setName("");
      setMail("");
      setMessage("");
    }
  } 
  
  catch (error) {
    console.log(error)
  }
}

  return (
  <div className='contactme-container'>
     <div className='contact-parent'>
       <Screenheading title={'Contact Me'} subtitle={'Lets Keep In Touch'} />
     </div>
  
     <div>
      <Container className='contactme-part'>
      <Row >
          <Col xs={12} s={12} md={5} lg={5} className='contactme-part1'>
          <p>
              <Typical 
                   loop={Infinity}
                   steps={["Get in Touch 🤝 ",2000,
                            "Email Me 📧",2000,]} />
           </p>
            <h1>Thank You</h1>
          </Col>

          <Col xs={12} s={12} md={7} lg={7} className='contactme-part2' >
          <p  className='contactme-line1'>Send Your Email Here:</p>
          <div>
          <form className='contact-form' onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor='name'>Name</label>
            <input type='text' onChange={handleName} value={name} />
            <br/>

            <label htmlFor='email'>Email</label>
            <input type='email' onChange={handleMail} value={mail} />
            <br/>

            <label htmlFor='message'>Message</label>
            <textarea type='text' onChange={handleMessage} value={message} />
            <br/>
            <div className='send-btn'>
              <button type='submit'>
                 Send<i className='fa fa-paper-plane' />
                 {bool?(<b className='load'>
                   <img src={load1} alt='image not responding' />

                 </b>):("")}
              </button>
            </div>
          </form>
          </div>

          </Col>
        </Row>
      </Container>
  
  </div>

  </div>


  );
};

export default Contact;
