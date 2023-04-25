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
  "/work": {
    name: "work",
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
  min-width: 100%;

  svg {
    margin-bottom: 10px;
    margin-left: 10px;
  }

  nav {
    display: flex;
    gap: 10px;
    font-weight: 600;

    @media (min-width: 770px) {
      flex-direction: column;
    }

    a {
      all: unset;
      display: flex;
      align-items: center;
      justify-content: center;
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
