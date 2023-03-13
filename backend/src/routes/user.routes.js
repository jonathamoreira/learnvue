const express = require("express")
const router = express.Router()
const userController = require('../controllers/user.controllers')

//===>Rota para criar novo "User": (post) localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser)

//===>
router.post('/login', userController.loginUser )

//===>
router.get('/userProfile', userController.returnUserProfile )

module.exports = router

