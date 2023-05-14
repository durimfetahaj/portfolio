"use client";
import styled from "@emotion/styled";
import { projects } from "../lib/dummy";
import ProjectCard from "./ProjectCard";

export default function About() {
  return (
    <Wrapper>
      <h1>Projects</h1>
      <ProjectCard projects={projects} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h1 {
    margin-bottom: 20px;
  }
`;
