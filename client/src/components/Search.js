import React, { useState } from "react";
import { Button, Label, Form, Input } from "reactstrap";
import SearchFooter from "./SearchFooter";

export default function SearchMovies() {
  //states - input query, movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f5f10715db30f53f7bbddc767108dd7c&language=en-US&query=${query}&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Form className="searchform" onSubmit={searchMovies}>
        <Label className="searchlabel" htmlForm="query">
          Try a Video Name
        </Label>
        <Input
          className="searchinput"
          type="text"
          name="query"
          placeholder="i.e Toy Story"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="btn-round" color="primary" size="lg" type="submit">
          Search
        </Button>
      </Form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="searchcard" key={movie.id}>
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>RELEASE DATE: {movie.release_date}</small>
                </p>
                <p>
                  <small>RATING: {movie.vote_average}</small>
                </p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
      <SearchFooter/>
    </>
  );
}
