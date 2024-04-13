const express=require('express') ;
const path=require('path')

const RouterBook=require('./routes/book')
const RouterAuth=require('./routes/auth.route')

const session =require('express-session')
const MongoDbStore=require('connect-mongodb-session')(session) ;


const app=express() ;

let store=new MongoDbStore ({
    uri : 'mongodb://127.0.0.1:27017/LibraryProject' ,
    collection:'sessions'
})

app.use(session({
    secret:'this is secret ! ' ,
    
    store:store ,
    resave:true ,
    saveUninitialized:true 
}))


app.use(express.static(path.join(__dirname,'assets')))

app.set('view engine','ejs')
app.set('views','views')

app.use('/',RouterBook)
app.use('/books',RouterBook)
app.use('/books/:id',RouterBook)

app.use('/',RouterAuth)

app.get('/contact',(req,res,next)=>{
    res.render('contact') ;
})




app.get('/about',(req,res,next)=>{
    res.render('about') ;
})



app.listen(100,()=>{
    console.log('server run on 100 !') ;
})