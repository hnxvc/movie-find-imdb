let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

const CHANGE_EVENT = 'change';

let movies = [];
let status = null;

let AppStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getMovies() {
    return movies;
  },

  getStatus() {
    return status;
  }

})

module.exports = AppStore;

AppDispatcher.register(function(payload) {
  let action = payload.action;

  switch(action.actionType) {
    case AppConstants.RECEIVE_MOVIES_RESULT: {
      movies = action.data;
      status = '';
      AppStore.emitChange();
      break;
    }
    case AppConstants.SEARCH_MOVIES_ERROR: {
      status = 'Movie not found!';
      AppStore.emitChange();
      break;
    }
  }

  return true;

});






