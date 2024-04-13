const BookModel=require('../models/book')

exports.bookController=(req,res,next)=>{

BookModel.getAllBooks().then(books=>{
    res.render('books',{books:books,verifUser:req.session.userID}) ; 
}) 
} 

exports.bookControllerLimit=(req,res,next)=>{

    BookModel.get3Books().then(books=>{
        res.render('index',{books:books,verifUser:req.session.userID}) ; 
    }) 


}

exports.getBookController=(req,res,next)=>{

let id = req.params.id ;
    BookModel.getBookDetails(id).then(book=>{
        res.render('details',{books:books,verifUser:req.session.userID}
        ) ; 
    }) 


}