<template>
    <div id="content">
        <section>
            <div class="row">
                <div class="col-lg-9">
                    <h1>Bienvenido Andrés</h1>
                    <p>Revisa la última información</p>
                </div>
                <div class="col-lg-3 d-flex">
                    <button class="btn btn-primary align-self-center" :style="{width: '240px'}">Descargar reporte</button>
                </div>
                <hr :style="{width: '94%'}">
            </div>
        </section>
        <ListUser/>
    </div>
</template>

<script scoped>
    import ListUser from "../components/ListUser.vue";
    export default {
        name: 'HomeMain',
        components: {
            ListUser,
        }
    };
</script>

<style setup>
    :root {
        --primary: #111B54
    }

    
    #content {
        overflow-y: auto;
        height: 100vh;
        padding-bottom: 5rem;
        padding-top: 15px;
    }
    
    .btn {
        border: 0;
    }

    .btn-primary {
        background-color: var(--primary);
    }

    .btn-primary:hover {
        background-color: var(--primary);
    }

</style>
