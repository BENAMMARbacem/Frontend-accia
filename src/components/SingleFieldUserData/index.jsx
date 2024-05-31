import React from "react";

import { Text } from "components";

const SingleFieldUserData = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="mt-0.5 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
          size="txtManropeBold24Gray900"
        >
          {props?.label}
        </Text>
        <Text
          className="mb-0.5 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
          size="txtManropeRegular24"
        >
          {props?.value}
        </Text>
      </div>
    </>
  );
};

SingleFieldUserData.defaultProps = {
  label: "Telephone",
  value: "+216 12 345 678",
};

export default SingleFieldUserData;
