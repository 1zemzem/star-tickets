const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const filmRouter = require("./filmRouter");
const film_sessionRouter = require("./film_sessionRouter");
const film_roomRouter = require("./film_roomRouter")
const seatRouter = require("./seatRouter");
const ticketRouter = require("./ticketRouter");
const orderRouter = require("./orderRouter");
const ratingRouter = require("./ratingRouter");

router.use(Router.json());
router.use(Router.urlencoded({ extended: true }));
// router.use("/static", Router.static(__dirname + '/static'));
router.use("/user", userRouter);
router.use("/film", filmRouter);
router.use("/film_session", film_sessionRouter);
router.use("/film_room", film_roomRouter);
router.use("/seat", seatRouter);
router.use("/ticket", ticketRouter);
router.use("/order", orderRouter);
router.use("/rating", ratingRouter);

module.exports = router;

