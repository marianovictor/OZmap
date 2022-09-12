const User = require('../model/User');

module.exports={

    async store(req, res){
        const {nome, email, idade} = req.body
        try{
            const userExist = await User.findOne({email});

            if(userExist){
                return res.status(201).json(userExist);

            }
            const user = await User.create({ 
                nome,
                email, 
                idade
            });
            return res.status(201).json(user);
        }catch(err){
            console.log(error);
            res.status(500).json(error);
        }
        
    }

}