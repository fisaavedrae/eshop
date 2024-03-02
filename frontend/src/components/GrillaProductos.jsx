import { useContext } from "react";

import { MyContext } from "./context/MyContext";
import { useNavigate } from "react-router-dom";
import {
  MagnifyingGlassPlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import VistaRapidaProducto from "./VistaRapidaProducto";

const GrillaProductos = () => {
  const {
    productos,

    setOpenVistaRapida,
    idProductoVistaRapida,
    setIdProductoVistaRapida,
    agregarCarrito,
    formatPrecio,
  } = useContext(MyContext);

  //console.log("productos shop", productos);
  const handleVistaRapida = (id) => {
    console.log("entre");

    setIdProductoVistaRapida(id);
    setOpenVistaRapida(true);
  };

  const navigate = useNavigate();
  const irAProducto = (id) => {
    navigate(`/Producto/${id}`);
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productos.map((product) => (
          <>
            <div key={product.id} className=" relative">
              <div className="aspect-h-1 aspect-w-1 w-full  rounded-sm bg-gray-200 lg:aspect-none ">
                <div className="flex items-center justify-center">
                  <div className="overflow-hidden  cursor-pointer rounded-sm relative group">
                    <div className="rounded-xl z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute  to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                      <div className="transform-gpu mx-auto p-4 space-y-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-6  transition duration-300 ">
                        <div className="flex flex-row justify-center text-center  items-center  gap-3 w-full ">
                          <button
                            data-tooltip-target={"tooltip-cart" + product.id}
                            type="button"
                            onClick={() => agregarCarrito(product)}
                          >
                            <ShoppingCartIcon className="h-8 w-8 text-white bg-black hover:bg-gray-500 rounded-md font-thin py-1 px-1" />
                          </button>

                          <div
                            id={"tooltip-cart" + product.id}
                            role="tooltip"
                            className="absolute z-50 w-32 invisible inline-block px-3 py-2 text-sm font-thin text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                          >
                            Agregar al carro
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                          <button
                            data-tooltip-target={"tooltip-detail" + product.id}
                            type="button"
                            onClick={() => handleVistaRapida(product.id)}
                          >
                            <MagnifyingGlassPlusIcon className="h-8 w-8 text-white bg-black hover:bg-gray-500 rounded-md font-thin py-1 px-1" />
                          </button>
                          <div
                            id={"tooltip-detail" + product.id}
                            role="tooltip"
                            className="absolute z-22 invisible inline-block px-3 py-2 text-sm font-thin text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                          >
                            Vista rapida
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      onClick={() => irAProducto(product.id)}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex-col justify-between">
                <div className="items-center text-center">
                  <h3 className="text-sm text-gray-700">
                    <a href={product.title}>
                      <span aria-hidden="true" className="" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {formatPrecio(product.price)}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {productos.length > 0 && (
        <VistaRapidaProducto id={idProductoVistaRapida} />
      )}
    </>
  );
};

export default GrillaProductos;
