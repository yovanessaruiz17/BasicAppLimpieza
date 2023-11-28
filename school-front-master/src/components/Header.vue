<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-buttom" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../components/icons/IconSchoolHeader.png" alt="logo" :style="{width: '200px'}" >
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                
            </ul>
            <div class="form-inline my-2 my-lg-0">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../components/icons/IconProfile.png" class="img-fluid rounded-circle mr-2" :style="{width: '60px'}" alt="">
                        Andrés García
                    </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Mi perfil</a></li>
                    <li><a class="dropdown-item" href="#">Suscripciones</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" @click="deleteToken">Cerrar sesión</a></li>
                </ul>
                </li>
            </ul>

            </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header', 
        methods: {
            deleteToken() {
                // Delete token in localStore
                localStorage.removeItem("token");

                // Reload page
                window.location.reload();
            },
        }
    };
</script>

<style>

</style>
