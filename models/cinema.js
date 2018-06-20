const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titlesArray = this.films.map((film) => {
    return film.title;
  });
  return titlesArray;
};

Cinema.prototype.getFilmByTitle = function (title) {
  const objectArray = this.films.find((film) => {
    return film.title === title;
  });
  return objectArray;
};

Cinema.prototype.getFilmByGenre = function (genre) {
  const objectArray = this.films.filter((film) => {
    return film.genre === genre;
  });
  return objectArray;
};

Cinema.prototype.getFilmByYear = function (year) {
  const objectArray = this.films.filter((film) => {
    return film.year === year;
  });
  return objectArray;
};

Cinema.prototype.getFilmByRuntime = function (length) {
  const objectArray = this.films.filter((film) => {
    return film.length >= length;
  });
  return objectArray;
};

Cinema.prototype.getTotalRuntime = function () {
  const total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return total;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  const objectArray = this.films.filter((film) => {
    return film[property] === value;
  });
  return objectArray;

};


module.exports = Cinema;
