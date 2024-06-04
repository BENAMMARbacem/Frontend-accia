import React, { useEffect, useState } from "react";
import axios from "../../utils/index";
import { Img, Input } from "components";
import { useLocation } from "react-router-dom";

const OwnerComment = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const CreateComment = async () => {
    const inputCommentValue = document.getElementById("inputComment").value;
    const data = {
      text: inputCommentValue,
      postId: id,
    };
    const token = localStorage.getItem("token");
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    try {
      await axios.post(`api/admin/comment`, data, config);
    } catch (error) {
      console.log("error while write the comment ");
    }
  };

  const idUser = "665524d1465974a083b8ef69"; // localStorage.getItem("id");
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    let isMounted = true; // Track mounted state

    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/admin/users/profile/${idUser}`);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();

    return () => {
      isMounted = false; // Cleanup function to update mounted state
    };
  }, [idUser]);

  useEffect(() => {
    let isMounted = true; // Track mounted state

    const fetchUserImage = async () => {
      if (data && data.profilePhoto) {
        if (
          data.profilePhoto.url ===
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        ) {
          if (isMounted) {
            setImage(data.profilePhoto.url);
          }
        } else {
          try {
            const response = await axios.get(
              `/api/admin/users/profile-image/${data.profilePhoto.publicId}`,
              { responseType: "blob" }
            );
            const blob = response.data;
            const file = new File([blob], "image", { type: blob.type });
            const fr = new FileReader();
            fr.onload = () => {
              if (isMounted) {
                const res = fr.result;
                setImage(res);
              }
            };
            fr.readAsDataURL(file);
          } catch (error) {
            console.error("Error fetching user image:", error);
          }
        }
      }
    };
    fetchUserImage();

    return () => {
      isMounted = false; // Cleanup function to update mounted state
    };
  }, [data]);

  return (
    <>
      <div className="flex flex-col-2 justify-start mb-[33px] w-full">
        <div className="flex flex-row-2  items-center justify-start w-1/6">
          <div className="bg-light_blue-100 flex flex-col h-9 items-center justify-start rounded-[50%] w-9">
            {image == null ? (
              <Img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                className="h-9 md:h-auto rounded-[50%] w-9"
                alt="r"
              />
            ) : (
              <Img className="h-9  rounded-[50%] w-9" alt="r" src={image} />
            )}
          </div>
        </div>
        <Input
          name="textareaThree"
          id="inputComment"
          placeholder="Ajouter un commentaire"
          className="!placeholder:text-gray-950 !text-gray-950 font-manrope p-0 text-left text-sm w-full"
          wrapClassName="flex  outline outline-[1px] outline-gray-500 rounded w-[94%]"
          suffix={
            <div>
              <button
                onClick={CreateComment}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                commenter
              </button>
            </div>
          }
          size="xl"
          variant="fill"
        ></Input>
      </div>
    </>
  );
};

OwnerComment.defaultProps = {
  avatar: "images/img_rectangle.png",
  username: "User Name",
};

export default OwnerComment;
