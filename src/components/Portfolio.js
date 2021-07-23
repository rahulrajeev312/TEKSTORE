import React, { Component } from "react";
import InstagramEmbed from "react-instagram-embed";
import "./css/portfolio.css";
import GrServices from "react-icons/fa";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <h7>What We Do !</h7>
        <div className="Service-Area">
          <div className="services">
            <img src="https://img.icons8.com/ios/452/services--v1.png" />
            <h4>Mobile Repairing</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="services">
            <img src="https://img.icons8.com/ios/452/services--v1.png" />
            <h4>Mobile Sales</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="services">
            <img src="https://img.icons8.com/ios/452/services--v1.png" />
            <h4>Computer Services</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="services">
            <img src="https://img.icons8.com/ios/452/services--v1.png" />
            <h4>Mobile Accessories</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="services">
            <img src="https://img.icons8.com/ios/452/services--v1.png" />
            <h4>Home Accessories</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </section>
    );
  }
}
