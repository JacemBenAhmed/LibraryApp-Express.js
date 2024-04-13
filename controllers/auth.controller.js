
const authModel=require('../models/auth.model')


exports.registerController=(req,res,next)=>{

res.render('register',{verifUser:req.session.userID})

}

exports.postRegister=(req,res,next)=>{

authModel.registerUser(req.body.name,req.body.email,req.body.password).then((user)=>{
    res.redirect('/login')
}).catch((msg)=>{
    console.log('error ctr')
})

}

exports.getLoginPage=(req,res,next)=>{
res.render('login',{verifUser:req.session.userID})
}

exports.postLogin=(req,res,next)=>{
authModel.loginModel(req.body.email,req.body.password).then((id)=>{
    res.redirect('/')
    req.session.userID=id
    
    
}).catch((err)=>{
    console.log("e r r ctrl")
    res.redirect('/register')
})
}

exports.logoutController=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
}