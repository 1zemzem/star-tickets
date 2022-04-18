const Router = require("express");
const router = new Router();
const datesController = require('../controllers/datesController')

router.post("/", datesController.create);
router.get("/", datesController.getAll);
router.get("/:id", datesController.getOne);
router.delete("/", datesController.delete);

module.exports = router;
