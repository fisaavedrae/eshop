import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FunnelIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Filtros from "./Filtros";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ShopHeaderFiltros = ({ cantidadProductos }) => {
  return (
    <>
      <div className="div">
        <div className="text-center">
          <p className="text-xl font-black tracking-wide text-black uppercase">
            Shop
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-row justify-between ">
            <div className="text-center flex flex-row justify-between  ">
              <button
                type="button"
                data-drawer-target="drawer-filtros"
                data-drawer-show="drawer-filtros"
                data-drawer-placement="left"
                aria-controls="drawer-filtros"
                className="px-3 py-2 text-sm font-thin text-center inline-flex gap-1 items-center text-white bg-black rounded-sm hover:bg-gray-700 focus:ring-0 focus:outline-none focus:ring-black"
              >
                <FunnelIcon className="h-5 w-5" />
                Filtros
              </button>
            </div>
            <div className="font-thin text-sm">
              Mostrando: {cantidadProductos} resultados
            </div>
            <div className="orden">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-sm bg-white px-3 py-2 text-sm font-thin text-black shadow-sm ring-1 ring-inset ring-gray-300 ">
                    Ordenar
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right font-thin rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Precio: de menor a mayor
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Precio: de mayor a menor
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Nombre: a - z
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Nombre: z - a
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <Filtros />
    </>
  );
};

export default ShopHeaderFiltros;
