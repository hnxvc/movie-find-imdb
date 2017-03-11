import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let movie = this.props.movie;
    let link = `http://www.imdb.com/title/${movie.imdbID}`;
    
    return (
      <div className="row">
        <div className="col-md-3">
          <img src={movie.Poster} alt="" className="thumbnail"/>
        </div>
        <div className="col-md-9">
          <h4>{movie.Title}</h4>
          <ul className="list-group">
            <li className="list-group-item">Year released: {movie.Year}</li>
            <li className="list-group-item">IMDB: {movie.imdbID}</li>
          </ul>
          <a href={link} target="_blank" className="btn btn-primary">View on IMDB</a>
        </div>
      </div>
    );
  }
}

export default Movie;