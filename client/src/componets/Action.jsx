import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setAction, setEvent } from "./eventsSlice";
import { updateEvent } from "./eventsSlice";
import { createEvent } from "./eventsSlice";
function Action({ setOperation }) {
  const selectedEvent = useSelector((state) => state.events.selectedEvent);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [location, setLocation] = useState(
    selectedEvent ? selectedEvent.location : ""
  );
  const dispatch = useDispatch();
  const [date, setDate] = useState(selectedEvent ? selectedEvent.date : "");
  const action = useSelector((state) => state.events.action);
  const user = useSelector((state) => state.user.user);
  console.log(action);
  async function handleSubmit(e) {
    e.preventDefault();

    const event =
      action === "create"
        ? {
            user: user._id,
            title: title,
            date: date,
            location: location,
            description: description,
          }
        : {
            user: user._id,
            _id: selectedEvent._id,
            title: title,
            date: date,
            location: location,
            description: description,
          };
    switch (action) {
      case "create":
        dispatch(createEvent(event));
        dispatch(setAction(""));
        setOperation("");
        break;
      case "update":
        dispatch(updateEvent(event));
        dispatch(setAction(""));
        setOperation("");
        break;
    }
  }

  //   if (res.status === "success") {
  //     action === "update"
  //       ? dispatch(setEvent(res.data))
  //       : dispatch(createEvent(res.data));
  //     dispatch(setAction(""));
  //   } else {
  //     alert("something went wrong");
  //   }
  // }

  return (
    <div className="w-full mt-5 flex justify-center">
      <form
        className="h-1/2  mt-[10px] text-base   w-3/4 border-b-zinc-600 "
        onSubmit={handleSubmit}
      >
        <h1 className="uppercase font-semibold  bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-2xl mb-7">
          {action}
        </h1>
        <ul className="flex flex-col gap-6  text-stone-500">
          <li className="flex flex-col gap-2">
            <label htmlFor="name">title:</label>
            <input
              type="text"
              id="name"
              value={title}
              placeholder="name"
              onChange={(e) => setTitle(e.target.value)}
              className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            />
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="description">description:</label>
            <textarea
              type="text"
              id="description"
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-3/4 h-[80px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            ></textarea>
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="cpassword">Location:</label>
            <input
              type="text"
              id="cpassword"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            />
          </li>
          <li className="flex flex-col gap-2">
            <label htmlFor="password">Date:</label>
            <input
              type="text"
              id="password"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-3/4 h-[40px] px-4 py-2 focus:outline-none font-normal text-stone-700  bg-white rounded-md"
            />
          </li>
          <li className="flex justify-between mr-[150px]">
            {" "}
            <button className="hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 text-base px-3 py-2 rounded-full">
              {`${action}`}
            </button>
            <button
              className="hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-stone-100 text-base px-3 py-2 rounded-full"
              onClick={() => {
                dispatch(setAction("")), setOperation("");
              }}
            >
              Back
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Action;
