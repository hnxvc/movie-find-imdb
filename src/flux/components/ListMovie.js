import React, { Component } from 'react';
import Movie from './Movie';

class ListMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let movies = (this.props.movies) ? this.props.movies : [] ;
    return (
      <div className="well">
        {
          movies.map((movie, id) => <Movie key={id} movie={movie} />)
        }
      </div>
    );
  }
}

export default ListMovie;