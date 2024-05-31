import React from "react";

import { Img, Text } from "components";
const formatDate =(date)=> {
  return date.split("T")[0]
}

const formatHour =(date)=> {
  const hour = date.split("T")[1].split(":")[0]
  const minute = date.split("T")[1].split(":")[1]
  return `${hour}:${minute}`}

const UserComments = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex lg:flex-row flex-row gap-2 items-center justify-between w-full">
          <div className="bg-light_blue-100 flex flex-col h-9 items-center justify-start mb-2 rounded-[50%] w-9">
            <Img
              className="h-9 md:h-auto rounded-[50%] w-9"
              alt="rectangle_Two"
              src={props?.avatar}
            />
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[94%] md:w-full">
            <div className="flex flex-row gap-4 items-start justify-between w-[100%] md:w-full">
              <Text
                
              className="mt-[7px] text-gray-900 text-sm"
              size="txtLexendSemiBold14"
            >
                {props?.username}
              </Text>
              <Text
                className="mt-[3px] text-gray-500 text-xs"
                size="txtManropeRegular12Gray500"
              >
                {`${formatDate(props?.createdAt)} | ${formatHour(props?.createdAt)} `}
              </Text>
            </div>
            
            <Text
              className="leading-[22.00px] mt-0.5 text-blue_gray-900 text-sm w-full"
              size="txtManropeRegular14Bluegray900"
            >
              {props?.text}
            </Text>
            
          </div>
        </div>
      </div>
    </>
  );
};

UserComments.defaultProps = {
  avatar: "images/img_rectangle_36x36.png",
  username: "Klara Weaver",
  commentDate: "10:50 AM",
  headline:
    "Nulla aute nisi quis nostrud reprehenderit nisi cillum mollit anim amet duis non esse.",
  content:
    "Eu laborum fugiat magna reprehenderit reprehenderit tempor aliquip nisi officia irure qui ad. Labore pariatur ex ut aliqua ad exercitation deserunt eu nisi do velit mollit consequat in quis. Adipisicing magna 🚀🚀🚀",
  likesCount: "3",
  repliesCount: "20",
};

export default UserComments;
