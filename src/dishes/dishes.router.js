const router = require("express").Router();
const { listDishes, createDish, getDish, updateDish } = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/")
    .get(listDishes)
    .post(createDish)
    .all(methodNotAllowed)

router 
    .route("/:dishId")
    .get(getDish)
    .put(updateDish)
    .all(methodNotAllowed)


module.exports = router;
