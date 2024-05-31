import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import { formatDate, formatTime } from "../../utils/index";
const EventInfosBar = (props) => {
  const navigate = useNavigate();
console.log("props event info",props)
  return (
    <>
      <div className="bg-gray-50 flex md:flex-col flex-row font-manrope md:gap-5 items-center  justify-start max-w-[1096px] mt-[19px] mx-auto p-3 md:px-5 rounded-lg w-full  ">
        <div className="flex flex-row gap-2">
          <Img
            className="h-7 md:mt-0 my-4 w-7"
            src="images/img_clock1_light_blue_900.svg"
            alt="clockOne"
          />
          <Text
            className="mb-3.5 md:mt-0 mt-[17px] text-light_blue-900 text-xl"
            size="txtManropeBold20Lightblue900"
          >
            {props.H_Start ? formatTime(props.H_Start) : ""}-{" "}
            {props.H_Fin ? formatTime(props.H_Fin) : ""}{" "}
          </Text>
        </div>

        <div className="flex flex-row gap-2">
          <Img
            className="h-7 md:ml-[0] ml-[182px] md:mt-0 my-4 w-7"
            src="images/img_calendar.svg"
            alt="calendar"
          />
          <Text
            className="mb-3.5 ml-1 md:ml-[0] md:mt-0 mt-[17px] text-light_blue-900 text-xl"
            size="txtManropeBold20Lightblue900"
          >
            {props.date ? formatDate(props.date) : ""}{" "}
          </Text>
        </div>

        <div className="flex flex-row gap-2">
          <Img
            className="h-7 md:ml-[0] ml-[185px] md:mt-0 my-4 w-7"
            src="images/img_pin31_light_blue_900.svg"
            alt="pinThirtyOne"
          />
          <Text
            className="mb-3.5 ml-1 md:ml-[0] md:mt-0 mt-[17px] text-light_blue-900 text-xl"
            size="txtManropeBold20Lightblue900"
          >
            {props.Location ? props.Location : ""}{" "}
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start mb-3.5 md:ml-[0] ml-40 lg:pl-5	 md:mt-0 mt-2.5 w-[11%] md:w-full lg:pt-5">
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[108px] rounded-[18px]"
          onClick={() => navigate("/eventreservationpage")}
          leftIcon={
            <Img
              className="h-5 mb-px mr-1.5"
              src="images/img_bag.svg"
              alt="bag"
            />
          }
          color="light_blue_900_01"
          size="sm"
          variant="fill"
        >
          <div className="font-manrope text-left text-sm">Reserver</div>
        </Button>
      </div>
    </>
  );
};

EventInfosBar.defaultProps = {
  eventHour: "10:00 - 11:00 AM",
  eventDate: "11/12/2021",
  eventLocation: "Hotel X-Y-Z",
};

export default EventInfosBar;
