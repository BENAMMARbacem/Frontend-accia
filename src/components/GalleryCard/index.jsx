import React from "react";
import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const GalleryCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`relative ${props.className}`}>
        <div className="flex flex-row gap-2 items-start justify-start w-full md:w-full">
          <Text
            className="mt-[3px] text-lg text-light_blue-900"
            size="txtLexendRegular18"
          >
            {props?.GalleryLink?.name || "Album Name"}
          </Text>
        </div>
        <div>
          <Img
            className="h-[212px] md:h-auto mt-[15px] object-cover rounded-[3px] w-full"
            alt="AlbumCover"
            src={props?.GalleryLink?.imageLink || "images/img_image34_212x235.jpeg"}
          />
        </div>
      </div>
      <button
        onClick={() => navigate("/SingleGalleryPage")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
      >
        Voir
      </button>
    </>
  );
};

export default GalleryCard;
