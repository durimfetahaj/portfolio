"use client";

import styled from "@emotion/styled";
import React from "react";
import Logo from "../../assets/logo/main.svg";
import Navigation from "./Navigation";

type Props = {};

export default function index({}: Props) {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(50, 50, 50, 0.7);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
`;
