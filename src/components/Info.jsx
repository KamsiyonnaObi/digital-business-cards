import React from 'react';
import profile from '../assets/kamsisq.png';
import { AiFillMail, AiFillLinkedin } from 'react-icons/ai';

const Info = () => {
  return (
    <div className="">
      <div className="container--img">
        <img src={profile}/>
      </div>
      <div className="container--info">
        <h2>Kamsiyonna Obi</h2>
        <h4>Full Stack Developer</h4>
        <p>www.kamsiyonna.site</p>
      </div>
      <div className="container--btns">
        <button className="container--btn_email"type="button">
          <AiFillMail />
          Email
        </button>
        <button className="container--btn_linkedin"type="button">
          <AiFillLinkedin />
          LinkedIn
       </button>
      </div>
    </div>
  )
}

export default Info