module.exports = {
  searchMovies(movie, callback) {
    let url = `http://omdbapi.com/?s=${movie}`;

    fetch(url)
    .then(res => res.json())
    .then(res => callback(null,res.Search))
    .catch(err => callback(err.message))

  }
}