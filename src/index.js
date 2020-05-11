console.log('el servidor funciona :)');
const express=require('express');
const app= express();
const path=require('path');

//settings
app.set('port',3000);
app.set('view engine','ejs');         //html con mas funciones
app.set('views',path.join(__dirname,'views'));    //configura el directorio donde esta el html
app.engine('html',require('ejs').renderFile);


//midlewares    para procesar datos antes de mandarselos a las url

//routes
app.use(require('./route/index'));   //rutas en archivo separado, acceso para hltmls



//static files     archivos para la pagina
app.use(express.static(path.join(__dirname,'public'))); // acceso a archivos 


//listening server
app.listen(app.get('port'),()=>{
    console.log('server on port: ',app.get('port'))
});