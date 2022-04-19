const ApiError = require("../error/ApiError");
const { Dates } = require("../models/models");

class DatesController {
  async create(req, res) {
    const { datetime } = req.body;
    const date = await Dates.create({ datetime });
    return res.json(date);
  }

  async getAll(req, res) {
    const dates = await Dates.findAll();
    return res.json(dates)
  }

  async getOne(req, res) {}

  async delete(req, res) {}
}

module.exports = new DatesController();
