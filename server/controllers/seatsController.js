const ApiError = require("../error/ApiError");

const { Seats } = require("../models/models");

class SeatsController {
  async create(req, res, next) {
    try {
      const { row_number, seat_number } = req.body;
      const seatNumber = await Seats.create({ row_number, seat_number });
      return res.status(200).json(seatNumber);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const seatNumbers = await Seats.findAll();
      return res.status(200).json(seatNumbers);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const seatNumber = await Seats.findOne({ where: { id } });
      return res.status(200).json(seatNumber);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateOne(req, res, next) {
    try {
      const { row_number, seat_number } = req.body;
      const seatNumber = await Seats.update(
        { row_number, seat_number },
        { where: { id: req.params.id } }
      );
      return res.status(200).json(seatNumber);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const seatNumber = await Seats.destroy({ where: { id: req.params.id } });
      return res.status(200).json(seatNumber);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new SeatsController();
