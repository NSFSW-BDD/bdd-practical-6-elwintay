const express = require("express");
const userController = require("../controllers/userController");
const jwtMiddleware=require("../middlewares/jwtMiddleware");
const router = express.Router();

//create your routes eg router.get('/', controller.readAllUser);
router.get("/",jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin, userController.getAllUser);
router.post("/login", userController.loginUser,jwtMiddleware.generateToken,jwtMiddleware.sendToken);
router.post('/', userController.createNewUser)
router.get('/:userid', userController.getUserById);
router.put('/:userid', userController.updateUserById);
router.delete('/:userid', userController.deleteUserById);


module.exports = router;