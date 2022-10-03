const Router = require("express");
const router = new Router();
const ratingsController = require('../controllers/ratingsController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/",
//  checkRole("USER"), 
 ratingsController.create);
router.get("/", ratingsController.getAll);
router.get("/:id", ratingsController.getOne);
router.patch("/:id", 
// checkRole("ADMIN"), 
ratingsController.updateOne)
router.delete("/:id",
//  checkRole("ADMIN"), 
 ratingsController.deleteOne );

module.exports = router;