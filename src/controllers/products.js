const ProductsModel = require('../models/products')

function get(req, res) {
    const products = await ProductsModel.find()

    res.send({
        ok: true
    })

}

module.exports = {
    get,
}
