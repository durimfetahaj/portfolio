import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import LinkedinIcon from "../../../assets/icons/global/linkedin-icon.svg";
import TwitterIcon from "../../../assets/icons/global/twitter-icon.svg";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function index() {
  return (
    <Wrapper>
      <IconButton
        LinkComponent={"a"}
        href="https://github.com/durimf"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        LinkComponent={"a"}
        href="https://www.linkedin.com/in/durimfetahaj/"
        target="_blank"
      >
        <LinkedinIcon />
      </IconButton>
      <IconButton
        LinkComponent={"a"}
        href="https://twitter.com/FetahajDurim"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 50px;

  a {
    color: #959595;
  }
`;
