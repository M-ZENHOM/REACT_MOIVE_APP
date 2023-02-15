import { NavLogo, NLink, SearchForm, SearchInput } from "../Styles/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchSearch } from "../RTK/slices/moiveSlice";
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const HandleSearch = (e) => {
    setValue(e.target.value);
  };
  const Seacrh = () => {
    if (value !== "") {
      dispatch(fetchSearch(value));
      setValue("");
      navigate("/search");
    }
  };

  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#1a1a42" }}>
      <Container fluid>
        <NavLogo className="navbar-brand" to="/">
          REACT MOIVES
        </NavLogo>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "#fff" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <NLink className="nav-link" to="/trending" disabled>
              TRENDING
            </NLink>
            <NLink className="nav-link" to="/tvseries" disabled>
              TVSERIES
            </NLink>
            <NLink className="nav-link" to="/allmovies" disabled>
              MOVIES
            </NLink>
          </Nav>
          <SearchForm className="d-flex">
            <SearchInput
              type="text"
              placeholder="Search Movies"
              value={value}
              onChange={(e) => HandleSearch(e)}
            />
            <Button onClick={() => Seacrh()} variant="outline-success">
              Search
            </Button>
          </SearchForm>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
