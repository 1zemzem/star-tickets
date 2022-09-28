const Router = require("express");
const router = new Router();
const filmSessionsController = require("../controllers/filmSessionsController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), filmSessionsController.create);
router.get("/", filmSessionsController.getAll);
router.get("/:id", filmSessionsController.getOne);
router.patch("/:id", checkRole("ADMIN"), filmSessionsController.updateOne);
router.delete("/:id", checkRole("ADMIN"), filmSessionsController.deleteOne);

module.exports = router;
