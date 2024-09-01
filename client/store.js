import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./src/componets/eventsSlice";
import userReducer from "./src/pages/userSlice";

const store = configureStore({
  reducer: { events: eventReducer, user: userReducer },
});

export default store;
