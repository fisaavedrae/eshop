import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    id: 1,
    author: "Tom Cook",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 2,
    author: "Bob Marley",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 3,
    author: "Peter Tosh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 4,
    author: "Jim Morrison",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="px-6 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
        <div
          id="animation-carousel"
          className="relative w-full bg-gray-100"
          data-carousel="static"
        >
          <div className="max-w-xl sm:mx-auto pt-10">
            <div className="text-center">
              <p className="text-xl font-black tracking-wide text-black uppercase">
                Testimonios
              </p>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg md:h-64">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="hidden duration-200 ease-linear flex-col h-full justify-center items-center px-4 py-14 w-auto pt-20 pl-40  pr-40"
                data-carousel-item
              >
                <div className="w-full text-center text-lg">{item.text} </div>
                <div className="w-full text-center text-sm font-black uppercase pt-4">
                  {item.author}{" "}
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <ArrowLeftIcon
                className="w-5 h-5 text-black"
                aria-hidden="true"
              />
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <ArrowRightIcon
                className="w-5 h-5 text-black"
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
