// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FilmsList from './FilmsList';
import Filter from './Filter';
import FilmDetail from './FilmDetail'; 

const App = () => {
  const [films, setFilms] = useState([
    {
      title: 'Film 1',
      description: 'Description du film 1',
      posterURL: 'url_du_poster_1',
      rating: 4.5,
      trailerURL: 'lien_vers_la_bande_annonce_1'
    },
    {
      title: 'Film 2',
      description: 'Description du film 2',
      posterURL: 'url_du_poster_2',
      rating: 3.8,
      trailerURL: 'lien_vers_la_bande_annonce_2'
    }
  ]);

  const [filteredTitle, setFilteredTitle] = useState('');
  const [filteredRating, setFilteredRating] = useState('');

  const handleTitleChange = event => {
    setFilteredTitle(event.target.value);
  };

  const handleRatingChange = event => {
    setFilteredRating(event.target.value);
  };

  const filteredFilms = films.filter(film => {
    return (
      film.title.toLowerCase().includes(filteredTitle.toLowerCase()) &&
      film.rating >= filteredRating
    );
  });

  return (
    <Router>
      <div className="app">
        <h1>Ma Collection de Films</h1>
        <Switch>
          <Route exact path="/">
            <Filter
              handleTitleChange={handleTitleChange}
              handleRatingChange={handleRatingChange}
            />
            <FilmsList films={filteredFilms} />
          </Route>
          <Route path="/film/:title">
            <FilmDetail films={films} />
            <Link to="/">Retour à la page d'accueil</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
