import React from "react";

//import '../styles/index.css';
import "./styles/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieListContainer from "./features/movies/presentation/containers/movie-list.container";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MovieListContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
