
import { useNavigate } from "react-router-dom";

import { Text } from "components";
import PageTitle from "components/PageTitle";
import TextComponent from "components/TextComponent";
import ReturnButton from "components/ReturnButton";



const ReglesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend justify-start mx-auto  w-full">
        <div className="flex flex-col items-center w-full">
        </div>
        <PageTitle />
        <TextComponent  />
        <div className="flex flex-col font-manrope items-center mt-2 md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
            size="txtManropeRegular14"
          >
            Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
            sunt commodo anim minim laborum magna. Cillum amet id id cillum
            mollit magna incidi
            eiusmod labori
          </Text>
        </div>

        <TextComponent />

        <div className="flex flex-col font-manrope items-center mt-2 md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
            size="txtManropeRegular14"
          >
            Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
            sunt commodo anim minim laborum magna. Cillum amet id id cillum
            mollit magna incididunt culpa ea quis do consectetur reprehenderit
            ut elit.Dolore esse Lorem cupidatat deserunt ullamco ullamco dolor
        
          </Text>
        </div>
        <TextComponent  />
          
        <div className="flex flex-col font-manrope items-center mt-[11px] md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
            size="txtManropeRegular14"
          >
            Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
            sunt commodo anim minim laborum magna. Cillum amet id id cillum
            mollit magna incididunt culpa ea quis do consectetur reprehenderit
            ut elit.Dolore esse Lorem cupidatat deserunt ullamco ullamco dolor
            con
          </Text>
        </div>

<TextComponent/>
        <div className="flex flex-col font-manrope items-center mt-[11px] md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
            size="txtManropeRegular14"
          >
            Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
            sunt commodo anim minim laborum magna. Cillum amet id id cillum
            mollit magna incididunt culpa ea quis do consectetur reprehenderit

          </Text>
        </div>
<TextComponent/>
        <div className="flex flex-col font-manrope items-center mt-2 md:px-10 sm:px-5 px-[159px] w-full">
          <Text
            className="leading-[22.00px] text-gray-900 text-sm w-[97%] sm:w-full"
            size="txtManropeRegular14"
          >
            Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
            sunt commodo anim minim laborum magna. Cillum amet id id cillum
            mollit magna incididunt culpa ea quis do consectetur reprehenderit
            ut elit.Dolore esse Lorem cupidatat deserunt ullamco ullamco dolor

          </Text>
        </div>
        <div className="flex flex-col font-manrope items-end mt-[47px] md:px-10 sm:px-5 px-[59px] w-full">
        <ReturnButton path={"/"}/>
        </div>
        <div className="flex flex-col items-center mt-[42px] w-full">
        </div>
      </div>
    </>
  );
};

export default ReglesPage;
