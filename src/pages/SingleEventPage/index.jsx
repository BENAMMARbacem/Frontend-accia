import { useLocation, useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import EventInfosBar from "components/EventInfosBar";
import PageTitle from "components/PageTitle";
import ReturnButton from "components/ReturnButton";
import { useState } from "react";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const SingleEventPagePage = () => {
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search)
  const id=searchParams.get('id');
  const navigate = useNavigate();
  const [url,SetUrl]=useState("");
    const propsFromPreviousPage = location.state;

  return (
    <>
      <div className=" flex flex-col items-center justify-start mx-auto  w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle title={propsFromPreviousPage.title.fr} />
          <Img
            className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full"
            src={propsFromPreviousPage.imageUrl}
            alt="imageSixtyEight"
          />
          <EventInfosBar {...propsFromPreviousPage} />
          <div className="grid font-lexend items-center justify-start mx-auto lg:mx-0 pl-5	  w-full">
            <div className="flex flex-col gap-2">
              <Text
                className="md:ml-[0] ml-44 	 mt-[77px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
                size="txtLexendBold29"
              >
                Details
              </Text>
              <Text
                className="leading-[22.00px] ml-44 text-gray-900 text-sm flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full lg:ml-0 lg:p-0 "
                size="txtManropeRegular14"
              >
                {propsFromPreviousPage.description.fr}
              </Text>
            </div>

            {/* <div className="grid ">
              <Text
                className="md:ml-[0] ml-44 mt-[33px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
                size="txtLexendBold29"
              >
                Thematique
              </Text>

              <Text
                className="leading-[22.00px] ml-44 md:ml-[0]  mt-2 text-gray-900 text-sm w-[76%] sm:w-full"
                size="txtManropeRegular14"
              >
                test
              </Text>
            </div> */}

            <div className="flex flex-col gap-2">
              <div className="sm:grid sm:grid-cols-2 flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[213px] mt-7 md:px-5 w-[41%] md:w-full">
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
          </div>
          <ReturnButton path={"/eventspage"} />
        </div>
      </div>
    </>
  );
};

export default SingleEventPagePage;
