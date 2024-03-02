import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { MyContext } from "./context/MyContext.jsx";
import { useNavigate } from "react-router-dom";
import {
  PlusIcon,
  MinusIcon,
  XMarkIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const SideCart = () => {
  const {
    open,
    setOpen,
    total,
    setTotal,
    carro,
    setCarro,
    setOrderProducts,
    setTotalOrder,
    formatPrecio,
  } = useContext(MyContext);

  function quitarItemCarro(obj) {
    setCarro(carro.filter((item) => item.id !== obj.id));
    setTotal(Number(total) - Number(obj.qty) * Number(obj.price));
  }
  function restarUnidadItemCarro(obj) {
    const indice = carro.findIndex((item) => item.id === obj.id);
    if (carro[indice].qty > 1) {
      setTotal(Number(total) - Number(obj.price));
      carro[indice].qty = Number(obj.qty) - 1;
      console.log("carro antes de eliminar", carro);
      setCarro([...carro]);
    } else {
      quitarItemCarro(obj);
    }
  }
  function sumarUnidadItemCarro(obj) {
    const indice = carro.findIndex((item) => item.id === obj.id);
    setTotal(Number(total) + Number(obj.price));
    carro[indice].qty = Number(obj.qty) + 1;
    console.log("carro antes de eliminar", carro);
    setCarro([...carro]);
  }

  const navigate = useNavigate();
  function handleCheckout() {
    setOrderProducts([...carro]);
    setTotalOrder(total);
    setCarro([]);
    setTotal(0);
    setOpen(false);
    navigate(`/checkout`);
  }
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between border-b border-gray-200 px-1 pb-2 ">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Tu Carrito ({carro.length}) items
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {carro.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.thumbnail}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col gap-2">
                                    <div>
                                      <div className="flex justify-between text-base font-normal text-gray-900">
                                        <h3>
                                          <a href={product.title}>
                                            {product.title}
                                          </a>
                                        </h3>
                                        <div>
                                          <button
                                            onClick={() =>
                                              quitarItemCarro(product)
                                            }
                                            className="text-black hover:text-orange-300 font-thin"
                                          >
                                            <TrashIcon
                                              className="h-5 w-5 text-gray-700"
                                              aria-hidden="true"
                                            />
                                          </button>
                                        </div>
                                      </div>
                                      <p className="mt-1 text-xs text-gray-500">
                                        {product.brand}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex border border-gray-200 py-0.5 px-0.5 ">
                                        <div className=" border flex items-center">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              restarUnidadItemCarro(product)
                                            }
                                            className="py-1 bg-gray-100 text-gray-00  hover:bg-gray-200 hover:text-black"
                                          >
                                            <MinusIcon
                                              className="h-5 w-5 "
                                              aria-hidden="true"
                                            />
                                          </button>
                                        </div>
                                        <div className="bg-white border py-1 px-2">
                                          <p className="text-gray-500">
                                            {product.qty}
                                          </p>
                                        </div>
                                        <div className="bg-gray-100 border flex items-center">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              sumarUnidadItemCarro(product)
                                            }
                                            className="py-1 bg-gray-100 text-gray-00  hover:bg-gray-200 hover:text-black"
                                          >
                                            <PlusIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className=" text-sm">
                                      {formatPrecio(
                                        Number(product.qty) *
                                          Number(product.price)
                                      )}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>{formatPrecio(total)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          {total > 0 && (
                            <Link
                              to="/Checkout"
                              onClick={() => handleCheckout()}
                              className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-black hover:border-black"
                            >
                              CHECKOUT
                            </Link>
                          )}
                        </div>
                        <div className="mt-6">
                          <Link
                            to="/Carrito"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-black hover:border-black"
                          >
                            VER CARRITO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SideCart;
