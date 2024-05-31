import React from "react";

import { Text } from "components";

const PageTitle = ({title}) => {
  return (
      <Text
        className="flex font-manrope  max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-2xl"
        size="txtLexendSemiBold14"
      >
        {title}
      </Text>
    
  );
};

PageTitle.defaultProps = { title: "Titre de Page" };

export default PageTitle;
