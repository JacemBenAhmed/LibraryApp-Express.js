const bookController=require('../controllers/book')
const router=require('express').Router()


router.get('/books',bookController.bookController)
router.get('/books/:id/',bookController.getBookController)



router.get('/',bookController.bookControllerLimit)


module.exports=router