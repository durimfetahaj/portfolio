"use client";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <Wrapper>
      <section>
        <h1>About Me</h1>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Hey, I'm Durim.
        </p>
        <div>
          <p>
            I'm a <b>passionate front-end developer </b> with some experience. I
            specialize in creating beautiful and responsive websites using
            modern technologies like React, Next, Mui, and JavaScript.
          </p>
          <hr />
          <p>
            I have an eye for design and always strive to create visually
            appealing and user-friendly interfaces. When I'm not coding, you can
            find me exploring the great outdoors or gaming.
          </p>
          <p>
            I am <b>dedicated </b>
            to constantly improving my skills and staying up-to-date with the
            latest trends in the industry. Let's work together to bring your
            digital vision to life!"
          </p>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3} className="sc-media-link-item">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/FetahajDurim"
              >
                <div className="left">
                  <FaTwitter />
                  <div>Twitter</div>
                </div>
                <FiArrowUpRight />
              </a>
            </Grid>
            <Grid item xs={12} md={3} className="sc-media-link-item">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/durimf"
              >
                <div className="left">
                  <FaGithub />
                  <div>GitHub</div>
                </div>
                <FiArrowUpRight />
              </a>
            </Grid>
            <Grid item xs={12} md={3} className="sc-media-link-item">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/@leerob"
              >
                <div className="left">
                  <FaLinkedin />
                  <div>LinkedIn</div>
                </div>
                <FiArrowUpRight />
              </a>
            </Grid>
          </Grid>
        </div>
      </section>
    </Wrapper>
  );
}

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
