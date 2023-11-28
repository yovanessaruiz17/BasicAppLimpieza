<template>
    <div id="content">
        <div class="row header-list">
            <div class="col">
                <h3>Lista de usuarios</h3>
            </div>
            <div class="col buttom">
                <button class="btn btn-primary">Agregar usuario</button>
            </div>
        </div>
        <div class="row">
            <div class="list-group">
                <!-- list group -->
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 1
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 2
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 3
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 4
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 5
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 6
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 7
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 8
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 9
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    Usuario 10
                    <div>
                        <button class="btn btn-primary mr-2">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
                <!-- Agregar más elementos de lista de usuarios aquí -->
            </div>

            <div class="container-nav">
                <nav aria-label="..." id="select-pagination">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Anterior</a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">Siguiente</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'ListUser'
    };
</script>

<style>

    :root {
        --primary: #111B54;
        --hover: #dc3545;
    }

    #content {
        overflow-y: auto;
        height: 100;
        padding-bottom: 5rem;
        padding-top: 15px;
        width: 95%;
    }

    .header-list .buttom {
        text-align: right;
    };

    #select-pagination {
        padding-top: 10px;
    }

    .page-link {
        background-color: var(--primary);
    }

    .page-link:hover {
        background-color: var(--hover);
    }

    .btn-primary {
        margin-right: 7px;
    }

    .container-nav {
        margin-top: 10px;
    }

</style>