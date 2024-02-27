import React from "react";

const Footers = ({ strip = true }) => {
  return (
    <>
      {strip ? (
        <div className="flex-col text-center items-center  bg-black px-8 py-1 sm:px-3.5 ">
          <div className="">
            <p className="text-sm leading-6 text-white">
              <strong className="font-semibold">30% </strong>
              de descuento en algunos productos
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      <footer className="bg-gray-100 dark:bg-gray-900 w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-12 ">
          <div className="grid grid-cols-2 gap-8 px-8 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                COMPRA RAPIDA
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Hombres
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Mujeres
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Niños
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Accesorios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                INFORMACIONES
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Sobre Nosotros
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Login
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terminos y Condiciones
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Mi Cuenta
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                SERVICIO AL CLIENTE
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contactanos
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Soporte
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Estemos Conectados
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 w-full flex-row justify-between gap-10 align-center ">
                  <i className="fab fa-facebook pr-2"></i>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4 w-full flex-row justify-between gap-10 align-center ">
                  <i className="fab fa-twitter pr-2"></i>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4 w-full flex-row justify-between gap-10 align-center ">
                  <i className="fab fa-instagram pr-2"></i>
                  <a href="#" className="hover:underline">
                    Instragram
                  </a>
                </li>
                <li className="mb-4 w-full flex-row justify-between gap-10 align-center ">
                  <i className="fab fa-pinterest pr-2"></i>
                  <a href="#" className="hover:underline">
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 w-full bg-white dark:bg-gray-700 ">
          <div className="mx-auto max-w-screen-xl px-6  md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
              Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fab fa-facebook"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footers;
