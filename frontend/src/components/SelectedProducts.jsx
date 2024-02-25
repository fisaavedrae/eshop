import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

const SelectedProducts = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
              {/* Carousel for desktop and large size devices */}
              <CarouselProvider
                className="lg:block hidden"
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={products.length}
                visibleSlides={3}
                step={1}
                infinite={false}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none  focus:ring-offset-2 cursor-pointer"
                    id="prev"
                  >
                    <ArrowLeftIcon className="w-8 h-8 text-black" />
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-15 items-center justify-start transition ease-out duration-700"
                      >
                        {products.map((product) => (
                          <Slide index={product.id} key={product.id}>
                            <div className="flex flex-col relative w-full sm:w-auto">
                              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-85">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="h-full w-full object-cover object-center lg:h-85 lg:w-full"
                                />
                              </div>
                              <div className="mt-4 flex-col justify-between items-center text-center">
                                <div>
                                  <h3 className="text-sm text-gray-700">
                                    <Link to={"/Producto/" + product.id}>
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                      />
                                      {product.name}
                                    </Link>
                                  </h3>

                                  <p className="text-sm font-medium text-gray-900">
                                    {product.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Slide>
                        ))}
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <ArrowRightIcon className="w-8 h-8 text-black" />
                  </ButtonNext>
                </div>
              </CarouselProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedProducts;
