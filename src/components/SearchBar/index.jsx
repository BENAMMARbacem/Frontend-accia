import React from "react";

import { Button, Img, Input } from "components";

const SearchBar = () => {
  return (
    <>
      <div className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full">
        <Input
          name="rechercherCounter"
          placeholder="Rechercher ..."
          className="font-manrope p-0 placeholder:text-gray-400 text-left text-sm w-full"
          wrapClassName="outline outline-[1px] outline-gray-500 w-[83%] md:w-full"
          shape="round"
          color="white_A700"
          size="md"
          variant="fill"
        ></Input>
        <div className="bg-light_blue-900 flex flex-col items-center justify-start p-2.5 rounded-br rounded-tr w-[17%] md:w-full">
          <Button   className="common-pointer cursor-pointer font-manrope min-w-[134px] text-center text-xs"
              shape="round"
              color="light_blue_900"
              variant="fill">Search</Button>
        </div>
      </div>
    </>
  );
};


export default SearchBar;
