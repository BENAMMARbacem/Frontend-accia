import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import axios from "../../utils/index";
import Loading from "components/Loading";

const PostCard = (props) => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
const [isLoading,setIsLoading]=useState(false)
useEffect(() => {
  const fetchImage = async () => {
    const token = localStorage.getItem("token") || "";
    const config = {
      headers: { authorization: `Bearer ${token}` }
    };
    if (props.image && props.image.url) {
      try {
        setIsLoading(true)
        const response = await axios.get(`/api/admin/post/get-image/${props.image.publicID}`, {
          responseType: 'blob',
           ...config
        });

        const blob = response.data;
        const file = new File([blob], 'image', { type: blob.type });
        const fr = new FileReader();
        fr.onload =  () => {
          const res = fr.result;
           setUrl(res);
        };

        fr.readAsDataURL(file);
      } catch (error) {
        console.error("There was an error fetching the image!", error);
      }finally{
        setIsLoading(false)
      }
    }
  };

  fetchImage();
}, []);
if(isLoading){
  return <Loading/>
}
  return (
    <>


      <div className={props.className}>
      {/* <div className="border-solid border-2 border-indigo-200 shadow-lg"> */}
        <div className="flex flex-col items-center justify-start w-full p-2">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col items-start justify-start">
              <Text className="text-gray-900 text-xs" size="txtManropeBold12">
                {props?.title.fr}
              </Text>
              <Text
                className="text-[11px] text-gray-500"
                size="txtManropeRegular11Gray500"
              >
                {props?.createdAt}
              </Text>
            </div>
          </div>
          <Text
            className="leading-[20.00px] mt-[7px] text-gray-900 text-xs w-full"
            size="txtManropeRegular12Gray900"
          >
            {props?.description.fr.length > 30
              ? props?.description.fr.slice(0, 30) + "..."
              : props?.description.fr}
          </Text>
          <img
            className=" md:h-auto mt-3 object-cover rounded-xl w-full h-full items-stretch "
            alt="imageTwentyTwo"
            src={url}
                        />
          <div className="flex flex-row items-start justify-between mt-[17px] w-full">
            <Button
              className="common-pointer cursor-pointer font-manrope min-w-[134px] text-center text-xs"
              onClick={() => navigate(`/singlepostpage?id=${props.id}`)}
              shape="round"
              color="light_blue_900"
              size="sm"
              variant="fill"
            >
              voir plus
            </Button>
            <div className=" flex flex-row">
              {/* <Img
                className="h-4  mt-0.5 w-4"
                src="images/img_sharenetwork1.svg"
                alt="sharenetworkOne"
              /> */}
              <Text
                className="ml-[5px] mt-0.5 text-gray-500 text-xs"
                size="txtManropeRegular12Gray500"
              >
                {props?.views}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default PostCard;
