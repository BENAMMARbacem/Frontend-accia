import { Img } from "components";
import React from "react";

const Banner = (props) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 border-solid border-2 border-light_blue-900_01 pt-4 ">
        <div className="mb-0 font-extrabold text-center font-bold text-light_blue-900_01 text-4xl pb-4 lg:text-sm	">
          Association des cadres de contrôle d’inspection et d’audit
        </div>
        <div className="flex flex-col-3 justify-between items-center px-2 py-2 bg-light_blue-900_01	 ">
          <div className="lg:ml-4">
            <h1 className="px-2 py-2 max-w-2xl font-bold mb-4 font-extrabold tracking-tight leading-none text-3xl lg:text-sm lg:font-bold lg:text-center" style={{ color: "white" }}>
              POUR UNE GESTION <br/> PUBLIQUE PERFORMANTE
            </h1>
          </div>
          <div className="w-40 h-40 lg:h-28 lg:w-28 lg:pb-5 rounded-full flex items-center justify-center " style={{ background: "white" }}>

          <div className="w-24 h-24 ml-18 lg:mx-4 lg:pt-6 ">
            <Img src="images/img_image34.png" alt="banner" />
          </div>
          </div>
          <div className="lg:mr-4">
            <h1 className="px-2 py-2 max-w-2xl font-bold mb-4 font-extrabold tracking-tight leading-none text-3xl lg:text-sm lg:font-bold lg:text-center" style={{ color: "white" }}>
              من أجل رقابة فاعلة وتصرف<br /> عمومي ناجح
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
