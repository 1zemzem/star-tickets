const Router = require("express");
const router = new Router();
const ticketsController = require('../controllers/ticketsController')

router.post("/", ticketsController.create);
router.get("/", ticketsController.getAll);
router.get("/:id", ticketsController.getOne);
router.put("/:id", ticketsController.updateOne)
router.delete("/:id", ticketsController.deleteOne );

module.exports = router;
