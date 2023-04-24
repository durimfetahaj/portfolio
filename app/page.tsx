"use client";
import IconButton from "@mui/material/Button";
import styled from "@emotion/styled";
import EnvelopeIcon from "./assets/icons/global/envelope-icon.svg";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>Hi, I am Durim A Front-end developer based in Kosovo.</h1>
          <p>
            I help businesses and companies reach their goals by developing
            user-centric digital products & interactive experiences.
          </p>
          <IconButton
            color="primary"
            startIcon={<EnvelopeIcon />}
            variant="contained"
            LinkComponent={"a"}
            href="mailto: durim.dev@gmail.com"
          >
            durim.dev@gmail.com
          </IconButton>
        </Grid>
        <Grid xs={12} md={6} className="image-cnt">
          <img src="/images/me.png" alt="me" />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -0.5px;
    text-align: left;
    margin-bottom: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.5px;
    text-align: left;
    margin-bottom: 65px;
    color: #959595;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 48px;
    background: #9d9d9d;
    gap: 10px;
    max-width: 400px;
    font-size: 17px;
    text-transform: none;

    &:hover {
      background: #9d9d9d;
      opacity: 0.9;
    }
  }

  img {
    width: 400px;
    height: 400px;
    border-radius: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
  }
`;

export default Home;
