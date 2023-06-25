import { NLink } from "../Styles/Navbar";
import { useDispatch } from "react-redux";
import { useState, useTransition } from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/use-debounce";
import { siteConfig } from "../config/site";
import { fetchSearch } from "../store/slices/moiveSlice";
import styled from "styled-components";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const [isPending, startTransition] = useTransition();
  const Seacrh = () => {
    if (debouncedValue !== "") {
      startTransition(() => {
        dispatch(fetchSearch(debouncedValue));
        setValue("");
        navigate({
          pathname: "/search",
          search: `?${createSearchParams(debouncedValue)}`,
        });
      });
    }
  };

  return (
    <Nav>
      <Wrapper>
        <Logo to="/"> {siteConfig.name}</Logo>
        <Links>
          {siteConfig.mainNav.map((nav) => (
            <NLink className="nav-link" to={nav.href} disabled>
              {nav.title}
            </NLink>
          ))}
        </Links>
        <SearchInput
          type="text"
          placeholder="Search Movies"
          defaultValue={debouncedValue}
          onChange={(e) => setValue(e.target.value)}
          onClick={Seacrh()}
          disabled={isPending}
        />
      </Wrapper>
    </Nav>
  );
};

const Wrapper = styled.div`
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

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1a1a42;
  padding: 8px 0;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    padding: 12px 0;
  }
`;
const Logo = styled(Link)`
  font-size: 24px;
  color: #fff;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin: 6px 0;
  }
`;

const SearchInput = styled.input`
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

export default AppNavbar;
