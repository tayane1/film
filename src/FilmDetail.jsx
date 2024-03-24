// FilmDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const FilmDetail = ({ films }) => {
  const { title } = useParams(); // Récupère le titre du film à partir des paramètres d'URL

  // Recherche du film correspondant dans la liste des films
  const film = films.find(film => film.title === title);

  if (!film) {
    return <div>Le film n'existe pas</div>;
  }

  return (
    <div className="film-detail">
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <iframe
        title="bande-annonce"
        width="560"
        height="315"
        src={film.trailerURL}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default FilmDetail;
