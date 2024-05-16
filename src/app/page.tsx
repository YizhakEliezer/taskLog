'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [styleChanged, setStyleChanged] = useState(false);
  const [validEmail, setValidEmail] = useState("");
  const [validButton, setValidButton] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleStyle = () => {
    setClicked(true);
    if (validButton) {
      setStyleChanged(true);
      document.body.style.backgroundColor = '#eee';
      document.querySelector('.main').style.display = 'none';
    } else {
      setValidEmail("email is invalid");
    }
  };

  const valid = (event) => {
    const email = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setValidEmail("");
      setValidButton(true);
    } else {
      setValidEmail("email is invalid");
      setValidButton(false);
    }
  };

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&amp;display=swap" rel="stylesheet"></link>

      <div className="header">
        <i className="fa-solid fa-list-check"></i>
      </div>

      <div className='main'>
        <div className='start-work'>
          <h1>Welcome to your task log</h1>
          <h1>Click "Start" to start working.</h1>
          <input placeholder="enter your name"></input>
          <input placeholder="enter email name" onChange={valid}></input>
          <span className="valid">{validEmail}</span>
          <button onClick={toggleStyle} className={clicked && !validButton ? "erorButton" : ""}>START</button>
        </div>
      </div>
    </div>
  );
}
