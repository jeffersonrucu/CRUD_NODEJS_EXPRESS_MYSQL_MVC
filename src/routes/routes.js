module.exports = function(application) {

  // Product
  application.get('/produto', function(req, res){
    application.src.controller.productController.read(application, req, res);
  });

  application.get('/produto/novo', function(req, res){
    res.render("dashboard/registerProduct");
  });

  application.post('/produto/registrar', function(req, res){
    application.src.controller.productController.create(application, req, res);
  });

  application.patch('/produto/editar', function(req, res){
    application.src.controller.productController.update(application, req, res);
  });

  application.delete('/produto/excluir/:id', function(req, res){
    application.src.controller.productController.delete(application, req, res);
  });

  // Client
  application.get('/cliente', function(req, res){
    application.src.controller.clientController.read(application, req, res);
  });

  application.get('/cliente/novo', function(req, res){
    res.render("dashboard/registerClient");
  });

  application.post('/cliente/registrar', function(req, res){
    application.src.controller.clientController.create(application, req, res);
  });

  application.patch('/cliente/editar', function(req, res){
    application.src.controller.clientController.update(application, req, res);
  });

  application.delete('/cliente/excluir/:id', function(req, res){
    application.src.controller.clientController.delete(application, req, res);
  });
}