const ProductsModel = require('../models/products')

function get(req, res) {

    res.send({
        ok: true
    })

}

module.exports = {
    get,
}
