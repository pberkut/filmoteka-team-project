import defaultImg from '../images/movie-pic.jpg';

export function createMarkupFilmsList(moviesData) {
  return moviesData
    .map(movie => {
      const { genres, id, imgUrl, name, rating, year } = movie;
      const genresToShow = trimGenresList(genres);

      return `<li class="films__item js-target" data-id="${id}">
                  <div class="films__img-wrapper">
            <img
              src="${imgUrl}"
              alt="${name}"
              class="films__img" loading="lazy"
            />
          </div>
          <div class="films__info">
            <p class="films__name">${name}</p>
            <p class="films__desk">
              <span class="films__genre">${genresToShow}</span> |
              <span class="films__year">${year}</span>
            </p>
            <p class="films__desk">
              <span class="films__rating--text"> Rating: </span>
              <span class="films__rating">${rating}</span>
            </p>
          </div>
      </li>`;
    })
    .join('');
}

//  function render to main page first 3 genres
export function trimGenresList(genres) {
  if (genres.length === 0) {
    return `Other`;
  } else if (genres.length <= 3) {
    return genres.join(', ');
  } else {
    return `${genres[0]}, ${genres[1]}, Other`;
  }
}

// Function for render about movies in modal window
export function createMarkupSelectedMovie(moviesData) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = moviesData;

  const markup = ` <img class='modal-poster'
  src="${
    poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg
  }"
   alt=${title}
  
   width='240'/>
 <div>
   <div>
     <h2 class='modal-movie-title'>${title}</h2>

     <div class='wrap-flex'>
          <p class='movie-label'>Vote / Votes</p>
          <p class='movie-disc disc-wrap'>
           <span class='accent-detail__orange'>
            ${vote_average.toFixed(1)}</span>
            <span class='disc-space'> / </span> <span class="accent-detail__gray">${vote_count}</span>
         </p>
     </div>
     <div class='wrap-flex'>
         <p class='movie-label'>Popularity</p>
          <p class='movie-disc'>${popularity.toFixed(1)}</p>
     </div>
     <div class='wrap-flex'>
         <p class='movie-label'>Original Title</p>
         <p class='movie-disc movie-disc-title'>${original_title}</p>
     </div>
     <div class='wrap-flex'>
        <p class='movie-label'>Genre</p>
        <p class='movie-disc movie-disc-genres'>${genres
          .map(genre => genre.name)
          .join(', ')}</p>
     </div>

     <h3 class='disc-title'>About</h3>
     <p class='disc-text'>${overview}</p>
   </div>
   <div class='button-container'>
     <button type='button' class='modal-btn btn-watched'>add to watched</button>
     <button type='button' class='modal-btn btn-queue'>
       add to queue
     </button>
   </div>
   </div>
 </div>`;
  document.querySelector('.wrap-disc').innerHTML = markup;

  document
    .querySelector('.backdrop')
    .setAttribute(
      'style',
      `background-image: url(https://image.tmdb.org/t/p/original/${moviesData.backdrop_path}); background-position: center; background-size: cover;`
    );
  if (moviesData.backdrop_path === null) {
    document
      .querySelector('.backdrop')
      .setAttribute(
        'style',
        `background-image: url(${defaultImg}); background-position: center; background-size: cover;`
      );
  }
}

export function createMarkupLibraryList(moviesData) {
  return moviesData
    .map(movie => {
      const { genres, id, imgUrl, name, vote, year } = movie;
      const genresToShow = trimGenresList(genres);

      return `<li class="films__item js-target" data-id="${id}">
                  <div class="films__img-wrapper">
            <img
              src="${imgUrl}"
              alt="${name}"
              class="films__img" loading="lazy"
            />
          </div>
          <div class="films__info">
            <p class="films__name">${name}</p>
            <p class="films__desk">
              <span class="films__genre">${genresToShow}</span> |
              <span class="films__year">${year}</span>
            </p>
            <p class="films__desk">
              <span class="films__rating--text"> Rating: </span>
              <span class="films__rating">${vote}</span>
            </p>
          </div>
      </li>`;
    })
    .join('');
}
