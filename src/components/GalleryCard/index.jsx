import React from "react";
import { Img, Text } from "components";

const GalleryCard = (props) => {


  return (
    <>
      <div className={`relative ${props.className}`}>

        <div className="flex flex-row gap-2 items-start justify-start w-full md:w-full">
          <Text
            className="mt-[3px] text-lg text-light_blue-900"
            size="txtLexendRegular18"
          >
            hhhhh
          </Text>
        </div>
        <div>
          <Img
            className="h-[212px] md:h-auto mt-[15px] object-cover rounded-[3px] w-full"
            alt="imageThirtyFour"
            src="images/img_image34_212x235.jpeg"
          />
        </div>

      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Voir
      </button>



    </>
  );
};

export default GalleryCard;

