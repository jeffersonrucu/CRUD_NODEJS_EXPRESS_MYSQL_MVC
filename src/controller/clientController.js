const Client = require('../model/Client');

module.exports.read = async function(application, req, res) {
    const clients = await Client.findAll();
    res.render("dashboard/client", {
        clients: clients
    });
}

module.exports.create = async function(application, req, res) {
    try {
        const name = req.body.name;
        const phone = req.body.phone;
 
        await Client.create({
            name: name,
            phone: phone,
        })
    } catch (error) {
        res.render("dashboard/status/400");
    }   

    res.redirect(200, 'http://localhost:3000/cliente')
}

module.exports.update = function(application, req, res) {
    try {
        res.render("dashboard/status/200");
    } catch (error) {
        res.render("dashboard/status/400");
    }   
}

module.exports.delete = async function(application, req, res) {
    try {
        Client.destroy(
            { where: { id: req.params.id }
        })  .then(rowsDestroyed => rowsDestroyed ? res.send(200) : res.send(404)) 
            .catch(console.error);
    } catch (error) {
        res.render("dashboard/status/400");
    }   
}