const express = require('express');
const router = express.Router();
const { getAnimeList, getAnime, addAnime, deleteAnime, editAnime } = require('../controllers/anime_ctrl')

router
  .route('/')
  .get(getAnimeList)

router
  .route('/add')
  .post(addAnime);

router
  .route('/:id')
  .get(getAnime)

router
  .route('/:id')
  .delete(deleteAnime); 

router
  .route('/edit/:id')
  .post(editAnime); 

module.exports = router;