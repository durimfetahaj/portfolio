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
          Hey, I'm Durim. I am from Kosovo.
        </p>
        <div>
          <p>
            I'm currently a <b>Front-end React developer as a freelancer</b>,
            and in the meantime learning the MERN stack as well.
          </p>
          <hr />
          <p>
            I'm passionate about many creative pursuits, including video-games,
            music, movies and of course, coding. I try to live a healthy
            balanced life-style and I've been doing okay on this as well.
          </p>
          <p>
            I <b>love</b> building for the web. From something as simple as a
            single HTML file – all the way to large Next.js applications. The
            web is incredible. Anyone can become a developer, writer, or creator
            – and no one has to ask for permission. You can just build.
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
  }

  .sc-media-link-item {
    margin-top: 20px;
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
        background-color: rgba(180, 180, 180, 0.1);
      }
    }
  }
`;
