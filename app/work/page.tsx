"use client";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function About() {
  return (
    <Wrapper>
      <h1>My Work</h1>
      <Grid>
        <Grid>
          <Grid item xs={12} md={6} className="card">
            <div className="layer" />
            <a rel="noopener noreferrer" target="_blank" href="#">
              <div className="content">
                <BsBoxArrowUpRight />
                <div>View Demo</div>
              </div>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    margin-bottom: 20px;
  }

  .card {
    height: 400px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url(/images/a_plus_cover.png);
    background-size: cover;

    .layer {
      background-color: rgba(38, 38, 38, 0.3);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }

    a {
      all: unset;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      cursor: pointer;
      bottom: 10px;
      left: 10px;
      background-color: rgba(38, 38, 38, 0.3);
      color: white;
      border-radius: 6px;
      width: 200px;
      height: 40px;

      &:hover {
        background-color: rgba(38, 38, 38, 0.5);
      }

      .content {
        display: flex;
        align-items: center;

        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
