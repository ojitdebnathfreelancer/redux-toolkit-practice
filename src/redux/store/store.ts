import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import logger from "../logger";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  //   devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
