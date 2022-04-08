const Router = require("express");
const router = new Router();
const seatRouter = require("./seatRouter");
const filmRouter = require("./filmRouter");
const dayRouter = require("./dayRouter");
const calendarRouter = require("./calendarRouter");
const userRouter = require("./userRouter");
const profileRouter = require("./profileRouter");

router.use("/user", userRouter);
router.use("/profile", profileRouter);
router.use("/seat", seatRouter);
router.use("/film", filmRouter);
router.use("/day", dayRouter);
router.use("/calendar", calendarRouter);

module.exports = router;
