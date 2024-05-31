import React, { useEffect, useState  } from "react";
import PageTitle from "components/PageTitle";
import PostCard from "components/PostCard";
import ReturnButton from "components/ReturnButton";
import SearchBar from "components/SearchBar";
import axios from "../../utils/index";
import Loading from "components/Loading";


const PostspagePage = () => {
    const [isLoading, setIsLoading] = useState(false);

  const [postCardPropList, setPostCardPropList] = useState([])
  
  useEffect(() => {
    
    const fetchPost=async ()=>{
      const token = localStorage.getItem("token") || ""
      const config = {
        headers: { authorization: `Bearer ${token}` }
      };
    try{
      setIsLoading(true)
      const response=await axios.get(`/api/admin/post/`,config)
      setPostCardPropList(response.data);
    }catch(error){
      console.log("error while fetching post")
    }finally{
      setIsLoading(false)
    }
   
  }
  fetchPost()
}, []);

  if (isLoading ) {
    return <Loading />;
  }
  return (
    <>
      <div className=" flex flex-col font-lexend items-center justify-start mx-auto lg:mx-0  w-full">
        <div className="flex flex-col justify-start w-full">

          <PageTitle />
          <SearchBar />
          <div className="font-manrope md:gap-5 gap-[53px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1099px] min-h-[auto] mt-[34px] mx-auto md:px-5 w-full">
            {postCardPropList.map((props, index) => (
              <React.Fragment key={`PostCard${index}`}>
                <PostCard {...props} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <ReturnButton path={"/"} />
      </div>
    </>
  );
};

export default PostspagePage;
