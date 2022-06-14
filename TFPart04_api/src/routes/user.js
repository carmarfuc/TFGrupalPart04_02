const router = require('express').Router();
const axios = require('axios');
const { conn,User} = require('../db');
const { Op } = require("sequelize");

// USUARIOS+


router.get("/", async(req,res)=>{
    const {email}=req.query;
    
    if (email)
    {
        try {
            const user = await User.findAll({
                where:{
                    email:{[Op.iLike]:`%${email}%`}
                }
            });
            console.log(user);
            user ? res.json(user) : res.send("No existe el usuario");
            
        } catch (error) {
            res.send(error);
        }
    }
    else
    {
        const users= await User.findAll();
        users ? res.json(users) : res.send("Users not found");
        
    }
});


router.post("/", async(req,res)=>{
    const {password,usertype,nickName,firstName,lastName,email,phone,birthdate,country,verify} = req.body;
    try {
        const userCreated = await User.create({
            password,
            usertype,
            nickName,
            firstName,
            lastName,
            email,
            phone,
            birthdate,
            country,
            verify
        });
        res.status(200).send('user created successfully');
    } catch (error) {
        res.status(500).send(error)
    }
    
})

router.delete('/delete/:emailUser', async(req,res)=>{
    const {emailUser}=req.params;
    console.log(emailUser);
    try {
        const userDeleted = await User.destroy({
            where:{
                email:emailUser
            }
        });
        res.status(200).send('user deleted successfully');
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/update/:emailUser', async(req,res)=>{
    const {emailUser}=req.params;
    
    const {password,usertype,nickName,firstName,lastName,email,phone,birthdate,country,verify} = req.body;
    try {
        const userUpdated = await User.update({
            password,
            usertype,
            nickName,
            firstName,
            lastName,
            email,
            phone,
            birthdate,
            country,
            verify
        },{
            where:{
                email:emailUser
            }
        });
        res.status(200).send('user updated successfully');
    } catch (error) {
        res.status(500).send(error)
    }
})


// //------------------------------------------------------------

// router.post("/signup", async(req,res)=>{
//     const { id,email, password } = req.body;
//     try {
//         const [user, created] = await User.findOrCreate({
//             where: {email },
//             defaults: {id, email, password }
//         })
//         if(created) res.json(user)
//         else res.send('Email already in use')
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// router.post("/login", async(req,res)=>{
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({
//             where: {email: email}
//         })
//         if(user.password === password) res.send(user)
//         else res.send({});
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })

module.exports = router;
