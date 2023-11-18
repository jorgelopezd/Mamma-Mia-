import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { PizzaContext } from "../contexts/DataContexts";

export default function NavbBar() {
  const { totalPrice } = useContext(PizzaContext);

  return (
    <div>
      <Navbar className="Navstyle">
        <Container>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            {" "}
            🍕 Pizzería Mamma Mia!
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            {" "}
            $ {totalPrice} 🛒
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
}
