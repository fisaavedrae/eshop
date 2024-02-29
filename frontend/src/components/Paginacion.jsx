import React from "react";
import PropTypes from "prop-types";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Paginacion = ({ cantidadPaginas, paginaActiva }) => {
  const classActive =
    "z-10 flex items-center justify-center px-3 h-8 leading-tight text-black border border-black bg-white hover:bg-white hover:text-orange-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const classNormal =
    "flex items-center justify-center px-3 h-8 leading-tight font-thin text-gray-500 bg-white border border-gray-300 hover:bg-white hover:text-orange-300 hover:shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  const listItems = [];
  for (let i = 0; i < cantidadPaginas; i++) {
    listItems.push({ page: i + 1 });
  }

  return (
    <>
      <nav aria-label="paginacion" className="mb-10 max-w-sm mx-auto">
        <ul className="flex items-center -space-x-px h-8 text-sm gap-1">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-black bg-white border  border-gray-300 rounded-s-lg hover:bg-white hover:text-orange-300 hover:shadow dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-4 h-5" />
            </a>
          </li>
          {listItems.map((item) => (
            <li key={item.page}>
              <a
                href="#"
                className={
                  item.page === paginaActiva ? classActive : classNormal
                }
              >
                {item.page}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-white hover:text-orange-300 hover:shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-4 h-5" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

Paginacion.propTypes = {
  cantidadPaginas: PropTypes.number,
  paginaActiva: PropTypes.number,
};

export default Paginacion;
