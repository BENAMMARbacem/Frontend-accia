import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_300: "bg-gray-300 text-light_blue-900",
    blue_gray_50: "bg-blue_gray-50",
    green_A700: "bg-green-A700 shadow-bs text-white-A700",
    gray_100: "bg-gray-100 text-gray-400",
    white_A700: "bg-white-A700 text-gray-400",
  },
  underline: { gray_500: "border-b border-gray-500 text-gray-900" },
};
const shapes = {
  round: "rounded-bl rounded-br-none rounded-tl rounded-tr-none",
};
const sizes = { xs: "pb-[5px] pt-1 px-1", md: "pb-1.5 pt-2 px-1.5", xl: "p-3" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "md", "xl"]),
  variant: PropTypes.oneOf(["fill", "underline"]),
  color: PropTypes.oneOf([
    "gray_300",
    "blue_gray_50",
    "green_A700",
    "gray_100",
    "white_A700",
    "gray_500",
  ]),
};

export { Input };
