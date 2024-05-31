import React from "react";

import { Text } from "components";

const CategoryCard = (props) => {
  return (
    <>
      <div className="flex flex-col bg-gray-50 p-2">
        <Text
          className=" md:ml-[0] mt-0.5 text-blue_gray-900 text-sm"
          size="txtManropeBold14Bluegray900"
        >
          {props?.title}
        </Text>
        <Text
          className=" md:ml-[0] text-gray-900 text-sm"
          size="txtManropeRegular14"
        >
          {props?.subhead}
        </Text>
      </div>
    </>
  );
};

CategoryCard.defaultProps = { title: "Categorie 2", subhead: "5 Document" };

export default CategoryCard;
