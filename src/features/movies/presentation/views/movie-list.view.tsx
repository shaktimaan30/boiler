import * as React from "react";
import { TMovieList } from "../../domain/entities/types/movie-list";
import InputField from "../../../../components/input";
import {
  INPUT_SIZE,
  BUTTON_SIZE,
  BUTTON_TYPE,
} from "../../../../core/constants/app";
import Button from "../../../../components/button";
import MovieComponent from "../components/movie.list.component";

type TMovieListView = {
  movieList: TMovieList[];
  setMovieTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  movieTitle: string;
  onBtnClick: () => void;
  error: string;
};

const MovieListView: React.FC<TMovieListView> = (props: TMovieListView) => {
  console.log(props);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100px",
          borderBottom: "1px solid #ededed",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          background: "#fff",
        }}
      >
        <InputField
          value={props.movieTitle}
          error={props.error}
          size={INPUT_SIZE.LARGE}
          onChange={(e) => {
            props.setMovieTitle(e);
          }}
          placeholder={"Search Movie Name"}
        />
        <Button
          size={BUTTON_SIZE.SMALL}
          disabled={false}
          type={BUTTON_TYPE.PRIMARY}
          text={"Search"}
          onClick={() => props.onBtnClick()}
        ></Button>
      </div>
      <div style={{ marginTop: 150, display: "block" }}>
        {props.movieList &&
          props.movieList.length > 0 &&
          props.movieList.map((movie: TMovieList, idx) => (
            <MovieComponent key={idx} movie={movie}></MovieComponent>
          ))}
      </div>
    </>
  );
};

export default MovieListView;
