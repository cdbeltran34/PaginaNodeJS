const express=require('express');
const router= express.Router();


router.get('/',(req,res)=>{
    //res.sendFile(__dirname+'/views/index.html');  //dirname es para la ruta de la carpteta del archivo que lo convoca
    res.render('index.html',{title:'MY FIRT WEBSITE'});
});


router.get('/contact',(req,res)=>{
    //res.sendFile(__dirname+'/views/index.html');  //dirname es para la ruta de la carpteta del archivo que lo convoca
    res.render('contact.html',{title:'contact Page'});
});

module.exports=router;