import React, { Component } from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
import Text from "./css/text.css";
import { SiInstagram } from "react-icons/si";
class test1 extends Component {
  render() {
    return (
      <section id="test">
        <h7>
          Instagram Feeds <SiInstagram />
        </h7>
        <InstagramFeed
          token="IGQVJYenhvUmV1TnA5S2FhbUVNY1g5MmpiMkZA2dHlKek41YUJZAUmp5cHhZAUGZA0OXZATR0dvTkVhV3N2WWtGXzN4SUgtdFlDM3hGNmppbXJsODdRSHR2RzFlUTA1aGlBbC1SUVFMWFVySEdCV1lqUFdBWQZDZD"
          counter="6"
        />
      </section>
    );
  }
}

export default test1;
