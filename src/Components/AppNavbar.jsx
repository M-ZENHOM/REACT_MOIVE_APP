import {
  NavLogo,
  NLink,
  SearchForm,
  SearchInput,
  Wrapper,
} from "../Styles/Navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { useState, useTransition } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
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
    <Navbar expand="xl" sticky="top" style={{ backgroundColor: "#1a1a42" }}>
      <Wrapper>
        <NavLogo className="navbar-brand" to="/">
          {siteConfig.name}
        </NavLogo>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "#fff" }}
        />
        <NavContainer>
          <Nav className=" me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            {siteConfig.mainNav.map((nav) => (
              <NLink className="nav-link" to={nav.href} disabled>
                {nav.title}
              </NLink>
            ))}
          </Nav>
          <SearchForm>
            <SearchInput
              type="text"
              placeholder="Search Movies"
              defaultValue={debouncedValue}
              onChange={(e) => setValue(e.target.value)}
              onClick={Seacrh()}
              disabled={isPending}
            />
          </SearchForm>
        </NavContainer>
      </Wrapper>
    </Navbar>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* @media (max-width:768px) {
    
  } */
`;

export default AppNavbar;
