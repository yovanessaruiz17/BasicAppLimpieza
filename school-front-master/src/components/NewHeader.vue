<template>
    <header class="header">
        <div class="logo">
            <img src="logo1.png" alt="" >
        </div>
        <nav>
            <ul class="items">
                <router-link to="/"></router-link>
                <router-link to="/limpia&claro" class="logo">Limpio&Claro</router-link>
                <router-link to="/login">Login</router-link>
            </ul>
        </nav>
    </header>
</template>
<script>
export default{
    name:NewHeader
}
</script>
<style>
header{
     display: flex;
     flex-wrap:unset;
     justify-content: space-between;
     align-items: center;
     height: 120px;
     padding: 15px ;
     background-color: rgb(255, 255, 255);
     font-size: 70px;
     width: 100%;
 }
 .logo{
     display: flex;
     align-items: center;
     
     
 }
 .logo img{
     height: 100px;
     margin-right: 10px;
     
 }

nav ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style:none;
    margin-right: 30px;
}
.router-link{
    display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;   
}

.router-link:hover{
    color:gold;
}

</style>