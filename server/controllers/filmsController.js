const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const { Films } = require("../models/models");

class FilmsController {
  async create(req, res, next) {
    try {
      const { title, description, genre, age_limit, info, price } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const film = await Films.create({
        title,
        img: fileName,
        description,
        genre,
        age_limit,
        info,
        price
      });
      return res.status(200).json(film);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {      
      const films = await Films.findAll();
      return res.status(200).json(films);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const film = await Films.findOne({ where: { id } });
      return res.status(200).json(film);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateOne(req, res, next) {
    try {
      const { title, description, genre, age_limit, info, price } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const film = await Films.update(
        { title, description, genre, age_limit, img: fileName, info, price },
        { where: { id: req.params.id } }
      );
      return res.status(200).json(film);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const film = await Films.destroy({ where: { id: req.params.id } });
      return res.status(200).json(film);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new FilmsController();
