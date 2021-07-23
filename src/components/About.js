import React, { Component } from "react";
import Aboutus from "./css/aboutus.css";
import Watchos from "./images/watchos.gif";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <h1>About Us</h1>
        <div className="About-us">
          <div className="modile-area">
            <img src="https://cloud.ihgorg.com/product-master/img/original/neww.gif" />
            <div className="aboutus-text">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
          </div>
          <div className="modile-area">
            <img src={Watchos} />
            <div className="aboutus-text">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
