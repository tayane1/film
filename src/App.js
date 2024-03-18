
import './App.css';

import React, { useState } from 'react';
import FilmsList from './FilmsList';
import Filter from './Filter';

const App = () => {
  const [films, setFilms] = useState([
    {
      title: 'Film 1',
      description: 'Description du film 1',
      posterURL: 'url_du_poster_1',
      rating: 4.5
    },
    {
      title: 'Film 2',
      description: 'Description du film 2',
      posterURL: 'url_du_poster_2',
      rating: 3.8
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
    <div className="app">
      <h1>Ma Collection de Films</h1>
      <Filter
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
      />
      <FilmsList films={filteredFilms} />
    </div>
  );
}

export default App;