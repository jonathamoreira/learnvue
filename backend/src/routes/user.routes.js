const express = require("express")
const router = express.Router()
const auth = require('../middlewares/auth')
const userController = require('../controllers/user.controllers')


//===>Rota para criar novo "User": (post) localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser)

//===>Rota para realizar um novo login 'User': (post) localhost:3000/api/v1/login
router.post('/login', userController.loginUser )

//===>Rota responsável por retornar o perfil do 'User': (get) localhost:3000/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile )

module.exports = router

