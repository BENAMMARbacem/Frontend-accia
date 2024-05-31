import React from "react";

import { Img } from "components";

const MapCard = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat flex flex-col h-80 items-start justify-end p-[55px] md:px-5 w-[89%] md:w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.689804446056!2d10.180973310298974!3d36.801987067484845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd351ed037a72b%3A0x3bd12ba049f7690e!2sassocation%20ACCIA!5e0!3m2!1sen!2stn!4v1709677069278!5m2!1sen!2stn"
          allowfullscreen=""
          className="w-full h-[1500px]"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

MapCard.defaultProps = {};

export default MapCard;
