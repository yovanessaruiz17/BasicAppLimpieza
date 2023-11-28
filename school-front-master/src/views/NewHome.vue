<template>
    <div class="container-home">
        <div class="row">
            <Header1/>
        </div>
        <div class="row">
            <div class="col">
                <Sidebar/>
            </div>
            <div class="col-10">
                <HomeMain/>
            </div>
        </div>
    </div>
</template>
<script>
import Header1 from "../components/NewHeader.vue";
import HomeMain from "../components/Home.vue";
import Sidebar from "../components/Sidebar.vue";

    export default {
        name: 'home',
        components: {
            Header1,
            Sidebar,
            HomeMain
        }
    };
</script>
<style>
@media (max-width: 768px) {
  .container-home {
    max-width: 100%;
  }
}
</style>