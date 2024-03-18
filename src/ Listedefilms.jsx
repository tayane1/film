import React from 'react';
import FilmCard from './FilmCard';

const FilmsList = ({ films }) => {
  return (
    <div className="films-list">
      {films.map((film, index) => (
        <FilmCard key={index} {...film} />
      ))}
    </div>
  );
}

export default FilmsList;
