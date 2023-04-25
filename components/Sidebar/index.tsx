import styled from "@emotion/styled";
import React from "react";
import Logo from "@/assets/logo/main.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
};

export default function Sidebar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/about/")) {
    pathname = "/about";
  }

  return (
    <Wrapper>
      <div className="logo">
        <Logo />
      </div>
      <nav>
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <Link
              key={path}
              href={path}
              className={isActive ? "active" : "not-active"}
            >
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 70px;

  svg {
    margin-bottom: 20px;
    margin-left: 10px;
  }

  nav {
    display: flex;
    gap: 10px;
    font-weight: 700;

    @media (min-width: 600px) {
      flex-direction: column;
    }

    a {
      all: unset;
      color: #737373;
      cursor: pointer;
      padding: 8px;
      &:hover {
        color: #fff;
      }
    }

    .active {
      color: #fff;
      background: rgba(180, 180, 180, 0.1);
      border-radius: 6px;
    }
  }
`;
