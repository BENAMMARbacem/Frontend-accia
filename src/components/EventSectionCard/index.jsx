import { Button, Img, Text } from "components";
import PageTitle from "components/PageTitle";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { formatDate, formatTime } from "../../utils/index"; // Assurez-vous que le chemin est correct

export default function EventCardSection(props) {
  const [url, setUrl] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      setisLoading(true);
      try {
        if (props.image && props.image.url) {
          const response = await axios.get(
            `/api/admin/event/get-image/${props.image.publicID}`,
            {
              responseType: "blob",
            }
          );
          const blob = response.data;
          const file = new File([blob], "image", { type: blob.type });
          const fr = new FileReader();

          fr.onload = () => {
            const res = fr.result;
            setUrl(res);
          };

          fr.readAsDataURL(file);
        }
      } catch (e) {
      } finally {
        setisLoading(false);
      }
    };
    fetchImage();
  }, []);
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        <Img
          className="flex font-manrope  max-w-[1099px] mt-4 mx-auto md:px-5 w-full"
          src={url}
          alt="imageSixtyEight"
        />
        <Text
          size="txtManropeBold14"
          className="flex font-manrope  max-w-[1099px] mt-2 mx-auto md:px-5 w-full text-light_blue-900 text-lg"
        >
          {props?.title.fr}{" "}
        </Text>
      </div>

      <div className="grid grid-cols-3  lg:grid-cols-1 md:flex-col flex-row font-manrope gap-3.5 lg:gap-0 lg:gap-y-3.5 items-center justify-center max-w-[1096px] mt-2 mx-auto md:px-5 w-full">
        <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg w-full md:w-full">
          <div className="flex flex-col gap-[11px] items-start justify-start w-full">
            <Text
              className="text-light_blue-900 text-sm"
              size="txtManropeBold14"
            >
              Date et Horaire
            </Text>
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex">
                <Img
                  className="h-4 w-4"
                  src="images/img_clock1.svg"
                  alt="clockOne"
                />
                <Text
                  className="ml-1 text-blue_gray-900 text-xs"
                  size="txtManropeRegular12"
                >
                  {props.H_Start ? formatTime(props.H_Start) : ""}-{" "}
                  {props.H_Fin ? formatTime(props.H_Fin) : ""}
                </Text>
              </div>
              <div className="flex">
                <Img
                  className="h-4 ml-[31px] w-4"
                  src="images/img_clock1_blue_gray_500.svg"
                  alt="clockOne_One"
                />
                <Text
                  className="ml-1 text-blue_gray-900 text-xs"
                  size="txtManropeRegular12"
                >
                  {props.date ? formatDate(props.date) : ""}{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start w-2/3">
              <Img
                className="h-4 w-4"
                src="images/img_pin31_blue_gray_500_16x16.svg"
                alt="pinThirtyOne"
              />
              <Text
                className="ml-1 text-blue_gray-900 text-xs"
                size="txtManropeRegular12"
              >
                {props.Location ? props.Location : ""}{" "}
              </Text>
            </div>
            <div className="flex flex-row  gap-1.5 items-center justify-end md:ml-[0]  w-full">
              <div className="flex flex-col items-center justify-start w-1/2 ">
                <Button
                  className="common-pointer border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center min-w-[80px] rounded-[12px]"
                  onClick={() => {
                    if (props._id) {
                      navigate(`/singleeventpage?id=${props._id}`, {
                        state: { ...props, imageUrl: url },
                      });
                    }
                  }}
                  leftIcon={
                    <Img
                      className="h-4 mb-px mr-1"
                      src="images/img_view.svg"
                      alt="View"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  <div className="text-[11px] text-left">Voir plus</div>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-1/2">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[82px] rounded-[12px]"
                  leftIcon={
                    <Img
                      className="h-4 mb-px mr-1"
                      src="images/img_bag.svg"
                      alt="bag"
                    />
                  }
                  color="light_blue_900_01"
                  size="xs"
                  variant="fill"
                >
                  <div className="text-[11px] text-left">Reserver</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 bg-gray-50 flex flex-col gap-[9px] items-start justify-start p-4 rounded-lg h-full">
          <Text className="text-light_blue-900 text-sm" size="txtManropeBold14">
            Details
          </Text>
          <Text
            className="leading-[20.00px] mb-1 text-blue_gray-900 text-xs w-full"
            size="txtManropeRegular12"
          >
            {props.description ? props.description.fr : ""}{" "}
          </Text>
        </div>
      </div>
    </>
  );
}
