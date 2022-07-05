const Product = require('../model/Product');

module.exports.read   = function(application, req, res) {
    res.render("dashboard/product");
}

module.exports.create = async function (application, req, res) {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const amount = req.body.amount;

        await Product.create({
            name: name,
            price: price,
            amount: amount
        })
    } catch (error) {
        res.render("dashboard/status/400");
    }   

    res.render("dashboard/status/200", {
        sucess: 'Produto Cadastrado com Sucesso'
    });
}

module.exports.update = function(application, req, res) {
    try {
        res.render("dashboard/status/200");
    } catch (error) {
        res.render("dashboard/status/400");
    }   
}

module.exports.delete = function(application, req, res) {
    try {
        res.render("dashboard/status/200");
    } catch (error) {
        res.render("dashboard/status/400");
    }  
}