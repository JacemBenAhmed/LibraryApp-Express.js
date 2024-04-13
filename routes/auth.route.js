const route =require('express').Router()
const AuthController=require('../controllers/auth.controller')
const body=require('express').urlencoded({extended:true})


route.get('/register', AuthController.registerController)


route.post('/register',body,AuthController.postRegister)

route.get('/login',AuthController.getLoginPage)
route.post('/login',body,AuthController.postLogin)



route.all('/logout',AuthController.logoutController)

module.exports=route