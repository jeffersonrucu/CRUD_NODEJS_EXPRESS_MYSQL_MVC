const Product = require('../model/Product');

module.exports.read = async function(application, req, res) {
    const products = await Product.findAll();
    res.render("dashboard/product", {
        products: products
    });
}

module.exports.create = async function (application, req, res) {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;

        await Product.create({
            name: name,
            price: price,
            description: description
        })
    } catch (error) {
        res.render("dashboard/status/400");
    }   

    res.redirect('http://localhost:3000/produto')
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
        Product.destroy(
            { where: { id: req.params.id }
        })  .then(rowsDestroyed => rowsDestroyed ? res.send(200) : res.send(404)) 
            .catch(console.error);
    } catch (error) {
        res.render("dashboard/status/400");
    }   
}