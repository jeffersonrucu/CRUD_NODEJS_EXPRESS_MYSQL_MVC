window.onload = function () {
    const btnDeleteClient  = document.querySelectorAll('.js-client-delete');
    const btnDeleteProduct = document.querySelectorAll('.js-product-delete');

    if (btnDeleteClient.length > 0) {
        function deleteClient(element) {
            let formdata = new FormData();

            let requestOptions = {
                method: 'DELETE',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`http://localhost:3000/cliente/excluir/${element.id}`, requestOptions)
                .then(response => {
                    if(response.status == 200) {
                        window.location.href = "http://localhost:3000/cliente";
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }

        btnDeleteClient.forEach(element => {
            element.addEventListener('click', function () {
                deleteClient(this)
            })
        });
    }

    if (btnDeleteProduct.length > 0) {
        function deleteProduct(element) {
            let formdata = new FormData();

            let requestOptions = {
                method: 'DELETE',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`http://localhost:3000/produto/excluir/${element.id}`, requestOptions)
                .then(response => {
                    if(response.status == 200) {
                        window.location.href = "http://localhost:3000/produto";
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }

        btnDeleteProduct.forEach(element => {
            element.addEventListener('click', function () {
                deleteProduct(this)
            })
        });
    }
}