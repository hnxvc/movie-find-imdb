import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let movie = this.txt_search.value;
    this.props.onSubmit(movie);
  }

  render() {
    return (
      <div className="search-form row">
        <h1 className="text-center">Search For A Movie in IMDB</h1>
        <form action="#" onSubmit={this.onSubmit}>
          <div className="col-md-10 form-group">
            <input type="text" 
              className="form-control" 
              ref={(input) => { this.txt_search = input;}} 
              placeholder="Enter a Movie Title (eg: batman)"/>
          </div>
          <div className="col-md-2"> 
            <button className="btn btn-primary btn-block">
              Search Movies
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;