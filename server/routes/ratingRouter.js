const Router = require("express");
const router = new Router();
const ratingController = require('../controllers/ratingController')

router.post("/", ratingController.create);
router.get("/", ratingController.getAll);
router.get("/:id", ratingController.getOne);
router.put("/:id", ratingController.updateOne)
router.delete("/:id", ratingController.deleteOne );

module.exports = router;