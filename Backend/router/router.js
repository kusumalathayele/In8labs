


const express = require("express");
const router = express.Router();
const userController = require("../controller/controller.js");

router.get("/get", userController.getDatabase);
router.post("/insert", userController.insertData)
router.put("/update",userController.updatedata)
router.delete("/delete",userController.deleteData)

module.exports = router;










// const express = require("express");
// const router = express.Router()
// const getController = require("../controller/controller.js")

// router.get("/", getController)
// router.post("/insert", getController)

// module.exports = router
