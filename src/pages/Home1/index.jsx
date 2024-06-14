import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import InputField from "components/InputField";
import InputMessageFiels from "components/InputMessageFiels";
import PostCard from "components/PostCard";
import RapportCard from "components/RapportCard";
import Features from "components/Features";
import TextComponent from "components/TextComponent";
import axios from "../../utils/index";
import Loading from "components/Loading";
import HomeCarrousel from "components/Carrousel";
const Home1Page = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  const [postCardPropList, setPostCardPropList] = useState([]);
  const [rapportCardPropList, setRapportCardPropList] = useState([]);
  const [isEventSpecial, setIsEventSpecial] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  useEffect(() => {
    const getEventAndPost = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token") || "";

        const config = {
          headers: { authorization: `Bearer ${token}` },
          params: {
            pageNumber: 0,
          },
        };

        const docsResponse = await axios.get("/api/admin/document", config);
        setRapportCardPropList(docsResponse.data);
        const EventResponse = await axios.get(
          "/api/admin/event/has-special-event",
          config
        );
        setIsEventSpecial(EventResponse.data);
        const postResponse = await axios.get("/api/admin/post", config);
        setPostCardPropList(postResponse.data);
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setIsLoading(false);
      }
    };

    getEventAndPost();
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      const token = localStorage.getItem("token") || "";
      const config = {
        headers: { authorization: `Bearer ${token}` },
      };
    
      if (
        isEventSpecial &&
        isEventSpecial.event &&
        isEventSpecial.event.length > 0 &&
        isEventSpecial.event[0].image
      ) {
        try {
          setIsLoading2(true);
          const response = await axios.get(
            `/api/admin/event/get-image/${isEventSpecial.event[0].image.publicID}`,
            {
              responseType: "blob",
              ...config,
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
        } catch (error) {
          console.error("There was an error fetching the image!", error);
        } finally {
          setIsLoading2(false);
        }
      }
    };

    if (isEventSpecial) {
      fetchImage();
    }
  }, [isEventSpecial]);

  const inputFieldPropList = [
    {},
    { placeholder: "Votre Prenom", label: "Prenom" },
    {
      icon: "images/img_lock_gray_900.svg",
      label: "Email",
      placeholder: "Votre Email",
    },
    {
      icon: "images/img_call_gray_900.svg",
      label: "Telephone",
      placeholder: "+216 ",
    },
  ];
  if (isLoading||isLoading2) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col justify-end w-full">
{/* carrosel */}
<div >
      <HomeCarrousel/>
</div>
        <div className="bg-gray-50 flex flex-col items-center justify-end md:ml-[0] ml-[3px] p-[70px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[43px] items-start justify-start max-w-[1191px] mt-[0px] w-full">
            <div className="flex md:flex-1 flex-col gap-[41px] items-start justify-start w-[76%] md:w-full">
              <Text
                className="leading-[50.00px] text-5xl sm:text-[38px] md:text-[44px] text-light_blue-900_01 w-full"
                size="txtLexendBold48"
              >
                <>
                  ACCIA est la 1ére organisation à but non lucratif en Tunisie
                  dédiée à l&#39;audit financier.
                </>
              </Text>
              <Button
                className="common-pointer cursor-pointer font-manrope min-w-[192px] rounded-lg shadow-bs4 text-center text-lg"
                onClick={() => navigate("/membership")}
                color="light_blue_900"
                size="md"
                variant="fill"
              >
                Joindre ACCIA
              </Button>
            </div>
            <Img
              className="md:flex-1 h-[212px] sm:h-auto object-cover rounded-[3px] w-[21%] md:w-full"
              src="images/img_image34.png"
              alt="imageThirtyFour"
            />
          </div>
        </div>
        <div className="ml-9 mr-9 ">
          <Features />
        </div>
        <div className="bg-gray-50 flex flex-col font-manrope items-center justify-end mt-8 md:px-10 sm:px-5 w-full ">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-8 mb-8 max-w-[1212px]  mx-auto w-full">
            <div className="flex flex-col items-start justify-start">
              <TextComponent />{" "}
              <Text
                className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[35px] text-blue_gray-900 text-xl w-full"
                size="txtManropeRegular20"
              >
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
                veniam cupidatat ullamco ullamco et. Aliqua tempor do
                consectetur reprehenderit Lorem aliqua commodo occaecat
                deserunt. Do eiusmod incididunt
              </Text>
              <Button
                className="common-pointer text-white border
                          border-deep_purple-A400 border-solid cursor-pointer
                            min-w-[242px] md:ml-[0] ml-[3px] mt-7 rounded-lg text-center text-lg"
                onClick={() => navigate("/about")}
                color="light_blue_900"
                size="sm"
                variant="fill"
              >
                Voir plus{" "}
              </Button>
            </div>
            <Img
              className="h-[344px] md:h-auto object-cover rounded-lg"
              src="images/img_image199.png"
              alt="image199"
            />
          </div>
        </div>
        {rapportCardPropList.length > 0 ? (
          <TextComponent title={"Documents récents"} />
        ) : (
          ""
        )}

        <List
          className="grid lg:grid-cols-2 lg:gap-y-1 gap-x-4 lg:gap-x-1 grid-cols-4 mx-14 lg:mx-auto mt-4"
          orientation="horizontal"
        >
          {rapportCardPropList.map((props, index) => (
            <React.Fragment key={`RapportCard${index}`}>
              <RapportCard
                className="bg-gray-50_01 flex flex-1 flex-col items-center justify-end p-[9px] rounded w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
      
        {/* TODO: //Gallerie here */}
        {postCardPropList.length > 0 ? (
          <TextComponent title={"Publication récents"} />
        ) : (
          ""
        )}

        <List
          className="grid lg:grid-cols-2 lg:gap-y-1 gap-x-4 lg:gap-x-1 grid-cols-4 mx-14 lg:mx-auto  mt-4"
          orientation="horizontal"
        >
          {postCardPropList.map((props, index) => (
            <React.Fragment key={`PostCard${index}`}>
              <PostCard
                className=" bg-gray-50_01 flex flex-col items-center justify-start p-6 sm:px-5 rounded shadow-bs2 w-full mx-0 lg:ml-0"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
        

        {isEventSpecial.hasSpecialEvent ? (
          <>
            <TextComponent title={isEventSpecial?.event?.[0]?.title?.fr} />

            {/* <img
              className=" lg:mx-0 p-5  mt-5 lg:mt-0 object-cover h-72 w-full "
              // src={url}
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"

              alt="imageSixtyEight"
            /> */}
            <img
            
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image_event"
              className="object-scale-down h-full w-full p-2 "
            />
            <div className="flex md:flex-col flex-row font-manrope gap-[27px] items-center justify-center ml-16 mt-5 lg:ml-0 lg:mx-0 w-[28%] md:w-full">
              <Button
                className="common-pointer cursor-pointer min-w-[138px] rounded-lg text-center text-sm"
                onClick={() => navigate("/eventspage")}
                color="light_blue_900"
                size="sm"
                variant="fill"
              >
                Voir plus
              </Button>
            </div>
          </>
        ) : null}

        <div className="bg-light_blue-900_01 flex flex-col font-lexend items-center justify-end ml-1 md:ml-[0] mt-[18px] p-[52px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1194px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-3.5 w-[39%] md:w-full">
              <Text
                className="ml-2.5 md:ml-[0] sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                size="txtLexendBold52WhiteA700"
              >
                Partenaires
              </Text>
              <div className="flex flex-col font-manrope gap-6 items-start justify-start ml-2.5 md:ml-[0] w-[98%] md:w-full">
                <Text
                  className="leading-[26.00px] text-base text-white-A700 w-full"
                  size="txtManropeRegular16"
                >
                  Incididunt ex irure ad non Lorem culpa fugiat exercitation
                  ullamco esse minim tempor quis l
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
              <div className="gap-1 sm:gap-5 grid sm:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_82x82.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_5.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_6.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_7.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_8.png"
                    alt="imageTwentyTwo"
                  />
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-lg w-full">
                  <Img
                    className="h-[82px] md:h-auto object-cover w-[82px]"
                    src="images/img_image22_9.png"
                    alt="imageTwentyTwo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TextComponent title="Contacter Nous" />
        <div className="bg-gray-50 flex flex-col font-manrope items-start justify-start max-w-[1197px] mt-8 mx-auto p-4 md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-3 justify-start mb-[22px] mt-0.5 w-[95%] md:w-full">
            <Text
              className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
              size="txtManropeBold24"
            >
              Address
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex items-center">
                <Img
                  className="h-8 md:mt-0 mt-1.5 w-8"
                  src="images/img_pin31.svg"
                  alt="pinThirtyOne"
                />
                <Text
                  className="ml-1.5 md:ml-[0] md:mt-0 mt-[9px] text-blue_gray-900 text-xl"
                  size="txtManropeRegular20"
                >
                  15 Av. Jean Jaurès, Tunis 1002
                </Text>
              </div>
              <div className="flex items-center">
                <Img
                  className="h-8 md:ml-[0] ml-[94px] md:mt-0 mt-1.5 w-8"
                  src="images/img_call.svg"
                  alt="call"
                />
                <Text
                  className="ml-1.5  text-blue_gray-900 text-lg"
                  size="txtManropeRegular20"
                >
                  +216 58 456 120
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[335px] w-[17%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[180px] rounded-[22px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-1.5"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  }
                  color="light_blue_900_01"
                  size="md"
                  variant="fill"
                >
                  <div className="text-base text-left">Contacter Nous</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start max-w-[1197px] mt-9 mx-auto p-[17px] md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-8 items-end justify-start mb-6 w-[99%] md:w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-light_blue-900 sm:text-xl"
                size="txtManropeBold24"
              >
                Formulaire de contact
              </Text>
              <div className="md:gap-5 gap-9 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {inputFieldPropList.map((props, index) => (
                  <React.Fragment key={`InputField${index}`}>
                    <InputField
                      className="bg-white-A700 flex flex-1 flex-col items-start justify-end outline outline-[1px] outline-gray-500 p-[11px] rounded w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
              <InputMessageFiels className="bg-white-A700 flex flex-col md:gap-10 gap-[69px] justify-end outline outline-[1px] outline-gray-500 rounded w-full" />
            </div>
            <div className="flex flex-col items-center justify-start w-[11%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[122px] rounded-[22px]"
                leftIcon={
                  <Img
                    className="h-6 mb-px mr-1.5"
                    src="images/img_save.svg"
                    alt="save"
                  />
                }
                color="light_blue_900_01"
                size="md"
                variant="fill"
              >
                <div className="text-base text-left">Envoyer</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
