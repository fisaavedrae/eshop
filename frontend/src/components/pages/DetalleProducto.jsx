import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext.jsx";
import Header from "../Header.jsx";
import Producto from "../Producto.jsx";

const DetalleProducto = (props) => {
  const { total, setTotal, productos, carro, setCarro } = useContext(MyContext);
  const { id } = useParams();
  return (
    <>
      <Header strip={false} />
      <Producto id={id} />
    </>
  );
};

export default DetalleProducto;
