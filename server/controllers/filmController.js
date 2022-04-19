const ApiError = require("../error/ApiError");
const uuid = require('uuid');
const path = require('path')
const {Film} = require('../models/models');

class FilmController {
  async create(req, res, next) {
    try {
      const {title, description, genre, age_limit} = req.body
    const {img} = req.files;
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname,"..", "static", fileName))

    const film = await Film.create({title, img:fileName, description, genre, age_limit})
     return res.json(film)

    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
    
  }

  async getAll(req, res) {}

  async getOne(req, res) {}

  async delete(req, res) {}
}

module.exports = new FilmController();