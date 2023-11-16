import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const data_Url = "./pizzas.json";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const callToast = (callback) => {
    callback();
  };

  const getData = async () => {
    try {
      const response = await axios.get(data_Url);
      console.log(response);
      if (response.status !== 200) {
        throw new error("No hay Data que mostrar");
      }
      const data = response.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    callToast();
    console.log("carro", setCart);
  };

  const TotalPrice = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        addToCart,
        TotalPrice,
        callToast,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
