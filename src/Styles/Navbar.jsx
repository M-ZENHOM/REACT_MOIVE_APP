import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 7px;
  color: #fff;
  &:hover {
    color: #fff;
  }
  &.nav-link.active {
    color: #fff;
    text-decoration: underline;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a42;
  padding: 8px 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    padding: 14px 0;
  }
`;
export const Logo = styled(Link)`
  font-size: 24px;
  color: #fff;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin: 6px 0;
  }
`;

export const SearchInput = styled.input`
  background-color: #fff;
  padding: 5px;
  width: 300px;
  border: none;
  outline: none;
  transition: 0.5s;
  border-radius: 6px;
  &:hover,
  &:focus {
    border: 2px solid blue;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
`;
