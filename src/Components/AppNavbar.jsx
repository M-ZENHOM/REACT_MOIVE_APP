import {
  Links,
  Logo,
  NLink,
  Nav,
  SearchInput,
  Wrapper,
} from "../Styles/Navbar";
import { useDispatch } from "react-redux";
import { useState, useTransition } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/use-debounce";
import { siteConfig } from "../config/site";
import { fetchSearch } from "../store/slices/moiveSlice";

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

export default AppNavbar;
