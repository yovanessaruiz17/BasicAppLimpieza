<template>
    <header class="header">
        <div class="logo">
            <img src="logo1.png" alt="" >
        </div>
        <nav>
            <ul class="items">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="trabaja_connosotros.html">Contactanos</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="registrarse.html">Registrarse</a></li>
                <li><a href="Lista_Empleado.html">Lista y chat</a></li>
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

nav ul li a {
    display: block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;
}

nav ul li a:hover {
    color:gold;
}

form {
    width: 300px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.68);
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    float: left;
}

form label {
    display: block;
    margin-top: 10px;
}

form input {
    width: 90%;
    padding: 10px;
    margin-top: 5px;

    margin: 5px 0 22px 0;
    display: inline-block;
    border-color:#333;
    background: #f1f1f1;
}

form button {
    display: block;
    width: 100%;
    padding: 15px 20px;
    margin-top: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    margin: 8px 0;
    opacity: 0.9;
    
}

form button:hover {
    background-color: #555;
    opacity:1;
}
</style>