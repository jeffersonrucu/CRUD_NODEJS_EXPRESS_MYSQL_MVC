module.exports = function(application) {

  // Product
  application.get('/produto', function(req, res){
    application.src.controller.productController.read(application, req, res);
  });

  application.post('/registrar/produto', function(req, res){
    application.src.controller.productController.create(application, req, res);
  });

  application.patch('/editar/produto', function(req, res){
    application.src.controller.productController.update(application, req, res);
  });

  application.delete('/excluir/produto', function(req, res){
    application.src.controller.productController.delete(application, req, res);
  });

  // Client
  application.get('/clientes', function(req, res){
    application.src.controller.clientController.read(application, req, res);
  });

  application.post('/registrar/cliente', function(req, res){
    application.src.controller.clientController.create(application, req, res);
  });

  application.patch('/editar/cliente', function(req, res){
    application.src.controller.clientController.update(application, req, res);
  });

  application.delete('/excluir/cliente', function(req, res){
    application.src.controller.clientController.delete(application, req, res);
  });
}