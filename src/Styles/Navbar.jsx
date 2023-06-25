import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 4px 10px;
  }
`;
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
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 250px;
  }
`;
export const SearchForm = styled(Form)`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1200px) {
    margin: 20px auto;
  }
  @media (max-width: 640px) {
    width: 320px;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SignOutBtn = styled.button`
  outline: none;
  border: none;
  padding: 5px 10px;
  background-color: ${(props) => props.color};
  transition: 0.8s;
  color: white;
  border-radius: 6px;
  &:hover {
    background-color: ${(props) => props.Hovercolor};
    transition: 0.8s;
  }
`;
export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  transition: 0.8s;
  color: white;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;
