import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  SocialNetworkWrapper,
  SocialNetworkIconSection,
  DateTimeSection,
} from "./SocialNetwork.style";
import moment from "moment";

interface SocialNetworkProps {}

const today = moment();
const currentDateTime = today.format("MMMM Do YYYY");

const SocialNetwork: React.FC<SocialNetworkProps> = () => {
  return (
    <SocialNetworkWrapper>
      <SocialNetworkIconSection>
        <SocialIcon
          network="instagram"
          style={{ width: 30, height: 30 }}
          url="https://www.instagram.com/_tn_quang"
        />
        <SocialIcon
          network="github"
          style={{ width: 30, height: 30, margin: "0 2px" }}
          url="https://github.com/nhatquangta2911"
        />
        <SocialIcon
          network="linkedin"
          style={{ width: 30, height: 30 }}
          url="https://www.linkedin.com/in/nhatquangta2911"
        />
      </SocialNetworkIconSection>
      <DateTimeSection>{currentDateTime}, Shawn TA</DateTimeSection>
    </SocialNetworkWrapper>
  );
};

export default SocialNetwork;
