const Anime = require('../models/Anime');

// @desc Get all anime
// @route GET /anime
// @access Public
exports.getAnimeList = async (req, res, next) => {
  try {
    const animes = await Anime.find();

    return res.status(200).json({
      count:animes.length,
      data:animes
    })
  } catch (err) {
    return res.status(400).json('Error: ' + err);
  }
}

// @desc Get single anime
// @route GET /anime/:id
// @access Public
exports.getAnime = async (req, res, next) => {
  try {
    const anime = await Anime.findById(req.params.id);
    return res.json(anime)
  } catch (err) {
    return res.status(400).json('Error: ' + err);
  }
}

// @desc Add an anime
// @route POST /anime
// @access Public
exports.addAnime = async (req, res, next) => {
  try {
    const { title, image, description, watching, completed,planning} = req.body;

    const anime = await Anime.create(req.body);

    return res.status(201).json(anime);
    
  } catch (err) {
    return res.status(400).json('Error: ' + err);
  }
  
}

// @desc Delete anime
// @route DELETE /anime/:id
// @access Public
exports.deleteAnime = async (req, res, next) => {
  try {
    const anime = await Anime.findByIdAndDelete(req.params.id);
    return res.json(`${anime.title} deleted`)
  } catch (err) {
    return res.status(400).json('Error: ' + err);
  }
}

// @desc Edit anime
// @route POST /anime/edit/:id
// @access Public
exports.editAnime = async (req, res, next) => {
  try {
    let anime = await Anime.findByIdAndUpdate(req.params.id);
    
    const { title, image, description, watching, completed,planning} = req.body;

    anime.title = title;
    anime.image = image;
    anime.description = description;
    anime.watching = watching;
    anime.completed = completed;
    anime.planning = planning;

    console.log(anime);

    anime.save()

    return res.json(anime)
  } catch (err) {
    return res.status(400).json('Error: ' + err);
  }
}