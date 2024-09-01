import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  action: undefined,
  selectedEvent: null,
  events: [],
  userevents: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    getevents(state, action) {
      state.userevents = action.payload;
    },
    updateEvent(state, action) {
      state.userevents = state.userevents.map((event) =>
        event._id === action.payload._id
          ? { ...event, ...action.payload }
          : event
      );
    },

    setAction(state, action) {
      state.action = action.payload;
    },
    setEvent(state, action) {
      state.selectedEvent = action.payload;
    },
    setEvents(state, action) {
      state.events = action.payload;
    },
    createEvent(state, action) {
      state.userevents = [...state.userevents, action.payload];
    },
    deleteEvent(state, action) {
      state.userevents = state.userevents.filter(
        (event) => event._id != action.payload._id
      );
    },
  },
});

export const { setAction, setEvent, setEvents } = eventSlice.actions;

export default eventSlice.reducer;

export const getEvents = (state) => state.events.userevents;
export function getevents(id) {
  return async function (dispatch, getState) {
    try {
      const res = await axios({
        method: "GET",
        url: `https://ems-xb6r.onrender.com/api/v1/userevent/${id}`,
        withCredentials: true,
      });
      const data = res.data.data;
      dispatch({ type: "events/getevents", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function createEvent(event) {
  return async function (dispatch, getState) {
    try {
      const res = await axios({
        method: "POST",
        url: `https://ems-xb6r.onrender.com/api/v1/userevent/${event.user}`,
        data: event,
        withCredentials: true,
      });
      const data = res.data.data;
      dispatch({ type: "events/createEvent", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function updateEvent(event) {
  return async function (dispatch, getState) {
    try {
      const res = await axios({
        method: "PATCH",
        url: `https://ems-xb6r.onrender.com/api/v1/userevent/${event.user}`,
        data: event,
        withCredentials: true,
      });
      const data = res.data.data;

      dispatch({ type: "events/updateEvent", payload: event });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteEvent(event) {
  return async function (dispatch, getState) {
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://ems-xb6r.onrender.com/api/v1/userevent/${event.user._id}`,
        data: event,
        withCredentials: true,
      });

      dispatch({ type: "events/deleteEvent", payload: event });
    } catch (error) {
      console.log(error.message);
    }
  };
}
