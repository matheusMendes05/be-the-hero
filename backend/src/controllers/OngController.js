const crypto = require('crypto');
const connection = require('../dataBase/connection');

module.exports = {

    // LIstando todas as ongs cadastradas na base de dados 
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    // Cadastro de Ongs na base de dados 
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
};