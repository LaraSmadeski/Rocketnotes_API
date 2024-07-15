const { Router } = require('express');
const multer = require("multer");
const updateConfig = require("../configs/upload");

const UsersController = require('../controllers/UsersController');
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(updateConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);


module.exports = usersRoutes;