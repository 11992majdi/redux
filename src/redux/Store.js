import { rootreducer } from "./Reducer";
import { createStore } from "redux";


export const store = createStore(
    rootreducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );