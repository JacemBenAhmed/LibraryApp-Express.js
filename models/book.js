const { rejects } = require('assert');
const mongoose=require('mongoose');



let schemaBook=mongoose.Schema({
    _id:String,
    title:String, 
    description:String ,
    author:String ,
    price:Number ,
    image:String

})


let Book=mongoose.model('book',schemaBook) ;
let url = 'mongodb://127.0.0.1:27017/LibraryProject';
exports.getAllBooks=()=>{

    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Book.find({}) ;
        }).then(books=>{
            mongoose.disconnect()
            resolve(books)
        }).catch(err=>reject(err))
    })


}


exports.get3Books=()=>{

    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Book.find({}).limit(3) ;
        }).then(books=>{
            mongoose.disconnect()
            resolve(books)
        }).catch(err=>reject(err))
    })


}

exports.getBookDetails=(id)=>{

    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
           return Book.findById(id) ;
        }).then(books=>{
            mongoose.disconnect()
            resolve(books)
        }).catch(err=>reject(err))
    })


}

