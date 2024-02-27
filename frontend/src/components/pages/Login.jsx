import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footers from "../Footers";

const Login = () => {
  return (
    <>
      <Header strip={false} cart={false} />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-1 pb-14 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center uppercase text-2xl font-normal leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>
        <div className="flex flex-row gap-32 justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col  justify-between h-full max-w-xl ">
            <div className="max-w-xl">
              <h2 className="mt-10 text-center uppercase text-lg font-normal leading-9 tracking-tight text-gray-900">
                Nuevo Cliente
              </h2>
              <div className="mt-10 mt-4text-sm">
                By creating an account with our store, you will be able to move
                through the checkout process faster, store multiple shipping
                addresses, view and track your orders in your account and more.
              </div>
              <div className="mt-10">
                <Link
                  type="submit"
                  to="/CrearCuenta"
                  className="flex w-36 justify-center font-thin uppercase rounded-sm bg-black px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Crear Cuenta
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-96 justify-between">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center uppercase text-lg font-normal leading-9 tracking-tight text-gray-900">
                Clientes Registrados
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-80 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-36 justify-center uppercase font-thin rounded-sm bg-black px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Ingresar
                  </button>
                </div>
              </form>

              <p className="mt-3  text-sm text-gray-500">
                <Link
                  to="/RecuperarClave"
                  className="pr-2 leading-6 text-gray-500 hover:text-orange-300"
                >
                  Olvidó su clave?
                </Link>{" "}
                |{" "}
                <Link
                  to="/RecuperarClave"
                  className="pl-2 leading-6 text-gray-500 hover:text-orange-300"
                >
                  Crear Cuenta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footers strip={false} />
    </>
  );
};

export default Login;
