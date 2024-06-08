import PageTitle from "components/PageTitle";
import EventCardSection from "components/EventSectionCard";
import ReturnButton from "components/ReturnButton";
import React, { useEffect, useState } from "react";
import axios from '../../utils/index';
import Loading from "components/Loading";


const EventsPagePage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchEvent = async () => {
      setisLoading(true);

      try {
      const token = localStorage.getItem("token") || "";
      const config = {
        headers: { authorization: `Bearer ${token}` },
      };
        const response = await axios.get("/api/admin/event", config);
        setEvents(response.data)

      } catch (e) {
        setError(e)
      } finally {
        setisLoading(false)
      }

    }
    fetchEvent()
   
  }, []);
if(isLoading){
  return <Loading/>
}
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
      <div className="flex flex-col justify-start w-full">
        <PageTitle title={"Tous les evenements"}/>
        <div className="flex flex-col gap-4">
          {events.map((event, index) => (
            <React.Fragment key={`EventCardSection${index}`}>
            <EventCardSection {...event} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <ReturnButton path="/" />
    </div>
  );
};

export default EventsPagePage;

