
import { Button, Img, Text } from "components";
import Features from "components/Features";
import ReturnButton from "components/ReturnButton";
import TextComponent from "components/TextComponent";
import MapCard from "components/MapCard";
import PageTitle from "components/PageTitle";

;

const AboutPage = () => {
  return (
    <>
    
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto  w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle title="A Propos ACCIA" />
          <div className="flex md:flex-col flex-row font-manrope  gap-9 items-center justify-center max-w-[1081px] mt-5 mx-auto md:px-5 w-full">
            <Text
              className="sm:flex-1 leading-[30.00px] text-gray-900 text-xl w-[71%] sm:w-full"
              size="txtManropeRegular20Gray900"
            >
              Exercitation et laborum anim reprehenderit culpa duis mollit
              veniam labore dolor. Laboris adipisicing veniam labore sit duis id
              nostrud ullamco est qui. Ipsum ipsum nulla ut ut dolor eu et ex in
              laborum enim adipisicing.Exercitation occaecat culpa aliquip culpa
              aliquip anim anim duis. Lorem dolore aute et consequat sit ipsum
              adipisicing ad sit exercitation incididunt non exercitation. Dolor
              eiusmod exercitation amet proident nisi minim nostrud mollit nulla
              aliqua enim non dolore el
            </Text>
            <div className="h-[249px] relative w-[249px]">
              <div className="bg-gray-100 h-[249px] m-auto rounded-[124px] w-[249px]"></div>
              <Img
                className="absolute h-[135px] inset-[0] justify-center m-auto object-cover w-[65%]"
                src="images/img_image71.png"
                alt="imageFortySix"
              />
            </div>
          </div>







          <div className="grid grid-cols-2 lg:grid-cols-1 place-items-center font-manrope md:gap-10  items-center mt-[55px] mx-auto md:px-5 w-[90%]">
            <div>
            <TextComponent />
            </div>
            <div>
            
            <Text
              className="sm:flex-1 leading-[30.00px] text-gray-900 text-xl w-full sm:w-full"
              size="txtManropeRegular20Gray900"
            >
              Nostrud labore id voluptate sint cupidatat cupidatat nostrud fugiat
              qui cupidatat. Aliqua voluptate mollit minim non minim exercitation
              reprehenderit veniam est aliqua Lorem consectetur ex deserunt dolor
              ex laborum labore. Sunt ea cupidatat minim exercitation sunt tempor
              dolore anim elit duis ullamco ad pariatur adipisicing ullamco
              adipisicing aute eu cillum.{" "}
            </Text>
            </div>
          </div>

          <div className="bg-gray-50 flex flex-col font-manrope items-start justify-start md:ml-[0] ml-[195px] mr-[59px] mt-[91px] p-4 md:px-5 rounded-lg w-[83%] md:w-full">
            <div className="flex flex-col gap-3 justify-start mb-[22px] mt-0.5 w-[95%] md:w-full">
              <Features />

            </div>
          </div>


          <div className="bg-gray-50 flex flex-col font-manrope items-start justify-start md:ml-[0] ml-[195px] mr-[59px] mt-[91px] p-4 md:px-5 rounded-lg w-[83%] md:w-full">
            <div className="flex flex-col gap-3 justify-start mb-[22px] mt-0.5 w-[95%] md:w-full">
              <Text
                className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
                size="txtManropeBold24"
              >
                Address
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  className="h-8 md:mt-0 mt-1.5 w-8"
                  src="images/img_pin31.svg"
                  alt="pinThirtyOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] md:mt-0 mt-[9px] text-blue_gray-900 text-xl"
                  size="txtManropeRegular20"
                >
                  15 Av. Jean Jaurès, Tunis 1002
                </Text>
                <Img
                  className="h-8 md:ml-[0] ml-[94px] md:mt-0 mt-1.5 w-8"
                  src="images/img_call.svg"
                  alt="call"
                />
                <Text
                  className="ml-1.5 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-xl"
                  size="txtManropeRegular20"
                >
                  +216 58 456 120
                </Text>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[335px] w-[17%] md:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[180px] rounded-[22px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-1.5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    }
                    color="light_blue_900_01"
                    size="md"
                    variant="fill"
                  >
                    <div className="text-base text-left">Contacter Nous</div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="pl-40">
      <MapCard/>

      </div>
      <ReturnButton path={"/"}/>

    </>
  );
};

export default AboutPage;
