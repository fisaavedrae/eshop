import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MyContext } from "./components/context/MyContext";
import HomePage from "./components/pages/HomePage";
import Carrito from "./components/pages/Carrito";
import Checkout from "./components/pages/Checkout";
import DetalleProducto from "./components/pages/DetalleProducto";
import CerrarSesion from "./components/pages/CerrarSesion";
import CrearCuenta from "./components/pages/CrearCuenta";
import Login from "./components/pages/Login";
import Perfil from "./components/pages/Perfil";
import Shop from "./components/pages/Shop";
import RecuperarClave from "./components/pages/RecuperarClave";

function App() {
  const [total, setTotal] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [productos, setProductos] = useState([]);
  const [carro, setCarro] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <MyContext.Provider
        value={{
          total,
          setTotal,
          productos,
          setProductos,
          carro,
          setCarro,
          orderProducts,
          setOrderProducts,
          totalOrder,
          setTotalOrder,
          open,
          setOpen,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Producto/:id" element={<DetalleProducto />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/CerrarSession" element={<CerrarSesion />} />
          <Route path="/CrearCuenta" element={<CrearCuenta />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/RecuperarClave" element={<RecuperarClave />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
