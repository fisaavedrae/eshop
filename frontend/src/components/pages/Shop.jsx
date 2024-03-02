import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { MyContext } from "../context/MyContext";
import {
  MagnifyingGlassPlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import Header from "../Header";
import Footers from "../Footers";
import ShopHeaderFiltros from "../ShopHeaderFiltros";
import Paginacion from "../Paginacion";
import LoadingSpinner from "../LoadingSpinner";
import GrillaProductos from "../GrillaProductos";
import jsonProductos from "../../assets/productos.json";

const Shop = () => {
  const { productos, setProductos } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    ReadAPI();
  }, []);
  //console.log("jsonProductos", jsonProductos);
  setProductos(jsonProductos);
  async function ReadAPI() {
    try {
      setIsLoading(true);
      //const response = await fetch("https://dummyjson.com/products");
      //const data = await response.json();

      setProductos(jsonProductos);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <ShopHeaderFiltros cantidadProductos={productos.length} />
          {isLoading ? <LoadingSpinner /> : <GrillaProductos />}
        </div>
      </div>
      <Paginacion cantidadPaginas={10} paginaActiva={5} />
      <Footers />
    </>
  );
};

export default Shop;
