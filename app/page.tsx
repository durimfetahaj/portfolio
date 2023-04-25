"use client";
import styled from "@emotion/styled";
import { name, about, bio, avatar } from "@/app/lib/info";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <Wrapper>
      <section>
        <h1>{name}</h1>
        <p>{about()}</p>
        <div className="img-cnt">
          <img alt={name} src="images/me.png" />
        </div>
        <p>{bio()}</p>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/FetahajDurim"
            >
              <FiArrowUpRight />
              <p>check me on linkedin</p>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/durimf"
            >
              <FiArrowUpRight />
              <p>check me on github</p>
            </a>
          </li>
        </ul>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-size: 30px;
      line-height: 36px;
      font-weight: 700;
      max-width: 600px;
    }

    p {
      line-height: 25px;
      margin-bottom: 10px;
      max-width: 600px;
    }
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0px;

      @media (min-width: 770px) {
        flex-direction: row;
        gap: 20px;
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #a3a3a3;

      &:hover {
        color: #fff;
      }

      p {
        margin-bottom: 0px;
        font-size:14px;
      }

      svg {
        height: 12px
        width: 12px;
        margin-right: 5px;
      }
    }
  }
`;

export default Home;
