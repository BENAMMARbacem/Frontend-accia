import React from "react";

import { Button, Img, Text } from "components";

const PaginationBar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex my-auto w-[76%]">
          <div className="flex flex-col items-center justify-start my-auto w-[79%]">
            <div className="flex flex-row gap-[27px] items-center justify-between w-full">
              <Img
                className="h-9 rounded"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <Button
                className="border border-light_blue-900 border-solid cursor-pointer font-manrope min-w-[57px] rounded text-center text-sm"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                2
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-col items-center justify-end ml-[-17px] my-auto p-[7px] rounded z-[1]">
            <Text
              className="text-light_blue-900 text-sm"
              size="txtManropeRegular14Lightblue900"
            >
              3
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer font-manrope min-w-[53px] ml-[undefinedpx] my-auto rounded text-center text-sm z-[1]"
          shape="round"
          color="light_blue_900"
          size="sm"
          variant="fill"
        >
          1
        </Button>
        <Img
          className="h-9 ml-[-1px] my-auto rounded z-[1]"
          src="images/img_arrowleft.svg"
          alt="arrowright"
        />
      </div>
    </>
  );
};

PaginationBar.defaultProps = {};

export default PaginationBar;
