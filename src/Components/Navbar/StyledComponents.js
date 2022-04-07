import styled from "styled-components";

export const Container = styled.nav`
  padding: 10px;
  height: 50px;
`;

export const HamBurger = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 7px;
  width: 50px;
  cursor: pointer;

  & > span {
    background-color: #fff;
    border-radius: 10px;
    height: 7px;
    transition: 400ms cubic-bezier(0.68, -0.6, 0.32, 1.6);

    &:nth-of-type(1) {
      width: 50%;
    }
    &:nth-of-type(2) {
      width: 100%;
    }
    &:nth-of-type(3) {
      width: 75%;
    }
  }

  &.active {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1;

    & > span {
      &:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotateZ(45deg) translate(8px, 0px);
      }
      &:nth-of-type(2) {
        transform-origin: top;
        transform: rotateZ(-45deg);
      }
      &:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(25px, -11px) rotateZ(45deg);
      }
    }
  }
`;

export const NavList = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: hsl(0, 0%, 0%, 0.8);
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  transform: translateX(-100vw);
  transition: transform 800ms ease-in-out;

  &.active {
    transform: translateX(0);
  }
`;

export const NavItem = styled.li`
  width: 20%;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  padding: 0.5rem;
  outline: 2px solid currentColor;
  position: relative;
  isolation: isolate;
  transition: color 300ms linear;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: top right;
    transition: transform 300ms linear;
  }

  &:hover,
  &.active {
    color: #4c23e8;

    &::after {
      transform: scaleX(1);
      transform-origin: top left;
    }
  }
`;
