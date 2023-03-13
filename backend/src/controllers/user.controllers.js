const User = require('../models/user.models')
const user = require('../models/user.models')

//===> Async Await

//===> Método responsável por criar novo usuario
exports.registerNewUser = async (req, res)=>{
    try {
        let isUser = await User.find({ email: req.body.email })
        console.log(isUser);

        if (isUser.length >=1 ){
            return res.status(409).json({ message: "Sorry! This email is already registered"})
        }
        const newUser = new User(req.body)
        const user = await newUser.save()
        const token = await newUser.generateAuthToken()
        res.status(201).json({ message: 'User created successfully!', user, token})
    } catch (err) {
        res.status(400).json({ err: err})
    }
}
//=== Login 
exports.loginUser = async (req, res)=>{
    try {
        const email =req.body.email
        const password = req.body.password
        const user = await User.findByCredentials(email, password)

        if (!user){
            return res.status(401).json({ error: 'Erro ao realizar o Login'})
        }

        const token = await user.generateAuthToken()
        res.status(201).json({ message: 'Usuário logado com sucesso!', user, token})
        
    } catch (err) {
        res.status(400).json({ err: err})
    }
}
//toDo
exports.returnUserProfile = async (req, res)=>{
    await res.json(req.userData)
}