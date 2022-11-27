import React from 'react';
import SupportEngine from '../SupportEngine';
import { Magic } from 'magic-sdk';

const { Magic } = require('magic-sdk');
const m = new Magic('API_KEY'); // ✨

import './index.css';

const Home = () => {
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} ></div>
        
        <SupportEngine />
    </div>
  );
}

export default Home;

export const htmlCode = `
<div>
  <div class="nav-container">
  <div class="wrapper">
    <nav>
      <div class="logo">
        <img src="https://i.ibb.co/TmL3rFL/logo.png" alt="Logo - A doctor infront of a computer.">
        <a href="#">proaid</a>
      </div>
      <ul class="nav-items">
        <li>
          <a href="sub1/login_page.html">Log In</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  </div>
  </div>

  <div class="header-container">
  <div class="wrapper">
    <header>
      <div class="bird-image">
        <img src="https://i.ibb.co/8K2W0dr/logo-birds.png" alt="Illustration - A nest containing birds.">
      </div>
      
      <div class="bird-content">
        <h1>A doctor’s right-hand</h1>
        <p>proaid, your virtual close assistant,
          is a tool to rely on.</p>
      </div>
    </header>
  </div>
  </div>

  <div class="footer-container">
  <div class="wrapper">
    <footer>
      <div class="motto-content">
        <h1>Do it all</h1>
        <p>Organize your schedule,
          set an appointment and contact your
          patients faster—all from a single platform
        </p>
      </div>
    </footer>
  </div>
  </div>


  <div class="chatbox">
  <div class="chatbox__support">
      <div class="chatbox__header">
        I’m Proaid Assistant. Ask me anything.
      </div>
      <div class="messages">
          <div>
              <div class="messages__bot">
                <p>Have a question? What can I help with?</p>    
              </div>
          </div>
      </div>
      <div class="chatbox__footer">
          <input type="text" placeholder="Message...">
      </div>
  </div>
  </div>

</div>
`

