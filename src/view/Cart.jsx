import React from "react";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContexts";
import Button from "react-bootstrap/Button";
import Navbarapp from "../components/Navbarapp";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(DataContext);
  const Navigate = useNavigate();

  const redirectHome = () => {
    Navigate(`/`);
  };

  const removeCart = (productId) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity--;
      } else {
        updatedCart.splice(productIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  const addCartList = (productId) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);
    updatedCart[productIndex].quantity++;
    setCart(updatedCart);
  };

  if (!cart.length) {
    return (
      <>
        <div className="justify-content-center">
          <Navbarapp />
          <div className="d-flex justify-content-center">
            <h1>Carrito de compra está vacío</h1>
            <div className="d-flex justify-content-center mt-5">
              <Button
                variant="success"
                onClick={() => {
                  const confirmResult = window.confirm(
                    "🍕 Elige una rica Pizza MAMMA MIA primero 🍕"
                  );
                  if (confirmResult) {
                    redirectHome();
                  }
                }}
              >
                Volver
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="justify-content-center">
        <Navbarapp />
        <div className="d-flex justify-content-center">
          <h1>Detalle del Pedido</h1>
        </div>
        {/* ... Resto del código ... */}
      </div>
    );
  }
};

export default Cart;
