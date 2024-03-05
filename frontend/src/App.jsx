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
  const [openVistaRapida, setOpenVistaRapida] = useState(false);
  const [idProductoVistaRapida, setIdProductoVistaRapida] = useState(10);
  const [filtros, setFiltros] = useState({
    categoria: "all",
    marca: "",
    minPrice: 0,
    maxPrice: 1000000,
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const agregarCarrito = (obj) => {
    setTotal(Number(total) + Number(obj.price));
    const indice = carro.findIndex((item) => item.id === obj.id);

    if (indice !== -1) {
      carro[indice].qty = Number(obj.qty) + 1;
      //console.log("carro antes de eliminar", carro);
      setCarro([...carro]);
    } else {
      obj.qty = 1;
      carro.push(obj);
      setCarro(carro);
    }
  };

  const formatPrecio = (precio) => {
    const precioCLP = new Intl.NumberFormat("es-CL").format(precio);
    return "$ " + precioCLP;
  };

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
          openVistaRapida,
          setOpenVistaRapida,
          idProductoVistaRapida,
          setIdProductoVistaRapida,
          classNames,
          agregarCarrito,
          formatPrecio,
          filtros,
          setFiltros,
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
