import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';

export default {
    agregar: async (req,res,next) =>{
        try {
            req.body.password = await bcrypt.hash(req.body.password,10);
            const reg = await models.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un errorr'
            });
            next(e);
        }
    },
    query: async (req,res,next) => {
        try {
            console.log("correo....."+req.query._correo);
            // const reg=await models.Usuario.findOne({emailprincipal:req.query._correo});
            const reg=await models.Usuario.findOne({email:req.query._correo});
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else{
                res.status(200).json(reg);
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    login: async (req,res,next) => {
        try {
            let user = await models.Usuario.findOne({email:req.body.email},{_id:0});
            if (user){
                let match = await bcrypt.compare(req.body.password,user.password);
                if (match){
                   
                    user.password="";
                    let tokenReturn = await token.encode(user.email);
                    res.status(200).json({user,tokenReturn});
                   
                } else{
                    res.status(404).send({
                        message: 'Password Incorrecto'
                    });
                }
            } else{
                res.status(404).send({
                    message: 'No existe el usuario'
                });
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    
    
    update: async (req,res,next) => {
        try {
            let pas = req.body.password;
            const reg0 = await models.Usuario.findOne({_id:req.body._id});
            if (pas!=reg0.password){
                req.body.password = await bcrypt.hash(req.body.password,10); 
            }                 
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},
                {usuario:req.body.usuario,
                pais:req.body.pais,
                tipoUsuario:req.body.tipoUsuario,
                email:req.body.email,
                linkedin:req.body.linkedin,
                repositorio:req.body.repositorio,
                descripcion:req.body.descripcion,
                password:req.body.password});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
    /*
    list: async (req,res,next) => {
        try {
            let valor=req.query.valor;
            const reg=await models.Usuario.find({$or:[{'nombre':new RegExp(valor,'i')},{'email':new RegExp(valor,'i')}]},{createdAt:0})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) => {
        try {
            const reg = await models.Usuario.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async (req,res,next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate:async (req,res,next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },*/

    
}
