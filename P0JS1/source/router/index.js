const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Servidor trabajando");
})
router.get('/index', (req,res)=>{
        res.render('index.html', {titulo:'Index'})
    });
router.get('/acercade',(req, res)=>{
        res.render('acercade.html',{titulo:'titulo'})
    });

router.get('/Cont',(req, res)=>{
        res.render('Cont.html',{titulo:'Cont'})
    });

router.get('/Menu',(req, res)=>{
        res.render('Menu.html',{titulo:'Menu'})
    });

router.get('/Info',(req, res)=>{
       res.render('info.html',{titulo:'Info'})
    });    

router.get('/Promo',(req, res)=>{
        res.render('Promo.html',{titulo:'Promo'})
     });    

router.get('*',(req,res)=>{
        res.send("No es una ruta valida")
    });
    
    module.exports=router;
