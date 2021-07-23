import React, { Component } from "react";
import CountUp from "react-countup";
import Chat from "./css/chat.css";
import Butoon from "./css/button.css";
import Whatsapp from "./images/2199.png";

import Bkgimage from "./images/whatsapp-background.jpg";
import Buttoncls from "./css/button.css";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="resume-background">
          <div className="resume-content">
            <img className="whatsapp-image" src={Whatsapp} />
            <div className="resume-text">
              <h5>Join our</h5>
              <h1>Whatsapp</h1>
              <h5>Broadcast Group</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="https://api.whatsapp.com/send?phone=971554544115&text=join%20us">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="gooey">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="5"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="highContrastGraphic"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="highContrastGraphic"
                        operator="atop"
                      />
                    </filter>
                  </defs>
                </svg>
                <button id="gooey-button">
                  Join Us
                  <span class="bubbles">
                    <span class="bubble" />
                    <span class="bubble" />
                    <span class="bubble" />
                    <span class="bubble" />
                    <span class="bubble" />
                    <span class="bubble" />
                    <span class="bubble" />
                    <span class="bubble" />
                    <span class="bubble" />
                    <span class="bubble" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
