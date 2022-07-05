const Product = require('../model/Product');

module.exports.read = async function(application, req, res) {

    const products = await Product.findAll();
    // products.forEach(element => {
    //     console.log(element['name']);
    // });
    res.render("dashboard/product", {
        products: products
    });
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

    res.render("dashboard/product");
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