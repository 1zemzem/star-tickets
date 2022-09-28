const ApiError = require("../error/ApiError");
const { FilmSessions } = require("../models/models");

class FilmSessionsController {
    async create(req, res, next) {
      try {
        const { datetime } = req.body;
        const dateTime = await FilmSessions.create({ datetime });
        return res.status(200).json(dateTime);
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }   
  }

  async getAll(req, res, next) {
    try {
      const dateTimes = await FilmSessions.findAll();
    return res.status(200).json(dateTimes)
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
    
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const dateTime = await FilmSessions.findOne({ where: { id } });
      return res.status(200).json(dateTime);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateOne(req, res, next) {
    try {
      const { datetime } = req.body;
      const dateTime = await FilmSessions.update({ datetime }, { where: { id: req.params.id } });
      return res.status(200).json(dateTime);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const dateTime = await FilmSessions.destroy({ where: { id: req.params.id } });
      return res.status(200).json(dateTime);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new FilmSessionsController();

