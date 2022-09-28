const ApiError = require("../error/ApiError");
const {Orders} = require('../models/models');

class OrdersController {
      async create(req, res, next) {
    try {
      const order = await Orders.create();
      return res.status(200).json(order);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }   
}

async getAll(req, res, next) {
    try {
      const orders = await Orders.findAll();
    return res.status(200).json(orders)
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
    
  }
  
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const order = await Orders.findOne({ where: { id } });
      return res.status(200).json(order);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  
  async updateOne(req, res, next) {
    try {
      const order = await Orders.update({ where: { id: req.params.id } });
      return res.status(200).json(order);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  
  async deleteOne(req, res, next) {
    try {
      const order = await Orders.destroy({ where: { id: req.params.id } });
      return res.status(200).json(order);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}


module.exports = new OrdersController();