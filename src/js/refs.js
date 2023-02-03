import {
  onClickIncrementPage,
  onClickDecrementPage,
  onClickPaginationBtnNumber,
} from './pagination';
export const refs = {
  moviesList: document.querySelector('.js-films-list'),
  firstPage: document.querySelector('.js-pagination--firstPage'),
  minus2Page: document.querySelector('.js-pagination--minus2Page'),
  minus1Page: document.querySelector('.js-pagination--minus1Page'),
  activPage: document.querySelector('.js-pagination--activPage'),
  plus1Page: document.querySelector('.js-pagination--plus1Page'),
  plus2Page: document.querySelector('.js-pagination--plus2Page'),
  lastPage: document.querySelector('.js-pagination--lastPage'),
  minusQuery: document.querySelector('.js-btn__minusQuery'),
  plusQuery: document.querySelector('.js-btn__plusQuery'),
  containerPage: document.querySelector('.js-pagination__page'),

  // ЯКЩО КОМУ ПОТРІБНІ РЕФИ АБО ШУКАЙТЕ ВЖЕ СТВОРЕНІ І РОЗКОМЕНТОВУЙТЕ АБО ДОДАВАЙТЕ СВОЇ

  // Modal elements
  // modalContainer: document.querySelector('.js-modal-container'),
  // closeModalBtn: document.querySelector('[data-modal-close]'),
  // modal: document.querySelector('[data-modal]'), // backdrop
  // btnAddToQueue: document.querySelector('[data-add-to-queue]'),
  // btnAddToWatched: document.querySelector('[data-add-to-watched]'),

  // // Search input in Header
  searchForm: document.querySelector('.header__form'),

  // // spiner
  // backdropSpinner: document.querySelector('[data-load]'),
  // spinner: document.querySelector('.js-spinner'),

  // // Library page
  // libraryList: document.querySelector('.js-library-list'),
  // btnQueue: document.querySelector('.js-btn-queue'),
  // btnWatched: document.querySelector('.js-btn-watched'),
};

refs.minusQuery.addEventListener('click', onClickDecrementPage);
refs.plusQuery.addEventListener('click', onClickIncrementPage);
refs.containerPage.addEventListener('click', onClickPaginationBtnNumber);