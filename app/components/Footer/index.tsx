"use client";

import styled from "@emotion/styled";
import React from "react";
import SocialMedia from "./SocialMedia";

export default function index() {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <p>
        Made by {""}
        <span>Durim</span> — Copyright {year}
      </p>
      <div className="">
        <SocialMedia />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 50px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #696969;

  p {
    font-size: 16px;
    font-weight: 600;
    color: #959595;

    span {
      color: #fff;
    }
  }
`;
