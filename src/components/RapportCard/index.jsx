import React, { useState } from "react";
import { Img, Text } from "components";
import { formatDate } from "utils";
import axios from "../../utils/index";

const RapportCard = (props) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const readDocumentClick = async (id) => {
  setIsDownloading(true);
  try {
    // Fetch the PDF file as a blob
    const response = await axios.get(`/api/admin/document/read/${id}`, {
      responseType: "blob",
    });

    // Create a URL for the blob
    const url = window.URL.createObjectURL(response.data);

    // Detect if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // For mobile devices, create a download link and trigger it
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'document.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      // For desktop, open the document in a new tab
      const newTab = window.open(url, "_blank");

      // Check if the new tab was successfully opened
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        console.error("Failed to open the document in a new tab.");
      }
    }
  } catch (error) {
    // Log and handle any errors that occur during the process
    console.error("Error while opening the document:", error);
  } finally {
    setIsDownloading(false);
  }
};

  const handleDownloadClick = async (id, nameDocs) => {
    setIsDownloading(true);
    try {
      const response = await axios.get(`/api/admin/document/download/${id}`, {
        responseType: "blob",
      });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      // Extract the file name from the Content-Disposition header
      const contentDisposition = response.headers["content-disposition"];
      let fileName = `${nameDocs}.pdf`;
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
        if (fileNameMatch.length === 2) {
          fileName = fileNameMatch[1];
        }
      }

      // Set the file name and trigger the download
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error while downloading the document:", error);
      alert("An error occurred while trying to download the document.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className={`relative ${props.className}`}>
        <div
          className={`flex flex-col items-center justify-start mb-[7px] w-full ${
            isDownloading ? "opacity-20" : ""
          }`}
        >
          <div className="flex flex-row gap-2 items-start justify-start w-full md:w-full">
            <Text
              className="mt-[3px] text-lg text-light_blue-900"
              size="txtLexendRegular18"
            >
              {props?.title.fr}
            </Text>
          </div>
          <div>
            <Img
              className="h-[212px] md:h-auto mt-[15px] object-cover rounded-[3px] w-full"
              alt="imageThirtyFour"
              src="images/img_image34_212x235.jpeg"
            />
          </div>
          <div className="grid grid-cols-2 items-center justify-start w-full mt-2">
            <div>
              <Text
                className="text-light_blue-900_9e text-xs"
                size="txtLexendRegular12"
              >
                {props?.updatedAt ? formatDate(props.updatedAt) : ""}
              </Text>
            </div>
            <div className="flex flex-row gap-2 justify-start">
              <Img
                className="h-9 rounded w-9 cursor-pointer"
                src="images/img_button42.svg"
                alt="buttonFortyTwo"
                onClick={() => readDocumentClick(props?._id)}
              />
              <Img
                className="h-9 rounded w-9"
                src="images/img_download.svg"
                alt="download"
                onClick={() =>
                  !isDownloading &&
                  handleDownloadClick(props?._id, props?.title.fr)
                }
                style={{
                  cursor: isDownloading ? "wait" : "pointer",
                  pointerEvents: isDownloading ? "none" : "auto",
                }}
              />
            </div>
          </div>
        </div>
        {isDownloading && (
          <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
};

export default RapportCard;

