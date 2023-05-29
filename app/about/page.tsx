"use client";

import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const AboutPage = () => {
  return (
    <Wrapper>
      <section>
        <h1>About Me</h1>
        <p>
          Hey, I'm Durim, a passionate front-end developer with a focus on
          creating beautiful and responsive websites. With a solid foundation in
          technologies like React, Next.js, Material-UI, and JavaScript, I bring
          a blend of technical expertise and design sensibility to every
          project.
        </p>
        <div>
          <p>
            I have a keen eye for design and always strive to create visually
            appealing and user-friendly interfaces. From crafting seamless user
            experiences to implementing modern design trends, I am committed to
            delivering high-quality websites that captivate and engage users.
          </p>
          <hr />
          <p>
            Aside from coding, I find joy in exploring the great outdoors, gym
            and gaming. These experiences fuel my creativity and inspire me to
            think outside the box when approaching new projects.
          </p>
          <p>
            As an eager learner, I am dedicated to continuously improving my
            skills and staying up-to-date with the latest industry trends. I
            actively seek opportunities to expand my knowledge and embrace new
            technologies to ensure that my work remains at the forefront of
            innovation.
          </p>
          <p>
            Let's collaborate and bring your digital vision to life! Whether
            you're looking to create a stunning website, develop an interactive
            web application, or revamp your existing online presence, I'm here
            to turn your ideas into reality.
          </p>

          <Grid container spacing={2}>
            {socialLinks.map((link) => (
              <Grid
                item
                xs={12}
                md={3}
                className="sc-media-link-item"
                key={link.name}
              >
                <a rel="noopener noreferrer" target="_blank" href={link.url}>
                  <div className="left">
                    {link.icon}
                    <div>{link.name}</div>
                  </div>
                  <FiArrowUpRight />
                </a>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    max-width: 600px;
    margin-bottom: 20px;
  }

  p {
    line-height: 25px;
    margin-bottom: 10px;
    max-width: 600px;
    margin-bottom: 20px;
  }

  hr {
    border-color: #737373;
    border-top-width: 1px;
    margin: 48px 0px;
    max-width: 90%;
  }

  .sc-media-link-item {
    a {
      all: unset;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid rgb(38, 38, 38);
      border-radius: 8px;
      padding: 16px;
      cursor: pointer;

      .left {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      svg {
        font-size: 20px;
      }

      &:hover {
        border-color: #fff;
      }
    }
  }
`;

const socialLinks = [
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/FetahajDurim",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/durimfetahaj",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/durimfetahaj/",
  },
];

export default AboutPage;
