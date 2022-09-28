const Router = require("express");
const router = new Router();
const ordersController = require("../controllers/ordersController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), ordersController.create);
router.get("/", checkRole("USER"), ordersController.getAll);
router.get("/:id", checkRole("USER"), ordersController.getOne);
router.patch("/:id", checkRole("ADMIN"), ordersController.updateOne);
router.delete("/:id", checkRole("ADMIN"), ordersController.deleteOne);

module.exports = router;
