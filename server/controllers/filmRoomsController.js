const ApiError = require("../error/ApiError");

const {FilmRooms} = require('../models/models');

class FilmRoomsController {
    async create(req, res, next) {
        try {
          const { film_room_name } = req.body;
          const roomName = await FilmRooms.create({ film_room_name});
          return res.status(200).json(roomName);
        } catch (error) {
          next(ApiError.badRequest(error.message));
        }   
    }
    
    async getAll(req, res, next) {
      try {
        const roomNames = await FilmRooms.findAll();
      return res.status(200).json(roomNames)
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }
      
    }
    
    async getOne(req, res, next) {
      try {
        const { id } = req.params;
        const roomName = await FilmRooms.findOne({ where: { id } });
        return res.status(200).json(roomName);
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }
    }
    
    async updateOne(req, res, next) {
      try {
        const { film_room_name } = req.body;
        const roomName = await FilmRooms.update({ film_room_name }, { where: { id: req.params.id } });
        return res.status(200).json(roomName);
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }
    }
    
    async deleteOne(req, res, next) {
      try {
        const roomName = await FilmRooms.destroy({ where: { id: req.params.id } });
        return res.status(200).json(roomName);
      } catch (error) {
        next(ApiError.badRequest(error.message));
      }
    }
}


module.exports = new FilmRoomsController();