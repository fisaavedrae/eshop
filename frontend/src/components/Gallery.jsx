import React from "react";
import PropTypes from "prop-types";

const Gallery = ({ images }) => {
  console.log("images: ", images[0]);
  const [active, setActive] = React.useState(images[0]);

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((imagen) => (
          <div key={imagen.index}>
            <img
              onClick={() => setActive(imagen)}
              src={imagen}
              className=" h-16 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
