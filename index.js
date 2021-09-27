//----------ECMASCRIPT 6-----------------------
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
//----------ECMASCRIPT 5-----------------------
//const express=require('express');
//const morgan=require('morgan');
//const cors=require('cors');

//Conexión a la base de datos MongoDB v
mongoose.Promise=global.Promise;
//const dbUrl = 'mongodb://localhost:27017/dbtrinche';
const dbUrl='mongodb+srv://dbEndara:E2021dba@cluster0.0nyrl.mongodb.net/dbaPrueba?retryWrites=true&w=majority';
//mongoose.connect(dbUrl, {useCreateIndex:true, useNewUrlParser: true})
mongoose.connect(dbUrl, { useNewUrlParser: true})
.then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
.catch(err => console.log(err));

const app=express();
app.use(morgan('dev'));
app.use(cors());

//analiza las solicitudes entrantes con las cargas utiles
// json y se basa en el analizador de cuerpo 
//habilitar el backend para que pueda recibir peticiones json atravez del metodo post
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/api',router);
//asignar un puerto que da el servidor en caso contrario tomar el 3000
app.set('port',process.env.PORT || 3000);



app.listen(app.get('port'),()=>{
  console.log('server on port '+app.get('port'));
  //console.log('ruta: ' + __dirname + '\\public');
  //console.log(path.join(__dirname,'public'));
});