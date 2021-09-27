import mongoose,{Schema} from 'mongoose';
const bootcampSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa'},
    fecha:{type:Date},
    titulo: {type: String,required:[true,"El campo título es requerido"]},
    descripcion: {type:String,required:[true,"El campo descripción es requerido"]},
    fecRegistro:{type:Date,default:Date.now},
    Programador:{type:Boolean,default:false},
    Analista:{type:Boolean,default:false},
    AnalistaPruebas:{type:Boolean,default:false},
    JefeProyectos:{type:Boolean,default:false},
    Ingenieros:{type:Boolean,default:false},
    Otros:{type:Boolean,default:false}
    
});
var collectionName = 'bootcamp';
const Bootcamp = mongoose.model('bootcamp',bootcampSchema,collectionName);

export default Bootcamp;
