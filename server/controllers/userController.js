const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    // res.status(200).json({ message: "wwworking" });
    const { id } = req.query;
    if (!id) {
      next(ApiError.badRequest("no id"));
    }

    res.json(id);
  }

  async delete(req, res) {}
}

module.exports = new UserController();


