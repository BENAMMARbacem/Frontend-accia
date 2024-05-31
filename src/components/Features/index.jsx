import { Img, Text } from "components";
import ReturnButton from "components/ReturnButton";
import React from "react";

export default function Features() {
  return (
    <>
      <div className="flex md:flex-col flex-row font-manrope md:gap-7 justify-between items-center mt-[55px] mx-auto md:px-5 w-full">
        
        <div className="flex flex-row gap-2">
          <Img
            src="images/img_lowvision1_light_blue_900.svg"
            alt="lowvisionOne"
          />
           <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtLexendBold32"
            >
              Activité
            </Text>
        </div>

        <div className="flex flex-ow gap-2">
          <Img
            className=" h-[42px] inset-[0] justify-center m-auto w-[42px]"
            src="images/img_lowvision1_light_blue_900.svg"
            alt="lowvisionOne"
          />
           <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtLexendBold32"
            >
              Activité
            </Text>
        </div>


        <div className="flex flex-row gap-2">
          <Img
            className=" h-[42px] justify-center m-auto w-[42px]"
            src="images/img_lowvision1_light_blue_900.svg"
            alt="lowvisionOne"
          />
           <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtLexendBold32"
            >
              Activité
            </Text>
        </div>



        <div className="flex flex-ow gap-2">
          <Img
            className=" h-[42px] inset-[0] justify-center m-auto w-[42px]"
            src="images/img_lowvision1_light_blue_900.svg"
            alt="lowvisionOne"
          />
           <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtLexendBold32"
            >
              Activité
            </Text>
        </div>

      </div>
    </>
  );
}
