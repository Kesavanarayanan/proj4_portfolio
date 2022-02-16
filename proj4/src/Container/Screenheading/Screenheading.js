import React from 'react';
import './Screenheading.css';

const Screenheading = (props) => {
  return (
    <div className='heading-container'>
       <div className='screen-heading'>
           <span>{props.title}</span>
       </div>
      
       {props.subtitle ? (
            <div className='screen-sub-heading'>
                   <span>{props.subtitle}</span>
            </div>) : (
                
            <div></div>
            )}

       <div className='heading-seperator'>
        <div className='seperator-line'>
            <div className='seperator-bulb'>
                 <div></div>               
             </div>                
         </div>                 
      </div>      
      
     
     
</div>);
};

export default Screenheading;