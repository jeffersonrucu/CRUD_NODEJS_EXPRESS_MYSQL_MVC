module.exports.read   = function(application, req, res) {
    res.render("dashboard/product");
}

module.exports.create = function(application, req, res) {
    try {
        res.render("dashboard/status/201");
    } catch (error) {
        res.render("dashboard/status/400");
    }   
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