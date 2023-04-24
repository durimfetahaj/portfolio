import { IconButton } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

type Props = {};

export default function index({}: Props) {
  return (
    <Wrapper>
      <IconButton LinkComponent={Link} href="/">
        Home
      </IconButton>
      <IconButton LinkComponent={Link} href="/work">
        Work
      </IconButton>
      <IconButton LinkComponent={Link} href="/contact">
        Contact
      </IconButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  a {
    color: inherit;
    font-size: 18px;
    font-weight: 700;
  }
`;
