const ApiError = require("../error/ApiError");
const { Dates } = require("../models/models");

class DatesController {
  async create(req, res) {
    const { datetime } = req.body;
    const dates = await Dates.create({ datetime });
    return res.json(dates);
  }

  async getAll(req, res) {}

  async getOne(req, res) {}

  async delete(req, res) {}
}

module.exports = new DatesController();
