import { NLink, Wrapper } from "../Styles/Navbar";
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
    <Nav>
      <Wrapper>
        <Logo> {siteConfig.name}</Logo>
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

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1a1a42;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 12px 0;
  }
`;
const Logo = styled.div`
  font-size: 24px;
  color: #fff;
`;
const Links = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  background-color: #fff;
  color: white;
  padding: 5px;
  width: 200px;
  border: none;
  outline: none;
  transition: 0.5s;
  &:hover,
  &:focus {
    border: 1px solid blue;
  }
`;

export default AppNavbar;
