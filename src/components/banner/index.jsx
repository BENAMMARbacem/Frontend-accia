import { Img } from "components";
import React from "react";

const Banner = (props) => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 border-solid border-2 border-blue-300 ">
        <div className="mb-0 font-extrabold text-center">
          Association des cadres de contrôle d’inspection et d’audit
        </div>
        <div className="flex flex-col-3 justify-between items-center max-w-screen-xl px-2 py-2	 ">
          <div className="ml-12 lg:ml-2">
            <h1 className="max-w-2xl mb-4 font-extrabold tracking-tight leading-none  dark:text-white">
              POUR UNE GESTION PUBLIQUE PERFORMANTE{" "}
            </h1>
          </div>
          <div className="w-24 h-24 ml-18 lg:mx-4 lg:pt-6 ">
            <Img src="images/img_image34.png" alt="banner" />
          </div>
          <div className=" lg:ml-6">
            <h1 className="ltr max-w-2xl mb-4 font-extrabold tracking-tight leading-none  dark:text-white">
              من أجل رقابة فاعلة وتصرف عمومي ناجح
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
