import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import PageTitle from "components/PageTitle";
import RapportCard from "components/RapportCard";
import SearchBar from "components/SearchBar";
import ReturnButton from "components/ReturnButton";
import axios from "../../utils/index"
import Loading from "components/Loading";



const LibraryPage = () => {
  const navigate = useNavigate();
const [isLoading,setIsLoading]=useState(false)
const [rapportCardPropList, SetexportCardPropList] = useState([]);
useEffect(() => {
  const fetchDocument = async () => {
  try {
    setIsLoading(true)
            const token = localStorage.getItem("token") || "";
            const config = {
              headers: { authorization: `Bearer ${token}` },
            };
      const response = await axios.get(`/api/admin/document`, config);
      SetexportCardPropList(response.data);
    } catch (error) {
      console.log("error while reading the documents")
    }
    finally{
      setIsLoading(false);
    }
  };
  fetchDocument();
}, []);
if(isLoading){
  return <Loading/>
}
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto pb-0.5 w-full">
        <div className="flex flex-col justify-start w-full">
          <PageTitle />
          <SearchBar className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-center  mt-[110px] mx-auto md:px-5 w-full" />

          <div className="font-lexend gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1111px] min-h-[auto] mt-[71px] mx-auto md:px-5 w-full">
            {rapportCardPropList.map((props, index) => (
              <React.Fragment key={`RapportCard${index}`}>
                <RapportCard
                  className="bg-gray-50_01 flex flex-1 flex-col items-center justify-start p-[9px] rounded w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row font-manrope md:gap-10 items-start justify-between max-w-[1132px] mt-[67px] mx-auto md:px-5 w-full"></div>
        </div>
        <ReturnButton path={"/"} />
      </div>
    </>
  );
};

export default LibraryPage;
