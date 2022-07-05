window.onload = function () {
    const btnDelete = document.querySelectorAll('.delete');

    if (document.querySelectorAll('.delete').length > 0) {
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

        btnDelete.forEach(element => {
            element.addEventListener('click', function () {
                deleteClient(this)
            })
        });
    }
}