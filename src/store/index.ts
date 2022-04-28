import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";

import theme from "./theme.reducer";
import ui from "./ui.reducer";

const store = configureStore({
  middleware,
  reducer: { theme, ui },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
