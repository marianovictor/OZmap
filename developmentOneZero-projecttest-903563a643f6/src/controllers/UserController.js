const User = require('../model/User');



module.exports={

    async index(req, res){
        User.find({}).then(function(User){
            return res.status(200).json(User)
        })
    },

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
            if(user.idade < 18){
                return res.status(400).json({
                    status:"Error",
                    message:"O usuario precisa ter mais de 18 anos"
                  });
            }else{
                return res.status(201).json(user);
            }
            
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
        
    },

    async delete(req, res){
        try{
            const userExist = await User.findOneAndDelete({'nome': req.params.nome}).exec();
            if(userExist){
                return res.status(200).json(userExist);
            }
        }catch(error){
            console.log(error);
            return res.status(500).json(error);
        }
    },
    async buscaNome(req, res){
        try{
            const userExist = await User.findOne({'nome': req.params.nome}).exec();
            if(userExist){
                return res.status(200).json(userExist);
            }else{
                return res.status(404).json({User});
            }
        }catch(error){
            console.log(error);
            return res.status(500).json(error);
        }
    }

}