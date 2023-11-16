import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { DataContext } from "../contexts/DataContexts";
import imgNabar from "../assets/logopizza.svg";

const Navbarapp = () => {
  const { TotalPrice } = useContext(DataContext);

  const setActiveClass = ({ isActive }) =>
    isActive ? "text-warning mt-2 pe-2 text-decoration-none" : "text-white mt-2 pe-2 text-decoration-none";

  return (
    <Navbar expand="lg" className="bg-dark align-self-center">
      <Container className="f-flex">
        <NavLink to="/" className="navbar-brand text-white d-flex">
          <img src={imgNabar} className="imgNabar" alt="pizza" />
          <Nav>
            <div className={setActiveClass}>
              Pizzeria Mamma Mia!
            </div>
          </Nav>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <NavLink to="/Cart" className={setActiveClass}>
            <div className="">
              <div>
                {TotalPrice ? <h5>Monto: ${TotalPrice.toLocaleString("es-CL")}</h5> : null}
              </div>
            </div>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbarapp;
