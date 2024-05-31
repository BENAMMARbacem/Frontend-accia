import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[3px]" };
const variants = {
  fill: {
    light_blue_900: "bg-light_blue-900 text-white-A700",
    deep_purple_100: "bg-deep_purple-100 text-white-A700",
    white_A700: "bg-white-A700 text-light_blue-900",
    light_blue_200: "bg-light_blue-200",
    gray_50_01: "bg-gray-50_01 text-light_blue-900",
    light_blue_900_02: "bg-light_blue-900_02 text-white-A700",
    light_blue_900_01: "bg-light_blue-900_01 text-white-A700",
    light_blue_50: "bg-light_blue-50 text-light_blue-900",
  },
  outline: {
    light_blue_900_02:
      "border border-light_blue-900_02 border-solid text-light_blue-900_02",
  },
};
const sizes = { xs: "p-[3px]", sm: "p-[7px]", md: "p-[11px]", lg: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_900",
    "deep_purple_100",
    "white_A700",
    "light_blue_200",
    "gray_50_01",
    "light_blue_900_02",
    "light_blue_900_01",
    "light_blue_50",
  ]),
};

export { Button };
