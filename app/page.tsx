"use client";
import Link from "next/link";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Wrapper>
      <h1>Main</h1>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Home;
