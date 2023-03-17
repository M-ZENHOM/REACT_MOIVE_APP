import {
  ImgContainer,
  NavLogo,
  NLink,
  SearchForm,
  SearchInput,
  SignOutBtn,
  UserImg,
} from "../Styles/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { fetchSearch } from "../RTK/slices/moiveSlice";
import { useNavigate } from "react-router-dom";
import useFirebaseAuth from "../utils/useFirebaseAuth";
import { Overlay, Tooltip } from "react-bootstrap";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const { GoogleAuthHandler } = useFirebaseAuth();
  const { name, photo } = useSelector((state) => state.user);
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
    <>
      {name && (
        <Navbar expand="xl" sticky="top" style={{ backgroundColor: "#1a1a42" }}>
          <Container fluid>
            <NavLogo className="navbar-brand" to="/">
              REACT MOIVES
            </NavLogo>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              style={{ backgroundColor: "#fff" }}
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className=" me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
              >
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
              <SearchForm>
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
              <ImgContainer>
                <UserImg
                  ref={target}
                  onClick={() => setShow(!show)}
                  className="useImg"
                  src={photo}
                  alt=""
                />
                <Overlay target={target.current} show={show} placement="bottom">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      <SignOutBtn
                        color="#880b0b"
                        Hovercolor="red"
                        onClick={GoogleAuthHandler}
                      >
                        Signout
                      </SignOutBtn>
                    </Tooltip>
                  )}
                </Overlay>
              </ImgContainer>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default AppNavbar;
