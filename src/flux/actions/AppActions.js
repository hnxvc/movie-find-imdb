let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');
let appAPI = require('../utils/appAPI');

let AppActions = {
  searchMovies(movie) {
    appAPI.searchMovies(movie, function(err, data) {
      if(!err) {
        AppDispatcher.handleViewAction({
          actionType: AppConstants.RECEIVE_MOVIES_RESULT,
          data: data
        });
      } else {
        AppDispatcher.handleViewAction({
          actionType: AppConstants.SEARCH_MOVIES_ERROR
        });
      }
    });
  }
}

module.exports = AppActions;