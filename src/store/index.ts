import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas/productSaga";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
