
import { useContext } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { PizzaContext } from "../contexts/DataContexts";

export default function ShoppingCart() {
  const {
    setCart,
    addToCart,
    removePizza,
    totalPrice,
    setTotalPrice,
    addedPizza,
    setPizzaArray,
  } = useContext(PizzaContext);

  let list = [];
  let count = 1;

  const cartList = () => {
    for (let i = 0; i < addedPizza.length; i++) {
      let index = addedPizza[i];

      if (index === addedPizza[i + 1]) {
        count++;
      } else {
        const newCartList = {
          id: index.id,
          name: index.name,
          price: index.price,
          img: index.img,
          count: count,
          result: count * index.price,
        };

        list.push(newCartList);
        count = 1;
      }
    }
  };

  cartList();
  setCart(addedPizza);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Referencia</th>
            <th>Nombre de Pizza</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {list.map((pizza) => (
            <tr>
              <td className="pizzaCart">
              <img src={pizza.img} className="img.pizza.cart img-fluid" alt="" />
              </td>
              <td>{pizza.name}</td>
              <td>${pizza.result}</td>
              <td>
                {" "}
                <Button
                  variant="primary"
                  onClick={() => {
                    removePizza(pizza.id);
                  }}
                >
                  {" "}
                  -{" "}
                </Button>
              </td>
              <td>{pizza.count} </td>
              <td>
                {" "}
                <Button
                  variant="primary"
                  onClick={() => {
                    addToCart(pizza.id), setTotalPrice(setPizzaArray(pizza.id));
                  }}
                >
                  {" "}
                  +{" "}
                </Button>
              </td>
            </tr>
          ))}{" "}
        </tbody>

        <h4>Total: ${totalPrice}</h4>

        <Button>ir a pagar</Button>
      </Table>
    </div>
  );
}
