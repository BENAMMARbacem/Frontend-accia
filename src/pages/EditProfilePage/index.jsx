
import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line, Text
} from "components";
import TextComponent from "components/TextComponent";
import ReturnButton from "components/ReturnButton";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EditProfilePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col justify-start mx-auto lg:mx-0 lg:ml-0 lg:pl-0 w-full">
        <div className="flex flex-col items-center w-full">
          <TextComponent />
          <div className="flex flex-col font-manrope items-center mt-16  px-12 pl-40 lg:px-6 w-full">
            <div className="flex flex-col items-start justify-start  w-full">
              <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 items-start justify-start w-full ">
                <Img
                  className="h-full object-cover rounded"
                  src="images/img_image130_136x156.png"
                  alt="image130"
                />
                <div className="flex flex-col gap-3 items-start justify-start ml-2  w-full">
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
                    <div className="text-[11px] text-left">Membre</div>
                  </Button>

                  <div className="flex lg:flex-col lg:gap-y-2‹ items-start justify-start gap-5 w-full">
                    <div>
                      <Button
                        className="!text-deep_purple-A400 border border-deep_purple-A400 border-solid cursor-pointer min-w-[115px] text-center text-xs"
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Modifier votre photo
                      </Button>

                    </div>
                    <div>
                      <Button
                        className="!text-deep_purple-A400 border border-deep_purple-A400 border-solid cursor-pointer min-w-[115px] text-center text-xs"
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Modifier votre photo
                      </Button>

                    </div>
                  </div>
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtManropeRegular12Gray700"
                  >
                    Format autorisés PNG ou JPG
                    <hr className="w-full h-0.5  bg-blue-900 border-0 rounded dark:bg-gray-700" />
                  </Text>
                </div>
                <Img
                  className="h-[63px] sm:h-auto md:ml-[0] ml-64  mt-3 object-cover  lg:hidden "
                  src="images/img_image.png"
                  alt="image_Three"
                />
              </div>
              <div className="flex flex-col items-start justify-end mt-6 w-full">
                <Text
                  className="text-blue_gray-800 text-sm"
                  size="txtManropeBold14Bluegray800"
                >
                  Nom
                </Text>
                <Input
                  name="textfield"
                  placeholder="Flen"
                  className="p-0 placeholder:text-gray-400 text-left text-sm w-full"
                  wrapClassName="rounded w-full"
                  color="gray_100"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-end mt-4 w-full">
                <Text
                  className="text-blue_gray-800 text-sm"
                  size="txtManropeBold14Bluegray800"
                >
                  Prenom
                </Text>
                <Input
                  name="textfield_One"
                  placeholder="Ben Foulen"
                  className="p-0 placeholder:text-gray-400 text-left text-sm w-full"
                  wrapClassName="rounded w-full"
                  color="gray_100"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-end mt-4 w-full">
                <Text
                  className="text-blue_gray-800 text-sm"
                  size="txtManropeBold14Bluegray800"
                >
                  Telephone
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder="+216 12 345 678"
                  className="p-0 placeholder:text-gray-400 text-left text-sm w-full"
                  wrapClassName="rounded w-full"
                  color="gray_100"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start  mt-6">
                <div className="flex flex-col items-center justify-start p-3 rounded">
                  <Button
                    className="common-pointer cursor-pointer min-w-sm rounded-lg text-center text-sm"
                    onClick={() => navigate("/profilepage")}
                    color="light_blue_900"
                    size="sm"
                    variant="fill"
                  >
                    Sauvegarder
                  </Button>
                </div>

              </div>
            </div>
          </div>






          <div className="flex flex-row lg:flex-col  font-lexend  items-start justify-between max-w-5xl mt-3 mb-16 mx-auto  w-full lg:max-w-96 lg:mx-0">
            <div className=" relative w-full lg:h-32">
              <div className="h-auto  w-full ">
                <div className="absolute bg-light_blue-900_e5 flex mt-7 flex-col h-max inset-[0] items-center justify-center m-auto p-4 rounded-lg shadow-bs5 w-full lg:mt-1 lg:h-48 lg:justify-start">
                  <div className="flex flex-col gap-5 items-start justify-start  w-full lg:gap-1">
                    <div className="flex flex-row lg:flex-row mb-3 items-center justify-between w-full">
                      <Text
                        className="text-[40px] lg:text-xl text-white-A700"
                        size="txtLexendBold40"
                      >
                        Carte Membre{" "}
                      </Text>
                      <Text
                        className="lg:text-xl text-[40px] text-white-A700"
                        size="txtLexendBold40"
                      >
                        2024
                      </Text>
                    </div>
                    <div className="flex  flex-row font-manrope gap-12 items-start justify-start w-full lg:gap-4 lg:grid lg:grid-cols-3">
                      <Img
                        className="h-auto object-cover w-1/4 lg:w-full   "
                        src="images/img_image71.png"
                        alt="imageSeventyOne"
                      />
                      <div className="grid grid-cols-1 gap-2 items-start justify-start w-full lg:col-span-2 lg:gap-0">
                        <div className="grid grid-cols-2  items-center justify-start w-full ">
                          <Text
                            className="text-gray-300 text-xl lg:text-base "
                            size="txtManropeBold20Gray300"
                          >
                            Nom{" "}
                          </Text>
                          <Text
                            className="text-white-A700 text-xl lg:text-base"
                            size="txtManropeRegular20WhiteA700"
                          >
                            Flen
                          </Text>
                        </div>
                        <div className="grid grid-cols-2  items-center justify-start w-full lg:text-base">
                          <Text
                            className="text-gray-300 text-xl lg:text-base"
                            size="txtManropeBold20Gray300"
                          >
                            Prenom
                          </Text>
                          <Text
                            className="text-white-A700 text-xl lg:text-base"
                            size="txtManropeRegular20WhiteA700"
                          >
                            Ben Foulen
                          </Text>
                        </div>

                        <div className="grid grid-cols-2  items-center justify-start w-full">
                          <Text
                            className="mt-0.5 text-gray-300 text-xl lg:text-base"
                            size="txtManropeBold20Gray300"
                          >
                            Telephone{" "}
                          </Text>
                          <Text
                            className="mb-0.5 text-white-A700 text-xl lg:text-base"
                            size="txtManropeRegular20WhiteA700"
                          >
                            12345678
                          </Text>
                        </div>
                        <div className="flex flex-col-2 mt-7 text-sm items-center justify-end w-full">
                          <Text
                            className=" text-gray-300 text-sm font-light  "
                            size="txtManropeBold20Gray300"
                          >
                            expirer le : {" "}
                          </Text>
                          <Text
                            className="ml-2 text-white-A700 text-sm  font-light"
                            size="txtManropeRegular20WhiteA700"
                          >
                            31-12-2024
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div className="flex  flex-col  lg:grid lg:grid-rows-2 font-manrope items-start justify-start ml-5 lg:mt-28 w-1/4 lg:mx-0 mt-2 lg:items-center lg:w-full">
              <div>

                <div className="flex items-center ">                <CheckIcon className="h-6 w-6 text-green-800" />
                  <Text
                    className="ml-1  mt-6 lg:mt-3 text-lg  text-green-800"
                    size="txtManropeBold16"
                  >
                    paiement  valide
                  </Text></div>
                  <div className="flex items-center hidden">                <XMarkIcon className="h-6 w-6 text-red-600" />
                  <Text
                    className="ml-1  mt-6 lg:mt-3 text-lg  text-red-600"
                    size="txtManropeBold16"
                  >
                    paiement non valide
                  </Text></div>
                <Text
                  className="ml-1  mt-6 lg:mt-3 text-base text-cyan-900"
                  size="txtManropeBold16"
                >
                  Insctructions
                </Text>
              </div>
              <div>
                <Text
                  className="leading-[20.00px] ml-1 lg:mt-1 mt-2.5 text-cyan-900 text-xs w-full lg:w-full"
                  size="txtManropeRegular12Cyan900"
                >
                  Labore enim qui sunt eu eiusmod id aliqua. Culpa adipisicing
                  nisi ea minim sunt proiden
                </Text>
              </div>


              <div className="lg:flex lg:justify-between">


                <Button
                  className="cursor-pointer flex items-center justify-center min-w-24 ml-1  mt-2 rounded-lg"
                  leftIcon={
                    <Img
                      className="h-4 mt-px mb-2 mr-1.5"
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
                <Button
                  className="border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center min-w-24 ml-1  mt-2 rounded-lg"
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
              </div>

            </div>
          </div>
        </div>
      </div>
      <ReturnButton path={"/"}/>

    </>
  );
};

export default EditProfilePagePage;
