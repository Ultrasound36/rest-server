const { response } = require('express');

const formularioGet = ( req, res = response ) => {

    const query = req.query

    res.json({
        message: 'Estamos en el Controlador: GET',
        queryParams: query
    });
}

const formularioPost = ( req, res = response ) => {

    const body = req.body;

    res.json({
        message: 'Estamos en el Controlador: POST',
        requestBody: body
    });
}

const formularioPut = ( req, res = response ) => {

    const id = req.params.id;

    res.json({
        message: 'Estamos en el Controlador: PUT',
        dato: id
    });
}

const formularioPatch = ( req, res = response ) => {
    res.json({
        message: 'Estamos en el Controlador: PATCH'
    });
}


const formularioDelete = ( req, res = response ) => {
    res.json({
        message: 'Estamos en el Controlador: DELETE'
    });
}

module.exports = {
    formularioGet,
    formularioPost,
    formularioPut,
    formularioPatch,
    formularioDelete
}