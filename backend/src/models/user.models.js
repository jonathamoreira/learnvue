const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = Schema({
    name: { type: String, maxlenth: 50, required: true},
    email: { type: String, maxlenth: 30, required: true},
    password: { type: String, required: true},
    tokens: [
        {
            token: {type: String, required: true}
        }
    ]
}, {
    timestamps: true,
    collection: 'users'
})
//===> Fazer hash da senha 
userSchema.pre('save', async function(next){
    const user = this
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
//===> Gerar authentic 
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id, name: user.name, email: user.email }, 'secret')
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token;
}
//===> busca
userSchema.statics.findByCredentials = async (email, password)=>{
    const user = await User.findOne({ email })
    console.log(user);

    if(!user){
        throw new Error({ error: 'Login inválido!'})
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if(!isPasswordMatch) {
        throw new Error({ error: 'Senha inválido!'})
    }
    return user;
}

const User = mongoose.model('User', userSchema)

module.exports = User
