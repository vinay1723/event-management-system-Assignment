import { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setEvent } from "./eventsSlice";

const wedding = {
  title: "chinnu wedding",
  date: "2024-03-09",
  location: "hyderabad",
  description:
    "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio wher you can enjoy the main night life in Barcelona.",
};

function Event({ event, id }) {
  const [select, setSelect] = useState(false);

  const dispacth = useDispatch();
  function handleSelectedMovie() {
    setSelect((select) => !select);
    dispacth(setEvent(event));
  }
  return (
    <div
      className={`relative flex flex-col ${
        select ? "ring-4 ring-offset-4 ring-cyan-500" : ""
      }  text-white  bg-[#212529] shadow-md bg-clip-border rounded-xl w-[280px] h-[370px]`}
      onClick={handleSelectedMovie}
    >
      <div className="relative h-56   overflow-hidden shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src={
            id
              ? `https://picsum.photos/id/${id + 1}/400/300`
              : "https://fastly.picsum.photos/id/705/400/400.jpg?hmac=17aJjeY4iQGsEpmQ0iUeYIm0SwDsotXmOtI2MH2g4LQ"
          }
          alt="card-image"
        />
      </div>
      <div className="px-6 py-2">
        <h5 className="block mb-2 font-sans text-base antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {event ? event.title : ""}
        </h5>
        <p className="block font-sans font[400] antialiased font-light leading-relaxed text-inherit text-sm">
          {event ? event.description : ""}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Button text={"subscribe"}></Button>
      </div>
    </div>
  );
}

export default Event;
