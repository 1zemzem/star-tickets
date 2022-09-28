const ApiError = require("../error/ApiError");
const {Seats} = require('../models/models');

class SeatsController {
    async create(req, res, next) {
        try {
          const { number } = req.body;
          const seat_number = await Seats.create({ number });
          return res.status(200).json(seat_number);
        } catch (error) {
          next(ApiError.badRequest(error.message));
        }   
    }
  
    async getAll(req, res, next) {
      try {
        const seat_numbers = await Seats.findAll();
      return res.status(200).json(seat_numbers)
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }
      
    }
  
    async getOne(req, res, next) {
      try {
        const { id } = req.params;
        const seat_number = await Seats.findOne({ where: { id } });
        return res.status(200).json(seat_number);
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }
    }
  
    async updateOne(req, res, next) {
      try {
        const { number } = req.body;
        const seat_number = await Seats.update({ number }, { where: { id: req.params.id } });
        return res.status(200).json(seat_number);
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }
    }
  
    async deleteOne(req, res, next) {
      try {
        const seat_number = await Seats.destroy({ where: { id: req.params.id } });
        return res.status(200).json(seat_number);
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }
    }
}


module.exports = new SeatsController();