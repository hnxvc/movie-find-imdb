import React, { Component } from 'react';
import Search from './Search';
import ListMovie from './ListMovie';

let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStores');


class App extends Component {
    
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.listennerStore = this.listennerStore.bind(this);
    this.state = {
      movies: AppStore.getMovies(), 
      status: AppStore.getStatus()
    }
  }

  handleSearch(search_value) {
    AppActions.searchMovies(search_value);
  }

  listennerStore() {
    this.setState({
      movies: AppStore.getMovies(),
    });
  }

  componentWillMount() {
    AppStore.addChangeListener(this.listennerStore);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.listennerStore);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 well">
            <Search onSubmit={this.handleSearch}/>
          </div>
        </div>
        <div className="row">
          <ListMovie movies = {this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;