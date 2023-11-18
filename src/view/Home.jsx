import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { PizzaContext } from "../contexts/DataContexts";

export default function Home() {
  const { pizzas, addToCart, setPizzaArray, setTotalPrice } =
    useContext(PizzaContext);

  return (
    <div>
      <header className="header text-center">
        <h1>¡Pizzería Mamma Mia!</h1>
        <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
      </header>

      <Container>
  <div className="row">
    {pizzas.map((pizza) => (
      <div className="col-md-3 mb-4" key={pizza.id}>
        <Card className="m-1 p-2">
          <Card.Img src={pizza.img} />

          <Card.Body>
            <Card.Title className="text-capitalize text-center">
              {pizza.name}
            </Card.Title>
            <hr />
            <ListGroup className="list-group-flush p-3 text-center text-decoration-underline">
              Ingredientes
            </ListGroup>

            {pizza.ingredients.map((ingredient, index) => (
              <ListGroup.Item key={index} className="text-capitalize">
                🍕 {ingredient}
              </ListGroup.Item>
            ))}

            <hr />

            <ListGroup className="m-1 p-1 text-center">
              <h4>Precio: $ {pizza.price}</h4>
            </ListGroup>

            <Card.Body>
              <NavLink to={`/pizza/${pizza.id}`}>
                <Button className="btn-sm">Ver más 👀</Button>
              </NavLink>
              <Button
                className="btn btn-sm btn-danger m-2 px-3"
                onClick={() => {
                  addToCart(pizza.id);
                  setTotalPrice(setPizzaArray(pizza.id));
                }}
              >
                Añadir 🛒
              </Button>
            </Card.Body>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</Container>

    </div>
  );
}
