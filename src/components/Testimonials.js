import React, { Component } from "react";
import ajmalkhan from "./images/ajmalkhan.jpg";
import jumanakhan from "./images/jumanakhan.jpg";
import omarlulu from "./images/omarlulu.jpg";
import "./css/testmonial.css";
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <h7 className="heading">Client Reviews</h7>

        <div className="clients">
          <div className="client-data">
            <img src={ajmalkhan} />
            <h1 class="animate__animated animate__bounce">Ajmal Khan</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="client-data">
            <img src={jumanakhan} />
            <h1 class="animate__animated animate__bounce" color="#f06000">
              Jumana Khan
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="client-data">
            <img src={omarlulu} />
            <h1 class="animate__animated animate__bounce">Omar Lulu</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </section>
    );
  }
}
