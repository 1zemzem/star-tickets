const Router = require("express");
const router = new Router();
const seatsController = require("../controllers/seatsController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", 
// checkRole("ADMIN"), 
seatsController.create);
router.get("/", seatsController.getAll);
router.get("/:id", seatsController.getOne);
router.patch("/:id", 
// checkRole("ADMIN"), 
seatsController.updateOne);
router.delete("/:id", 
// checkRole("ADMIN"), 
seatsController.deleteOne);

module.exports = router;
