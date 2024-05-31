
import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";
import SearchBar from "components/SearchBar";
import ReturnButton from "components/ReturnButton";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ActivitiesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Text
            className="md:ml-[0] ml-[205px] mt-[90px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtLexendBold52"
          >
            Activitées
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[210px] mr-[1111px] mt-[5px] w-[9%]" />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center max-w-[1098px] mt-[51px] mx-auto md:px-5 w-full" />
          <Text
            className="leading-[30.00px] md:ml-[0] ml-[193px] mt-[69px] text-gray-900 text-xl w-[76%] sm:w-full"
            size="txtManropeRegular20Gray900"
          >
            Exercitation et laborum anim reprehenderit culpa duis mollit veniam
            labore dolor. Laboris adipisicing veniam labore sit duis id nostrud
            ullamco est qui. Ipsum ipsum nulla ut ut dolor eu et ex in laborum
            enim adipisicing.Exercitation occaecat culpa aliquip culpa aliquip
            anim anim duis. Lorem dolore aute et consequat sit ipsum adipisicing
            ad sit exercitation incididunt non exercitation. Dolor eiusmod
            exercitation amet proident nisi minim nostrud mollit nulla aliqua
            enim non dolore el
          </Text>
          <div className="bg-gray-50 flex flex-col items-center justify-start max-w-[1098px] mt-[34px] mx-auto p-2 md:px-5 rounded-lg w-full">
            <div className="flex md:flex-col flex-row gap-[57px] items-end justify-start mb-[11px] mt-3.5 w-[98%] md:w-full">
              <div className="flex flex-col font-lexend gap-[15px] items-end justify-start mb-1 w-[12%] md:w-full">
                <div className="h-[118px] relative w-[118px]">
                  <div className="bg-gray-300_66 h-[118px] m-auto rounded-[50%] w-[118px]"></div>
                  <Img
                    className="absolute h-[42px] inset-[0] justify-center m-auto w-[42px]"
                    src="images/img_lowvision1.svg"
                    alt="lowvisionOne"
                  />
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtLexendBold32"
                >
                  Activité
                </Text>
              </div>
              <Text
                className="leading-[30.00px] md:mt-0 mt-[13px] text-gray-900 text-xl w-[83%] sm:w-full"
                size="txtManropeRegular20Gray900"
              >
                Officia eu est elit do fugiat aute consequat laboris tempor amet
                ipsum ad sint ex ea fugiat elit velit veniam. Minim id qui culpa
                sunt dolore aliqua anim laboris irure velit aliqua nostrud in
                esse. Consectetur sunt consequat labore deserunt officia ut
                reprehenderit anim ullamco ipsum do in minim est dolore fugiat
                ea exercitation.Minim enim ullamco fugiat aliquip id laboris
                eiusmod adipisicing dolore exercitation. Duis eiusmod
                exercitation magna amet do eiusmod eu proident
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-manrope gap-[55px] items-end justify-end md:ml-[0] ml-[230px] mt-[25px] md:px-5 w-[73%] md:w-full">
            <Text
              className="leading-[30.00px] md:mt-0 mt-[13px] text-light_blue-900 text-xl w-[83%] sm:w-full"
              size="txtManropeRegular20Lightblue900"
            >
              Officia eu est elit do fugiat aute consequat laboris tempor amet
              ipsum ad sint ex ea fugiat elit velit veniam. Minim id qui culpa
              sunt dolore aliqua anim laboris irure velit aliqua nostrud in
              esse. Consectetur sunt consequat labore deserunt officia ut
              reprehenderit anim ullamco ipsum do in minim est dolore fugiat ea
              exercitation.Minim enim ullamco fugiat aliquip id laboris eiusmod
              adipisicing dolore exercitation. Duis eiusmod exercitation magna
              amet do eiusmod eu proident
            </Text>
            <div className="flex flex-col font-lexend gap-[15px] items-end justify-start mb-1 w-[12%] md:w-full">
              <div className="h-[118px] relative w-[118px]">
                <div className="bg-gray-300_66 h-[118px] m-auto rounded-[50%] w-[118px]"></div>
                <Img
                  className="absolute h-[42px] inset-[0] justify-center m-auto w-[42px]"
                  src="images/img_lowvision1_light_blue_900.svg"
                  alt="lowvisionOne_One"
                />
              </div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
                size="txtLexendBold32Lightblue900"
              >
                Activité
              </Text>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col items-center justify-start max-w-[1098px] mt-6 mx-auto p-2 md:px-5 rounded-lg w-full">
            <div className="flex md:flex-col flex-row gap-[57px] items-end justify-start mb-[11px] mt-3.5 w-[98%] md:w-full">
              <div className="flex flex-col font-lexend gap-[15px] items-end justify-start mb-1 w-[12%] md:w-full">
                <div className="h-[118px] relative w-[118px]">
                  <div className="bg-gray-300_66 h-[118px] m-auto rounded-[50%] w-[118px]"></div>
                  <Img
                    className="absolute h-[42px] inset-[0] justify-center m-auto w-[42px]"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtLexendBold32"
                >
                  Activité
                </Text>
              </div>
              <Text
                className="leading-[30.00px] md:mt-0 mt-[13px] text-gray-900 text-xl w-[83%] sm:w-full"
                size="txtManropeRegular20Gray900"
              >
                Officia eu est elit do fugiat aute consequat laboris tempor amet
                ipsum ad sint ex ea fugiat elit velit veniam. Minim id qui culpa
                sunt dolore aliqua anim laboris irure velit aliqua nostrud in
                esse. Consectetur sunt consequat labore deserunt officia ut
                reprehenderit anim ullamco ipsum do in minim est dolore fugiat
                ea exercitation.Minim enim ullamco fugiat aliquip id laboris
                eiusmod adipisicing dolore exercitation. Duis eiusmod
                exercitation magna amet do eiusmod eu proident
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-manrope gap-[55px] items-end justify-end md:ml-[0] ml-[230px] mt-[23px] md:px-5 w-[73%] md:w-full">
            <Text
              className="leading-[30.00px] md:mt-0 mt-[13px] text-light_blue-900 text-xl w-[83%] sm:w-full"
              size="txtManropeRegular20Lightblue900"
            >
              Officia eu est elit do fugiat aute consequat laboris tempor amet
              ipsum ad sint ex ea fugiat elit velit veniam. Minim id qui culpa
              sunt dolore aliqua anim laboris irure velit aliqua nostrud in
              esse. Consectetur sunt consequat labore deserunt officia ut
              reprehenderit anim ullamco ipsum do in minim est dolore fugiat ea
              exercitation.Minim enim ullamco fugiat aliquip id laboris eiusmod
              adipisicing dolore exercitation. Duis eiusmod exercitation magna
              amet do eiusmod eu proident
            </Text>
            <div className="flex flex-col font-lexend gap-[15px] items-end justify-start mb-1 w-[12%] md:w-full">
              <div className="h-[118px] relative w-[118px]">
                <Img
                  className="absolute bottom-[15%] h-6 right-[16%] w-6"
                  src="images/img_quotes1.svg"
                  alt="quotesOne"
                />
                <div className="absolute bg-gray-300_66 h-[118px] inset-[0] justify-center m-auto rounded-[50%] w-[118px]"></div>
                <Img
                  className="absolute h-[42px] inset-[0] justify-center m-auto w-[42px]"
                  src="images/img_television_light_blue_900.svg"
                  alt="television"
                />
              </div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
                size="txtLexendBold32Lightblue900"
              >
                Activité
              </Text>
            </div>
          </div>
          <ReturnButton path={"/node_modules"} />
        </div>
      </div>
    </>
  );
};

export default ActivitiesPage;
