import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("current", store.getState());
  console.log("action", action);

  next(action);
  console.log("updated", store.getState());
};

export default logger;
