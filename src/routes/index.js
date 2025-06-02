'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (request ,response) => {  
    response.status(200).send({
        Música:'Carry On',
        Compositor:'Angra'
    });
});

router.get('/AquiTemosARotaURLDaRequisicao', (request ,response) => {  
    response.status(200).send({
        Música:'Heroes of Sand',
        Compositor:'Angra'
    });
});

module.exports = router;