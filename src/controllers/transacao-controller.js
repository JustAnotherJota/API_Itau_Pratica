'use strict'

exports.NomeMetodoGet = (request, response) => {
    response.status(200).send({
        teste:'Deu certo!!'
    })
}
