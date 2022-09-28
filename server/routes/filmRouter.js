const Router = require("express");
const router = new Router();
const filmsController = require("../controllers/filmsController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/",
//  checkRole("ADMIN"), 
 filmsController.create);
router.get("/", filmsController.getAll);
router.get("/:id", filmsController.getOne);
router.patch("/:id",
// checkRole("ADMIN"), 
filmsController.updateOne);
router.delete("/:id", checkRole("ADMIN"), filmsController.deleteOne);

module.exports = router;
