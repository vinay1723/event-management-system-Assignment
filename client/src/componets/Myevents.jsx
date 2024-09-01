import Event from "./Event";
import { useSelector, useDispatch } from "react-redux";
import { setAction } from "./eventsSlice";
import { getEvents } from "./eventsSlice";
import Action from "./Action";

import { deleteEvent } from "./eventsSlice";
import { useState } from "react";

function Myevents() {
  const [operation, setOperation] = useState("");
  const events = useSelector(getEvents);
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) => state.events.selectedEvent);

  function handleDeleteEvent() {
    dispatch(deleteEvent(selectedEvent));
  }

  function handleOperation(operation1) {
    if (operation1 === "create") {
      dispatch(setAction("create"));
      setOperation("create");
    } else {
      dispatch(setAction("update"));
      setOperation("update");
    }
  }

  return (
    <div className="lg:flex gap-3 w-full  bg-slate-100  h-full">
      {!operation && (
        <div className="w-full h-full px-4 ">
          <div className="flex gap-2 justify-between px-4 mb-4">
            <button
              className="bg-white hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 text-gray-600  rounded text-base"
              onClick={() => handleOperation("create")}
            >
              create event
            </button>
            {selectedEvent && (
              <button
                className="bg-white hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 text-gray-600  rounded text-base"
                onClick={() => handleOperation("update")}
              >
                update event
              </button>
            )}
            {selectedEvent && (
              <button
                className="bg-white hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 text-gray-600  rounded text-base"
                onClick={handleDeleteEvent}
              >
                delete event
              </button>
            )}
          </div>

          <div className="w-full h-[80vh] bg-slate-100">
            {/* {selectedEvent && (
            <div className="flex gap-4">
              <Button text={"category"} />
              <Button text={"filter by date"} />
            </div>
          )} */}
            <div
              className={`px-4 py-4 ${
                selectedEvent ? "" : "py-4"
              } grid lg:grid-cols-2 gap-5 w-full   overflow-y-scroll lg:h-[80vh] justify-center bg-slate-100`}
            >
              {!operation && (
                <>
                  {events &&
                    events.map((event) => (
                      <Event key={event._id} event={event} />
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {operation && <Action setOperation={setOperation} />}
    </div>
  );
}

export default Myevents;
