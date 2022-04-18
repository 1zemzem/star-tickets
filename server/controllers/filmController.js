const ApiError = require("../error/ApiError");
const {Film} = require('../models/models');

class FilmController {
  async create(req, res) {
    const {title, img, description, genre, age_limit,} = req.body
    const film = await Film.create({title}, {img}, {description}, {genre}, {age_limit})
     return res.json(film)
  }

  async getAll(req, res) {}

  async getOne(req, res) {}

  async delete(req, res) {}
}

module.exports = new FilmController();