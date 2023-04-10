

import React from 'react';
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <p className="icons">          
        <a 
          href='https://www.linkedin.com/in/kamsiyonna-obi-50a020167/' 
          target="_blank"
          >
            <AiFillLinkedin />
        </a>
        <a 
          href='https://github.com/KamsiyonnaObi' 
          target="_blank">
            <AiFillGithub />
        </a>
      </p>
    </div>
  )
}

export default Footer