import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MovieStore from "../src/features/movies/domain/stores/movie.store";

export type TStore = ReturnType<typeof getStore>;

const getStore = () => {
  const movie = new MovieStore();
  return { movie };
};

export const StoreContext = React.createContext({} as TStore);

ReactDOM.render(
  <StoreContext.Provider value={getStore()}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);
