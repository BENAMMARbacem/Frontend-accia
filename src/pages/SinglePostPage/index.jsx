// export default SinglePostPagePage;
import { Img, Text } from "components";
import OwnerComment from "components/OwnerComment";
import ReturnButton from "components/ReturnButton";
import UserComments from "components/UserComments";
import { useLocation } from "react-router-dom";
import axios, { formatDate } from "../../utils/index";
import { useEffect, useState } from "react";
import Loading from "components/Loading";


const SinglePostPagePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [data, setData] = useState({});
  const [image, setImage] = useState('');
  const [loadingPost, setLoadingPost] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const [postComments,setPostComments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingPost(true);
      const token = localStorage.getItem("token") || ""
      const config = {
        headers: { authorization: `Bearer ${token}` }
      };
        const response = await axios.get(`/api/admin/post/${id}`,config);
        setData(response.data);
        setPostComments(response.data.AllComments);
        }
       catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }finally{
        setLoadingPost(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPostImage = async () => {
      if (data && data.image && data.image.publicID) {
        try {
          setLoadingImage(true);
          const response = await axios.get(
            `/api/admin/post/get-image/${data.image.publicID}`,
            { responseType: "blob" }
          );
          const blob = response.data;
          const file = new File([blob], "image", { type: blob.type });
          const fr = new FileReader();

          fr.onload = () => {
            const res = fr.result;
            setImage(res);
          };

          fr.readAsDataURL(file);
        } catch (error) {
          console.error("Erreur lors de la récupération de l'image:", error);
        } finally {
          setLoadingImage(false);
        }
      }
    };

    if (data && Object.keys(data).length !== 0) {
      fetchPostImage();
    }
  }, [data]);

  if (loadingImage||loadingPost) {
    return <Loading />;
  }
  
  return (
    <>
      <div className="flex flex-col font-lexend items-center justify-start mx-auto lg:mx-0 w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="">
            <Img
              className="flex font-manrope max-w-[1099px] mt-4 mx-auto md:px-5 w-full"
              src={image}
              alt="imageThirtyFive"
            />
            <Text
              className="flex font-manrope max-w-[1099px] mt-6 mx-auto md:px-5 w-full text-teal-900 text-xl"
              size="txtLexendSemiBold14"
            >
              {data.title && data.title.fr ? data.title.fr : "Titre non disponible"}
            </Text>
            <Text
              className="flex font-manrope max-w-[1099px] mt-4 mx-auto md:px-5 w-full text-gray-500 text-sm"
              size="txtManropeRegular14Gray500"
            >
              {data.createdAt ? formatDate(data.createdAt) : "Date non disponible"}
            </Text>
            <Text
              className="leading-[22.00px] text-gray-900 text-sm flex font-manrope max-w-[1099px] mt-6 mx-auto md:px-5 w-full"
              size="txtManropeRegular14"
            >
              {data.description && data.description.fr ? data.description.fr : "Titre non disponible"}

            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-manrope md:gap-5 max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full">
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-2">
                <Img
                  className="h-7 w-7"
                  src="images/img_offer.svg"
                  alt="offer"
                />
                <Text
                  className="md:ml-[0] ml-[3px] md:mt-0 mt-1.5 text-light_blue-900 text-sm"
                  size="txtManropeRegular14Lightblue900"
                >
                  {data.Likes && data.Likes ? data.Likes.length : "Titre non disponible"}
                </Text>
              </div>
              <div className="flex flex-row gap-2">
                <Img
                  className="h-7 md:ml-[0] ml-[17px] w-7"
                  src="images/img_share1.svg"
                  alt="shareOne"
                />
                <Text
                  className="md:ml-[0] ml-[3px] md:mt-0 mt-[7px] text-light_blue-900 text-sm"
                  size="txtManropeRegular14Lightblue900"
                >
                  Partager
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[193px] mr-[1162px] mt-[26px] text-gray-500 text-sm"
            size="txtManropeRegular14Gray500"
          >
            Commentaires
          </Text>
          <div className="flex flex-col font-manrope md:gap-5 max-w-[1099px] mt-[41px] mx-auto md:px-5 w-full">
            <OwnerComment />


            {postComments && postComments.map((props, index) => (
      <>
      <UserComments key={`PostCard${index}`} {...props} />
      <hr className="pt-5 pb-5  border-none" />
      </> 
    ))}


          </div>
        </div>
        <ReturnButton path="/" />
      </div>
    </>
  );
};

export default SinglePostPagePage;
