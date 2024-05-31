import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";
import SingleFieldUserData from "components/SingleFieldUserData";

const EventTicketPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-lexend h-[1761px] mx-auto relative  w-full">
        <div className="flex flex-col h-full items-start justify-start mt-[255px] mx-auto md:px-5 w-full">
          <div className="block md:flex-col flex-row gap-8 items-center justify-start md:m-0 m-2.5 p-2.5 w-[57%] md:w-full">
            <Text
              className="mb-0.5 md:ml-[0] ml-[15px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 text-center"
              size="txtLexendBold52"
            >
              Ticket N°{" "}
            </Text>
            <Text
              className="md:mt-0 mt-0.5 sm:text-[38px] md:text-[44px] text-[52px] text-light_blue-500 text-right"
              size="txtLexendBold52Lightblue500"
            >
              #ACCIA0024
            </Text>
          </div>
          <Line className="bg-light_blue-900 h-[3px] hidden md:ml-[0] ml-[5px] mt-0.5 text-left w-[8%]" />
          <Text
            className="md:ml-[0] ml-[15px] mt-[66px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtLexendBold32Bluegray900"
          >
            Conférence Annuelle{" "}
          </Text>
          <Img
            className="h-[171px] sm:h-auto md:ml-[0] ml-[15px] mt-[22px] object-cover rounded-lg w-full"
            src="images/img_image68_171x1099.png"
            alt="imageSixtyEight"
          />
          <div className="bg-gray-50 flex md:flex-col flex-row font-manrope md:gap-5 items-start justify-start md:ml-[0] ml-[15px] mt-7 p-3 rounded-lg w-full">
            <Img
              className="h-7 md:mt-0 my-4 w-7"
              src="images/img_clock1_light_blue_900.svg"
              alt="clockOne"
            />
            <Text
              className="mb-3.5 md:mt-0 mt-[17px] text-light_blue-900 text-xl"
              size="txtManropeBold20Lightblue900"
            >
              10:00 - 11:00 AM
            </Text>
            <Img
              className="h-7 md:ml-[0] ml-[182px] md:mt-0 my-4 w-7"
              src="images/img_calendar.svg"
              alt="calendar"
            />
            <Text
              className="mb-3.5 ml-1 md:ml-[0] md:mt-0 mt-[17px] text-light_blue-900 text-xl"
              size="txtManropeBold20Lightblue900"
            >
              11/12/2021
            </Text>
            <Img
              className="h-7 md:ml-[0] ml-[185px] md:mt-0 my-4 w-7"
              src="images/img_pin31_light_blue_900.svg"
              alt="pinThirtyOne"
            />
            <Text
              className="mb-3.5 ml-1 md:ml-[0] md:mt-0 mt-[17px] text-light_blue-900 text-xl"
              size="txtManropeBold20Lightblue900"
            >
              Hotel X-Y-Z
            </Text>
          </div>
          <SingleFieldUserData
            className="flex flex-row font-manrope items-center justify-between md:ml-[0] ml-[15px] mt-[67px] w-[42%] md:w-full"
            value="Flen"
          />
          <SingleFieldUserData
            className="flex flex-row font-manrope sm:gap-10 items-center justify-between md:ml-[0] ml-[15px] mt-[13px] w-[49%] md:w-full"
            value="Ben Foulen"
          />
          <SingleFieldUserData className="flex flex-row font-manrope sm:gap-10 items-start justify-between md:ml-[0] ml-[15px] mt-[13px] w-[54%] md:w-full" />
          <SingleFieldUserData
            className="flex flex-row font-manrope items-start justify-between md:ml-[0] ml-[15px] mt-[11px] w-[46%] md:w-full"
            value="Membre"
          />
          <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start md:ml-[0] ml-[15px] mt-16 w-[54%] md:w-full">
            <Img
              className="h-[119px] md:h-auto object-cover w-[119px]"
              src="images/img_image22_82x82.png"
              alt="imageSixtyNine"
            />
            <Img
              className="h-[119px] md:h-auto object-cover w-[119px]"
              src="images/img_image22_5.png"
              alt="imageSixtyNine_One"
            />
            <Img
              className="h-[119px] md:h-auto object-cover w-[119px]"
              src="images/img_image69.png"
              alt="imageSixtyNine_Two"
            />
            <Img
              className="h-[119px] md:h-auto object-cover w-[119px]"
              src="images/img_image22_6.png"
              alt="imageSixtyNine_Three"
            />
          </div>
        </div>
        <div className="absolute h-[1771px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Line className="absolute bg-gray-700 bottom-[28%] h-px right-[0] w-[96%]" />
          <div className="absolute bottom-[3%] flex md:flex-col flex-row gap-[37px] items-center justify-between right-[2%] w-[84%]">
            <div className="flex flex-col items-start justify-start mb-[5px] w-[49%] md:w-full">
              <Text
                className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
                size="txtLexendBold52"
              >
                Conférence Annuelle{" "}
              </Text>
              <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-start mt-[35px] w-4/5 md:w-full">
                <Text
                  className="text-3xl sm:text-4xl md:text-[38px] text-blue_gray-900"
                  size="txtLexendBold40Bluegray900"
                >
                  Ticket N°{" "}
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-500"
                  size="txtLexendBold40Lightblue500"
                >
                  #ACCIA0024
                </Text>
              </div>
              <SingleFieldUserData
                className="flex flex-row font-manrope items-center justify-between mt-[35px] w-[79%] md:w-full"
                value="Flen"
              />
              <SingleFieldUserData
                className="flex flex-row font-manrope sm:gap-10 items-center justify-between mt-[13px] w-[92%] md:w-full"
                value="Ben Foulen"
              />
              <SingleFieldUserData className="flex flex-row font-manrope sm:gap-10 items-start justify-between mt-[13px] w-full" />
              <SingleFieldUserData
                className="flex flex-row font-manrope items-start justify-between mt-[11px] w-[87%] md:w-full"
                value="Membre"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-[77px] justify-start w-[49%] md:w-full">
              <Img
                className="h-[165px] md:h-auto md:ml-[0] ml-[179px] object-cover w-[34%]"
                src="images/img_image201_165x195.png"
                alt="image201"
              />
              <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-between w-full">
                <Img
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src="images/img_image22_82x82.png"
                  alt="imageSixtyNine_Four"
                />
                <Img
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src="images/img_image22_5.png"
                  alt="imageSixtyNine_Five"
                />
                <Img
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src="images/img_image69.png"
                  alt="imageSixtyNine_Six"
                />
                <Img
                  className="h-[119px] md:h-auto object-cover w-[119px]"
                  src="images/img_image22_6.png"
                  alt="imageSixtyNine_Seven"
                />
              </div>
            </div>
          </div>
          <Sidebar className="!sticky !w-24 bg-light_blue-900 h-screen hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
            <Img
              className="h-[1215px] md:h-auto object-cover w-[10%]"
              src="images/img_rectangle36.png"
              alt="rectangleThirtySix"
            />
            <Img
              className="h-8 ml-5 md:ml-[0] mr-11 mt-[45px] w-8"
              src="images/img_cut.svg"
              alt="cut"
            />
            <Img
              className="h-[457px] md:h-auto mt-[22px] object-cover w-full"
              src="images/img_rectangle36_457x96.png"
              alt="rectangleThirtySix_One"
            />
          </Sidebar>
          <Img
            className="absolute h-[165px] hidden left-[14%] object-cover top-[2%] w-[14%]"
            src="images/img_image201_165x195.png"
            alt="image201_One"
          />
        </div>
      </div>
    </>
  );
};

export default EventTicketPage;
