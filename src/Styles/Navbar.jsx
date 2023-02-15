import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const NavLogo = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;

  &.navbar-brand:hover,
  &.navbar-brand:focus {
    color: #fff;
  }
`;
export const NLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  &:hover {
    color: #fff;
  }
  &.nav-link.active {
    color: #fff;
    text-decoration: underline;
  }
`;

export const SearchInput = styled.input`
  width: 500px;
  padding: 5px;
  outline: none;
  border-radius: 6px;
  margin-right: 10px;
  @media (max-width: 640px) {
    width: 250px;
  }
`;
export const SearchForm = styled(Form)`
  @media (max-width: 640px) {
    margin-top: 20px;
  }
`;
