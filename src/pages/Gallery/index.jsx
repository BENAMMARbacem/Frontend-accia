
import { useNavigate } from "react-router-dom";

import { Img } from "components";
import PageTitle from "components/PageTitle";
import ReturnButton from "components/ReturnButton";



const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto  w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle />
          <div className="flex md:flex-col flex-row gap-[22px] items-center justify-end md:ml-[0] ml-[193px] mt-[89px] md:px-5 w-[78%] md:w-full">
            <Img
              className="h-[400px] sm:h-auto object-cover w-[49%] md:w-full"
              src="images/img_image36.png"
              alt="imageThirtySix"
            />
            <div className="flex flex-col gap-5 items-center justify-start w-1/2 md:w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <Img
                  className="h-[190px] md:h-auto object-cover"
                  src="images/img_image37.png"
                  alt="imageThirtySeven"
                />
                <Img
                  className="h-[190px] md:h-auto object-cover"
                  src="images/img_image38.png"
                  alt="imageThirtyEight"
                />
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <Img
                  className="h-[190px] md:h-auto object-cover"
                  src="images/img_image39.png"
                  alt="imageThirtyNine"
                />
                <Img
                  className="h-[190px] md:h-auto object-cover"
                  src="images/img_image40.png"
                  alt="imageForty"
                />
              </div>
            </div>
          </div>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-end md:ml-[0] ml-[193px] mt-5 md:px-5 w-[78%] md:w-full">
            <Img
              className="h-[190px] md:h-auto object-cover w-full"
              src="images/img_image41.png"
              alt="imageFortyOne"
            />
            <Img
              className="h-[190px] md:h-auto object-cover w-full"
              src="images/img_image42.png"
              alt="imageFortyTwo"
            />
            <Img
              className="h-[190px] md:h-auto object-cover w-full"
              src="images/img_image43.png"
              alt="imageFortyThree"
            />
            <Img
              className="h-[190px] md:h-auto object-cover w-full"
              src="images/img_image44.png"
              alt="imageFortyFour"
            />
          </div>
          <div className="flex flex-row font-manrope md:gap-10 items-start justify-between max-w-[1131px] mt-[60px] mx-auto md:px-5 w-full">
            <ReturnButton path={"/"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
