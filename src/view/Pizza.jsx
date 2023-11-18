import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../contexts/DataContexts";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

export default function PizzaDescription() {
  const params = useParams();
  const { pizzas, addToCart, setPizzaArray, setTotalPrice } =
    useContext(PizzaContext);
  const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id);
  const pizza = getPizzaById(params.id);

  return (
    <div>
      <Container>
        <Card className=" card-container text-center mb-4 d-flex flex-row align-items-center">
          <Card.Img variant="top" className="pizza-detail m-1 p-1" src={pizza.img} />

          <div className="flex-grow-1">
            <Card.Title className="text-uppercase text-start m-2">{pizza.name}</Card.Title>

            <Card.Text className="descripcion-pizza text-start">{pizza.desc}</Card.Text>

            <ListGroup className="list-group-flush text-capitalize pb-3 pt-3">
              <h5> Ingredientes </h5>
              {pizza.ingredients.map((ingredient, index) => (
                <ListGroup.Item
                  key={index}
                  className="list-group-flush text-capitalize text-start m-2"
                >
                  🍕 {ingredient}
                </ListGroup.Item>
              ))}
            </ListGroup>

            <ListGroup className="list-group-flush pb-4 mb-4 text-start">
              <h4> Precio: $ {pizza.price}</h4>
            </ListGroup>
          </div>

          <div className="ml-auto">
            <Button
              className="btn btn-danger px-3"
              onClick={() => {
                addToCart(pizza.id);
                setTotalPrice(setPizzaArray(pizza.id));
              }}
            >
              Añadir 🛒
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
