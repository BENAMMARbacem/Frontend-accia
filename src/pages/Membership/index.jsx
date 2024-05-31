import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import InputField from "components/InputField";
import PageTitle from "components/PageTitle";
import ReturnButton from "components/ReturnButton";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MembershipPage = () => {
  const navigate = useNavigate();

  const inputFieldPropList = [
    {},
    { placeholder: "Votre Prenom", label: "Prenom" },
    {
      icon: "images/img_lock_gray_900.svg",
      label: "Email",
      placeholder: "Votre Email",
    },
    {
      icon: "images/img_call_gray_900.svg",
      label: "Telephone",
      placeholder: "+216 ",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend justify-start mx-auto  w-full">
        <div className="flex flex-col items-center w-full">
        </div>
        <PageTitle/>
        <div className="flex flex-col font-manrope items-center mt-16 md:px-10 px-12 sm:px-5 w-full">
          <div className="bg-gray-50 flex flex-col items-start justify-end p-7 md:px-5 rounded-lg w-[89%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[9px] mt-1 w-[90%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[33%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-900"
                  size="txtManropeBold40"
                >
                  Adération
                </Text>
                <div className="flex flex-row gap-[9px] items-start justify-start mt-10 w-[67%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_pin31_blue_gray_500.svg"
                    alt="pinThirtyOne"
                  />
                  <Text
                    className="mt-1 text-blue_gray-900 text-xl"
                    size="txtManropeRegular20"
                  >
                    Droits d’inscription{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-start mt-[11px] w-[76%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_pin31_blue_gray_500.svg"
                    alt="pinThirtyOne_One"
                  />
                  <Text
                    className="mt-1 text-blue_gray-900 text-xl"
                    size="txtManropeRegular20"
                  >
                    Devoirs d’engagement
                  </Text>
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-start mt-[11px] w-[76%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_pin31_blue_gray_500.svg"
                    alt="pinThirtyOne_Two"
                  />
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtManropeRegular20"
                  >
                    Statut de l’association
                  </Text>
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-start mt-2.5 w-[49%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_pin31_blue_gray_500.svg"
                    alt="pinThirtyOne_Three"
                  />
                  <Text
                    className="mt-[3px] text-blue_gray-900 text-xl"
                    size="txtManropeRegular20"
                  >
                    Droit interne
                  </Text>
                </div>
                <div className="flex flex-row gap-[9px] items-end justify-start mt-2.5 w-full">
                  <Img
                    className="h-8 mb-[3px] w-8"
                    src="images/img_pin31_blue_gray_500.svg"
                    alt="pinThirtyOne_Four"
                  />
                  <Text
                    className="mt-[5px] text-blue_gray-900 text-xl"
                    size="txtManropeRegular20"
                  >
                    Montant 
                  </Text>
                </div>
                <Button
                  className="border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center w-full mt-2 rounded lg:w-sm"
                  leftIcon={
                    <Img
                      className="h-4 mt-px mb-0.5 mr-1.5"
                      src="images/img_filter_check.svg"
                      alt="Filter check"
                    />
                  }
                  shape="round"
                  color="gray_50_01"
                  size="sm"
                  variant="fill"
                >
                  <div className="text-left text-sm">Voir Tous</div>
                </Button>
              </div>
              <div className="h-14 md:mt-0 mt-[65px] relative w-[28%] md:w-full">
                <div className="absolute  inset-[0] justify-center m-auto w-[98%]">
                  <Text
                    className="m-auto md:text-5xl text-[200px] text-light_blue-900"
                    size="txtLexendBold200"
                  >
                    40
                  </Text>
                  <Text
                    className="absolute  inset-x-[0] mx-auto text-2xl md:text-[22px] text-center text-light_blue-900 sm:text-xl w-max"
                    size="txtManropeBold24"
                  >
                    P A R M O I S
                  </Text>
                </div>
                <Text
                  className="absolute right-[0] text-2xl md:text-[22px] text-light_blue-900 sm:text-xl "
                  size="txtManropeBold24"
                >
                  DT
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-50_01 flex flex-col items-center justify-start mt-[54px] p-[17px] md:px-5 rounded-lg  md:w-full">
            <div className="flex flex-col items-start justify-start mb-3.5 w-[99%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
                size="txtManropeBold24"
              >
                <>Formulaire d&#39;adhésion</>
              </Text>
              <div className="md:gap-5 gap-9 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-10 w-full">
                {inputFieldPropList.map((props, index) => (
                  <React.Fragment key={`InputField${index}`}>
                    <InputField
                      className="bg-white-A700 flex flex-1 flex-col items-start justify-end outline outline-[1px] outline-gray-500 p-[11px] rounded w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[1020px] mt-[29px] w-[11%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[122px] rounded-[22px]"
                  onClick={() => navigate("/membershipsuccess")}
                  leftIcon={
                    <Img
                      className="h-6 mb-px mr-1.5"
                      src="images/img_save.svg"
                      alt="save"
                    />
                  }
                  color="light_blue_900_01"
                  size="md"
                  variant="fill"
                >
                  <div className="text-base text-left">Envoyer</div>
                </Button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col items-center mt-[50px] w-full">
        </div>
      </div>
      <ReturnButton path={"/"}/>
    </>
  );
};

export default MembershipPage;
