
import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img, Line, Text
} from "components";
import Footer from "components/Footer";
import ReturnButton from "components/ReturnButton";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProfilePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto  w-full">
        <div className="flex flex-col justify-start w-full">
          <Text
            className="md:ml-[0] ml-[206px] mt-[90px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtLexendBold52"
          >
            Salut Cher Adhérant
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[210px] mr-[1111px] mt-[5px] w-[9%]" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[206px] mt-[107px] md:px-5 w-[77%] md:w-full">
            <Img
              className="h-[136px] sm:h-auto object-cover rounded w-[10%] md:w-full"
              src="images/img_image130.png"
              alt="image130"
            />
            <div className="flex flex-col items-start justify-start ml-6 md:ml-[0] w-[13%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[75px] rounded-[14px]"
                leftIcon={
                  <Img
                    className="h-3 mt-px mb-0.5 mr-1"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                }
                color="light_blue_900"
                size="sm"
                variant="fill"
              >
                <div className="font-manrope text-[11px] text-left">Membre</div>
              </Button>
              <Text
                className="mt-[7px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtLexendBold24"
              >
                Anna Jones
              </Text>
              <Text
                className="mt-1 text-gray-700 text-xs"
                size="txtManropeRegular12Gray700"
              >
                Depuis 28/07/2021
              </Text>
              <Button
                className="common-pointer border border-solid border-teal-900 cursor-pointer flex items-center justify-center min-w-[136px] mt-5 rounded-lg"
                onClick={() => navigate("/editprofilepage")}
                leftIcon={
                  <Img
                    className="h-3 mt-px mb-0.5 mr-1"
                    src="images/img_edit_teal_900.svg"
                    alt="edit"
                  />
                }
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <div className="!text-teal-900 font-manrope text-[11px] text-left">
                  Modifier{" "}
                </div>
              </Button>
            </div>
            <Img
              className="h-[63px] sm:h-auto md:ml-[0] ml-[743px] md:mt-0 mt-3.5 object-cover w-[8%] md:w-full"
              src="images/img_image.png"
              alt="image_Three"
            />
          </div>
          <div className="flex md:flex-col flex-row font-manrope gap-[21px] items-center justify-end md:ml-[0] ml-[206px] mt-[37px] md:px-5 w-[77%] md:w-full">
            <Text className="text-gray-900 text-xl" size="txtManropeBold20">
              Evénements attendus
            </Text>
            <Line className="bg-gray-400 h-px mb-[11px] md:mt-0 mt-[15px] w-[79%]" />
          </div>
          <div className="flex flex-row font-manrope md:gap-10 gap-[864px] items-center justify-end md:ml-[0] ml-[206px] mt-2.5 md:px-5 w-[77%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtManropeRegular16Gray900"
            >
              Conference annuelle
            </Text>
            <Text
              className="text-base text-gray-500 text-right"
              size="txtManropeRegular16Gray500"
            >
              02/01/2022
            </Text>
          </div>
          <div className="flex flex-row font-manrope md:gap-10 gap-[864px] items-center justify-end md:ml-[0] ml-[206px] mt-[13px] md:px-5 w-[77%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtManropeRegular16Gray900"
            >
              Conference annuelle
            </Text>
            <Text
              className="text-base text-gray-500 text-right"
              size="txtManropeRegular16Gray500"
            >
              02/01/2022
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-manrope gap-[21px] items-center justify-end md:ml-[0] ml-[206px] mt-[55px] md:px-5 w-[77%] md:w-full">
            <Text className="text-gray-900 text-xl" size="txtManropeBold20">
              Documents consultés
            </Text>
            <Line className="bg-gray-400 h-px mb-[11px] md:mt-0 mt-[15px] w-[79%]" />
          </div>
          <div className="flex flex-row font-manrope md:gap-10 gap-[950px] items-start justify-end md:ml-[0] ml-[206px] mt-2.5 md:px-5 w-[77%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtManropeRegular16Gray900"
            >
              Rapport 1
            </Text>
            <Text
              className="text-base text-gray-500 text-right"
              size="txtManropeRegular16Gray500"
            >
              02/01/2022
            </Text>
          </div>
          <div className="flex flex-row font-manrope md:gap-10 gap-[975px] items-center justify-end md:ml-[0] ml-[206px] mt-[11px] md:px-5 w-[77%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtManropeRegular16Gray900"
            >
              Guide
            </Text>
            <Text
              className="text-base text-gray-500 text-right"
              size="txtManropeRegular16Gray500"
            >
              02/01/2022
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-lexend gap-[59px] items-start justify-center max-w-[1080px] mt-[115px] mx-auto md:px-5 w-full">
            <div className="h-[345px] sm:h-[432px] md:h-[538px] relative w-[72%] md:w-full">
              <div className="h-[345px] sm:h-[432px] md:h-[538px] m-auto w-full">
                <div className="absolute bg-light_blue-900_e5 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[27px] sm:px-5 rounded-lg shadow-bs5 w-[99%]">
                  <div className="flex flex-col gap-[34px] items-start justify-start mb-[52px] w-[98%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                        size="txtLexendBold40"
                      >
                        Carte Membre{" "}
                      </Text>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                        size="txtLexendBold40"
                      >
                        2024
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row font-manrope gap-[57px] items-start justify-start w-[88%] md:w-full">
                      <Img
                        className="h-[139px] sm:h-auto object-cover w-[28%] md:w-full"
                        src="images/img_image71.png"
                        alt="imageSeventyOne"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start w-[63%] md:w-full">
                        <div className="flex flex-row gap-[92px] items-center justify-start w-[47%] md:w-full">
                          <Text
                            className="text-gray-300 text-xl"
                            size="txtManropeBold20Gray300"
                          >
                            Nom{" "}
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtManropeRegular20WhiteA700"
                          >
                            Flen
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[62px] items-center justify-start w-[63%] md:w-full">
                          <Text
                            className="text-gray-300 text-xl"
                            size="txtManropeBold20Gray300"
                          >
                            Prenom
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtManropeRegular20WhiteA700"
                          >
                            Ben Foulen
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[84px] items-start justify-start w-full">
                          <Text
                            className="mb-0.5 text-gray-300 text-xl"
                            size="txtManropeBold20Gray300"
                          >
                            Email{" "}
                          </Text>
                          <Text
                            className="mt-0.5 text-white-A700 text-xl"
                            size="txtManropeRegular20WhiteA700"
                          >
                            flenbenfoulen@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[35px] items-start justify-start w-3/4 md:w-full">
                          <Text
                            className="mt-0.5 text-gray-300 text-xl"
                            size="txtManropeBold20Gray300"
                          >
                            Telephone{" "}
                          </Text>
                          <Text
                            className="mb-0.5 text-white-A700 text-xl"
                            size="txtManropeRegular20WhiteA700"
                          >
                            +216 12 345 678
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[103px] right-[0] rounded-[18px]"
                  src="images/img_triangle1.svg"
                  alt="triangleOne"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[103px] right-[9%] rounded-[18px]"
                src="images/img_triangle1_gray_50_01.svg"
                alt="triangleOne_One"
              />
            </div>
            <div className="flex md:flex-1 flex-col font-manrope items-start justify-start md:mt-0 mt-[35px] w-[23%] md:w-full">
              <CheckBox
                className="text-base text-left text-light_green-900"
                inputClassName="mr-[5px]"
                name="payementvalid"
                id="payementvalid"
                label="Payement  validé"
              ></CheckBox>
              <Text
                className="ml-1 md:ml-[0] mt-[21px] text-base text-cyan-900"
                size="txtManropeBold16"
              >
                Insctructions
              </Text>
              <Text
                className="leading-[20.00px] ml-1 md:ml-[0] mt-2.5 text-cyan-900 text-xs w-[99%] sm:w-full"
                size="txtManropeRegular12Cyan900"
              >
                Labore enim qui sunt eu eiusmod id aliqua. Culpa adipisicing
                nisi ea minim sunt proiden
              </Text>
              <Button
                className="border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center min-w-[242px] ml-1 md:ml-[0] mt-[33px] rounded"
                leftIcon={
                  <Img
                    className="h-4 mt-px mb-[3px] mr-1.5"
                    src="images/img_print.svg"
                    alt="Print"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <div className="text-left text-sm">Imprimer ma carte</div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[242px] ml-1 md:ml-[0] mt-[9px] rounded"
                leftIcon={
                  <Img
                    className="h-4 mt-px mb-[3px] mr-1.5"
                    src="images/img_reply.svg"
                    alt="reply"
                  />
                }
                shape="round"
                color="light_blue_900"
                size="sm"
                variant="fill"
              >
                <div className="text-left text-sm">Telecharger en PDF</div>
              </Button>
            </div>
          </div>
<ReturnButton path={"/"}/>
          <Footer className="bg-gray-300 flex items-center justify-center mt-[50px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProfilePagePage;
