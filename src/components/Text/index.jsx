import React from "react";

const sizeClasses = {
  txtLexendBold40: "font-bold font-lexend",
  txtLexendRegular20Gray900: "font-lexend font-normal",
  txtManropeBold40: "font-bold font-manrope",
  txtManropeRegular14Bluegray900: "font-manrope font-normal",
  txtManropeRegular20: "font-manrope font-normal",
  txtLexendBold40Bluegray900: "font-bold font-lexend",
  txtLexendBold48: "font-bold font-lexend",
  txtManropeRegular11: "font-manrope font-normal",
  txtManropeRegular12: "font-manrope font-normal",
  txtManropeRegular14: "font-manrope font-normal",
  txtLexendRegular40: "font-lexend font-normal",
  txtManropeRegular16: "font-manrope font-normal",
  txtManropeRegular14WhiteA700: "font-manrope font-normal",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeBold20Gray300: "font-bold font-manrope",
  txtLexendRegular20Cyan900: "font-lexend font-normal",
  txtManropeBold24Gray900: "font-bold font-manrope",
  txtManropeRegular16Gray500: "font-manrope font-normal",
  txtManropeRegular14Gray500: "font-manrope font-normal",
  txtManropeRegular20WhiteA700: "font-manrope font-normal",
  txtLexendBold32Lightblue900a7: "font-bold font-lexend",
  txtLexendRegular12: "font-lexend font-normal",
  txtLexendBold52: "font-bold font-lexend",
  txtLexendBold32Bluegray900: "font-bold font-lexend",
  txtManropeRegular12Cyan900: "font-manrope font-normal",
  txtManropeRegular10: "font-manrope font-normal",
  txtLexendRegular18: "font-lexend font-normal",
  txtLexendBold32Lightblue900: "font-bold font-lexend",
  txtLexendBold40Lightblue500: "font-bold font-lexend",
  txtManropeRegular12Gray900: "font-manrope font-normal",
  txtManropeRegular12Gray700: "font-manrope font-normal",
  txtManropeRegular12Gray500: "font-manrope font-normal",
  txtLexendBold52Lightblue500: "font-bold font-lexend",
  txtManropeRegular16Gray900: "font-manrope font-normal",
  txtManropeBold14Bluegray800: "font-bold font-manrope",
  txtManropeBold20: "font-bold font-manrope",
  txtLexendSemiBold16: "font-lexend font-semibold",
  txtLexendBold20: "font-bold font-lexend",
  txtManropeRegular14Bluegray800: "font-manrope font-normal",
  txtLexendSemiBold14: "font-lexend font-semibold",
  txtManropeBold16: "font-bold font-manrope",
  txtManropeBold14: "font-bold font-manrope",
  txtManropeBold12: "font-bold font-manrope",
  txtLexendBold24: "font-bold font-lexend",
  txtLexendRegular20: "font-lexend font-normal",
  txtManropeBold10: "font-bold font-manrope",
  txtManropeBold14Gray900: "font-bold font-manrope",
  txtLexendBold200: "font-bold font-lexend",
  txtLexendBold29: "font-bold font-lexend",
  txtManropeBold18: "font-bold font-manrope",
  txtManropeRegular14Gray400: "font-manrope font-normal",
  txtLexendBold52WhiteA700: "font-bold font-lexend",
  txtManropeRegular20Lightblue900: "font-manrope font-normal",
  txtManropeBold20Lightblue900: "font-bold font-manrope",
  txtManropeRegular12Bluegray800: "font-manrope font-normal",
  txtManropeRegular14Lightblue900: "font-manrope font-normal",
  txtManropeRegular20Gray900: "font-manrope font-normal",
  txtManropeBold14Bluegray900: "font-bold font-manrope",
  txtManropeRegular24: "font-manrope font-normal",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeRegular11Gray500: "font-manrope font-normal",
  txtLexendBold32: "font-bold font-lexend",
  txtLexendBold20Gray900: "font-bold font-lexend",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
