import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";

import theme from "./theme.reducer";

const store = configureStore({
  middleware,
  reducer: { theme },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;