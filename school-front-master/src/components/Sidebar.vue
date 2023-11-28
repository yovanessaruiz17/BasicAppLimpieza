<template>
    <div class="d-flex" >
        <div id="sidebar-container" class="bg-primary">
            <div class="menu">
                <a href="#" class="d-block text-light p-3"><ion-icon name="tablet-portrait-outline"></ion-icon> - Tablero</a>
                <a href="#" class="d-block text-light p-3"><ion-icon name="people-outline"></ion-icon> - Usuario</a>
                <a href="#" class="d-block text-light p-3"><ion-icon name="stats-chart-outline"></ion-icon> - Estadisticas</a>
                <a href="#" class="d-block text-light p-3"><ion-icon name="person-outline"></ion-icon> - Perfil</a>
                <a href="#" class="d-block text-light p-3"><ion-icon name="settings-outline"></ion-icon> - Configuración</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',         
    };
</script>

<style scoped>
:root {
    --primary: #111B54;
    --light: #ffffff;
    --grey: #efefef;
}

a:hover {
    text-decoration: none;
}

.bg-primary { background-color: #111B54 !important; }

#sidebar-container {
    min-height: 100vh;
}

#sidebar-container .logo {
    padding: .875rem 1.25rem;
}

#sidebar-container .menu {
    width: 18rem;
}

</style>
