import jwt from 'jsonwebtoken';
import models from '../models';


export default {
    // encode: async (_id) => {
    // const token = jwt.sign({_id:_id},'clavesecretaparagenerartoken',{expiresIn: '1d'});
    encode: async (_email) => {
        const token = jwt.sign({_email:_email},'clavesecretaparagenerartoken',{expiresIn: '1d'});
        return token;
    },
    decode: async (token) => {
        try {
            const {_email} = await jwt.verify(token,'clavesecretaparagenerartoken');
            const user = await models.Usuario.findOne({_email});
           // const {_id} = await jwt.verify(token,'clavesecretaparagenerartoken');
            //const user = await models.Usuario.findOne({_id,estadopublicacion:'Activo'});
            if (user){
                return user;
            } else{
                return false;
            }
        } catch (e){
            
            return false;
        }
    }
}