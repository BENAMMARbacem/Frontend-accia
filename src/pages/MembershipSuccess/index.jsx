
import {
  Button,
  CheckBox,
  Img,
  Input, Text
} from "components";
import PageTitle from "components/PageTitle";


const MembershipSuccessPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend justify-start mx-auto  w-full">
        <div className="flex flex-col items-center w-full">
        </div>
        <PageTitle className="flex flex-col md:ml-[0] ml-[206px] mt-24 md:px-5 relative w-[31%] sm:w-full" />
        <div className="flex flex-col font-manrope items-end mt-16 md:px-10 px-12 sm:px-5 w-full">
          <div className="bg-gray-50 flex flex-col items-start justify-end p-7 md:px-5 rounded-lg w-[89%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[9px] mt-1 w-[90%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[33%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-900"
                  size="txtManropeBold40"
                >
                  Adhésion
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
                    className="mt-[7px] text-blue_gray-900 text-xl"
                    size="txtManropeRegular20"
                  >
                    Montant et comment épargner
                  </Text>
                </div>
                <Button
                  className="border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center min-w-[326px] mt-2 rounded"
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
              <div className="h-[250px] md:mt-0 mt-[65px] relative w-[28%] md:w-full">
                <div className="absolute h-[250px] inset-[0] justify-center m-auto w-[98%]">
                  <Text
                    className="m-auto md:text-5xl text-[200px] text-light_blue-900"
                    size="txtLexendBold200"
                  >
                    40
                  </Text>
                  <Text
                    className="absolute bottom-[1%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-center text-light_blue-900 sm:text-xl w-max"
                    size="txtManropeBold24"
                  >
                    P A R M O I S
                  </Text>
                </div>
                <Text
                  className="absolute right-[0] text-2xl md:text-[22px] text-light_blue-900 sm:text-xl top-[12%]"
                  size="txtManropeBold24"
                >
                  DT
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-50_01 flex flex-col items-center justify-start mt-5 p-2 md:px-5 rounded-lg w-[89%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-[59px] items-start justify-between mb-[68px] w-[92%] md:w-full">
              <div className="flex flex-col gap-[27px] items-center justify-start w-[72%] md:w-full">
                <Input
                  name="container118"
                  placeholder="Pré-Adhesion terminé avec succes"
                  className="p-0 placeholder:text-white-A700 text-left text-sm w-full"
                  wrapClassName="flex rounded w-[99%]"
                  prefix={
                    <Img
                      className="h-6 mr-3.5 my-auto"
                      src="images/img_c_check_3.svg"
                      alt="C check 3"
                    />
                  }
                  color="green_A700"
                  size="xl"
                  variant="fill"
                ></Input>
                <div className="font-lexend h-[344px] sm:h-[432px] md:h-[538px] relative w-full">
                  <div className="h-[344px] sm:h-[432px] md:h-[538px] m-auto w-full">
                    <div className="absolute bg-light_blue-900_e5 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[27px] sm:px-5 rounded-lg shadow-bs5 w-[99%]">
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
                      className="absolute bottom-[3%] h-[103px] right-[0] rounded-[18px]"
                      src="images/img_triangle1.svg"
                      alt="triangleOne"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[3%] h-[103px] right-[9%] rounded-[18px]"
                    src="images/img_triangle1_gray_50_01.svg"
                    alt="triangleOne_One"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[110px] w-[23%] md:w-full">
                <CheckBox
                  className="text-base text-left text-red-600_01"
                  inputClassName="mr-[5px]"
                  name="payementencore"
                  id="payementencore"
                  label="Payement encore non validé"
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
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[109px] mr-1.5 mt-[17px] rounded"
            leftIcon={
              <Img
                className="h-5 mr-1.5 my-px"
                src="images/img_arrowdown.svg"
                alt="arrow_down"
              />
            }
            shape="round"
            color="light_blue_50"
            size="md"
            variant="fill"
          >
            <div className="text-base text-left">Retour</div>
          </Button>
        </div>
        <div className="flex flex-col items-center mt-[50px] w-full">
        </div>
      </div>
    </>
  );
};

export default MembershipSuccessPage;
