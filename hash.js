const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js')
const jwt = require('jsonwebtoken')
// bcrypt.genSalt(10,(err,salt)=>{
//     if(err)
//         return next(err)
    
//     bcrypt.hash('password123',salt,(err,hash)=>{
//         if(err) return next(err)
//         console.log(hash)
//     })
// })

// const secret = 'secretpassword';
// const secretsalted

// const user = {
//     id:1,
//     token : MD5('abcabcabc').toString()
// }

// console.log(user)

const id = '1000';
const secret = 'abc'

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.lBbbOku4yMpfOpPN5-wXvET_beQtJYzVqfQQ5BwFo9o'

const token = jwt.sign(id,secret);
const decodeToken = jwt.verify(receivedToken,secret);

console.log(decodeToken)