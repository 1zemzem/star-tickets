const Router = require("express");
const router = new Router();
const filmRoomsController = require("../controllers/filmRoomsController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", 
// checkRole("ADMIN"), 
filmRoomsController.create);
router.get("/", filmRoomsController.getAll);
router.get("/:id", filmRoomsController.getOne);
router.patch("/:id", 
// checkRole("ADMIN"), 
filmRoomsController.updateOne);
router.delete("/:id", 
// checkRole("ADMIN"),
filmRoomsController.deleteOne);

module.exports = router;