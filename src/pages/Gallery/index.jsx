import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "components/PageTitle";
import SearchBar from "components/SearchBar";
import ReturnButton from "components/ReturnButton";
import GalleryCard from "components/GalleryCard";

// Placeholder component for displaying loading state
const Loading = () => <div>Loading...</div>;

const GalleryPage = () => {
  const data = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto pb-0.5 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center mt-[110px] mx-auto md:px-5 w-full" />

          <div className="font-lexend gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1111px] min-h-[auto] mt-[71px] mx-auto md:px-5 w-full">
            {data.map((item, index) => (
              <div key={index} className="p-2">
                {/* <img
                  src={item.imageLink}
                  alt={`Gallery Item ${index + 1}`}
                  className="w-full h-auto rounded shadow-lg"
                /> */}
              <GalleryCard/>
              </div>
            ))}
          </div>

          <div className="flex flex-row font-manrope md:gap-10 items-start justify-between max-w-[1132px] mt-[67px] mx-auto md:px-5 w-full"></div>
        </div>
        <ReturnButton path={"/"} />
      </div>
    </>
  );
};

export default GalleryPage;
