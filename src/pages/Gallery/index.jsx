import React, { useEffect, useState } from "react";
import ReturnButton from "components/ReturnButton";
import GalleryCard from "components/GalleryCard";
import axios from "../../utils/index";
import Loading from "components/Loading";
import PageTitle from "components/PageTitle";


const GalleryPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("/api/admin/album");
        setData(response.data);
      } catch (error) {
        console.error("Error while fetching the gallery album:", error);
        setError("An error occurred while fetching the gallery album.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto pb-0.5 w-full">
      <div className="flex flex-col justify-start w-full">
        <PageTitle />

        <div className="font-lexend gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1111px] min-h-[auto] mt-[71px] mx-auto md:px-5 w-full">
          {data.map((item, index) => (
            <div key={index} className="p-2">
              <GalleryCard GalleryLink={item} />
            </div>
          ))}
        </div>
      </div>
      <ReturnButton path={"/"} />
    </div>
  );
};

export default GalleryPage;
