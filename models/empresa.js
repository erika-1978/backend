import mongoose,{Schema} from 'mongoose';
const empresaSchema = new Schema({
    descripcion:{type:String,maxlength:400,required:true},
      
});
var collectionName = 'empresa';
const Empresa = mongoose.model('empresa',empresaSchema,collectionName);
export default Empresa;