import React from 'react';
import './Introduce.scss';
import avatar from './assets/avatar.jpg';

function Introduce() {
  return (
    <div className="Introduce">
      <img className="Avatar" src={avatar} alt="useravatar" />
      <h1>HELLO,</h1>
      <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      <hr></hr>
    </div>
  );
}

export default Introduce;
