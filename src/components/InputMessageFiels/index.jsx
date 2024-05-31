import React from "react";

import { Img, Text } from "components";

const InputMessageFiels = (props) => {
  return (
    <>
      <div className="bg-white-A700 flex flex-1 flex-col items-start justify-end outline outline-[1px] outline-gray-500 p-[11px] rounded w-full">
        <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-0.5  md:w-full">
          <Text className="text-blue_gray-800 text-md" size="txtManropeBold18">
            {props?.label}
          </Text>

          <div className="flex flex-row gap-2 items-start justify-start mt-[7px] w-full">
            <Img className="h-6 w-6" alt="profile" src={props?.icon} />
            <input
              className="text-blue_gray-800 text-lg"
              size="txtManropeBold18"
              placeholder={props?.placeholder}
            />
          </div>
        </div>
      </div>
    
    </>
  );
};

InputMessageFiels.defaultProps = {
  label: "Message",
  icon: "images/img_bookmark.svg",
  placeholder: "Saisir votre message",
};

export default InputMessageFiels;
