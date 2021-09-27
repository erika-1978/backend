import mongoose, {Schema} from 'mongoose';
const usuarioSchema = new Schema({
    usuario: { type:String,required:[true,"El campo usuario es requerido"]},
    email:{ type:String,required:[true,"El campo email es requerido"]},
    password:{ type:String,required:[true,"El campo contraseña es requerido"]},
    linkedin:{ type:String},
    repositorio:{ type:String},
    descripcion:{ type:String},
    pais:{ type:String},
    tipoUsuario:{ type:Boolean}
});
var collectionName = 'usuario';
const Usuario = mongoose.model('usuario',usuarioSchema,collectionName);
export default Usuario;