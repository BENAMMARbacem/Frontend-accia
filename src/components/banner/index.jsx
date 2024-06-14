import { Img } from "components";
import React from "react";

const Banner = (props) => {
  return (
    <>
      <section className="bg-light_blue-900_01 dark:bg-gray-900 border-solid border-2 border-light_blue-900_01 pt-4  ">
        <div className="flex flex-col-2 items-center px-2 py-2  ">
          <div className="w-40 h-40 lg:h-28 lg:w-28 lg:pb-5 rounded-full flex items-center justify-center " style={{ background: "white" }}>
            <div className="w-24 h-24 ml-18 lg:mx-4 lg:pt-6 ">
              <Img src="images/img_image34.png" alt="banner" />
            </div>
          </div>
          <div className="flex flex-col mx-auto ">
            <div className="flex flex-col-3  justify-between  items-center mb-2">
              <div className="text-5xl lg:text-xl  font-bold text-white	lg:text-[15px]" style={{
                color: "white"
              }}>ACCIA</div>
              <div className="lg:text-xs font-bold  text-center ml-2 mt-4 mb-2 lg:text-[10px]" dir="rtl" style={{
                color: "white" }}>
                <p className="text-white	" >
                  جمعية اطارات الرقابة و التفقد و التدقيق بالهياكل العمومية التونسية
                </p>
              </div>


              <div className="text-5xl   font-bold lg:text-[15px]	" style={{
                color: "white"
              }}>أكسيا </div>
            </div>
            <hr className="w-full h-0.5 mb-2  ml-2    bg-gray-100 border-0 rounded dark:bg-gray-700" />

            <div className="text-sm  lg:text-[9px] font-bold  lg:text-center ml-2" style={{
              color: "white"
            }}>
              ASSOCIATION DES CADRES DE CONTROLE DINSPECTION  D'AUDIT DANS LES STRUCTURES PUBLIQUES TUNISIENNES
                          </div>
          </div>

        </div>
  
      </section>
    </>
  );
};
export default Banner;
