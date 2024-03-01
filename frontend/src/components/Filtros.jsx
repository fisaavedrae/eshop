import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Filtros = (props) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const highPrice = 50000;
  const maxMinPrice = highPrice / 2 - 1;
  const minMaxPrice = highPrice / 2;

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleChangeMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };
  return (
    <>
      <div
        id="drawer-filtros"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-left-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-filtros"
          aria-controls="drawer-filtros"
          className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <XMarkIcon className="w-5 h-5" />
          <span className="sr-only">Close menu</span>
        </button>
        <div
          className="mt-10"
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>Precio</span>
              <ChevronDownIcon className="w-5 h-5 shrink-0" />
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div>
              <label
                htmlFor="small-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Small range
              </label>
              <div className="div">
                <input
                  id="minPrice"
                  type="range"
                  min={0}
                  max={maxMinPrice}
                  onChange={handleChangeMinPrice}
                  className=" w-32 h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                />
                <input
                  id="maxPrice"
                  type="range"
                  min={minMaxPrice}
                  max={highPrice}
                  onChange={handleChangeMaxPrice}
                  className=" w-32 h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                />
              </div>
            </div>
            <div className="div">
              <span>$ {minPrice}</span>
              {" - "}
              <span>$ {maxPrice}</span>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>Is there a Figma file available?</span>
              <ChevronDownIcon className="w-5 h-5 shrink-0" />
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Figma design system
                </a>{" "}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>
                What are the differences between Flowbite and Tailwind UI?
              </span>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className="hidden"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Filtros.propTypes = {};

export default Filtros;
