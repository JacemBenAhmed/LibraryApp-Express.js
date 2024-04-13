const mongoose=require('mongoose')
const bcrypt = require('bcrypt')


let schemaAuth = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

let User=mongoose.model('user',schemaAuth);
let url = 'mongodb://127.0.0.1:27017/LibraryProject';

function testEmail (email){
   
}
/*

exports.registerUser=(name,email,password)=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{

         return    User.findOne({email:email})

        }).then((user)=>{
            if(user)
            {
                mongoose.disconnect()
                reject('email already exist')
            }
            else{


                let x="" ;                                  //TEST MAIL !
                for(let i=0;i<email.length();i++)
                    {
                        if(email[i]!==".")
                            x+=email[i] ;

        
        
                    }
            email=x ;
                return bcrypt.hash(password,10)
            }
           
        }).then((hpassword)=>{
           
            let user=new User({
                name:name,
                email:email,
                password:hpassword
            })
            return user.save()
        }).then((user)=>{
            mongoose.disconnect()
            resolve('registered !')
            console.log('registered')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })




    })

}
*/
exports.registerUser = async (name, email, password) => {
    try {
        await mongoose.connect(url);
        const user = await User.findOne({ email: email });
        if (user) {
            mongoose.disconnect();
            throw new Error('Email already exists');
        }

        

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword,
        });
        
        await newUser.save();
        mongoose.disconnect();
        return 'Registered!';
    } catch (err) {
        mongoose.disconnect();
        throw err;
    }
};



exports.loginModel=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{

           return User.findOne({email:email})

        }).then((x)=>{
            if(x)
           {
                bcrypt.compare(password,x.password).then((verif)=>{
                    if(verif){
                        mongoose.disconnect()
                        resolve(x._id)

                    }else{
                        mongoose.disconnect()
                        reject('invalid password')
                    }

                })
           }
            else{
                mongoose.disconnect()
                reject("we don't have this user in our database")

            }

        })






    })
    .catch(()=>{
        reject(err)
    })




}