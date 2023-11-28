<template>
    <div class="contenedor">
        <div class="contenedor1">
            <div class="fotografia">
                <img class="imagengra" src="./limpieza.jpg" alt="imapicture">
            </div>
            <div class="fotografia">
                <h1>Hola, Bienvenidos a Limpio y Claro</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare urna in laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                <a href="#" class="botons"><button>Saber mas</button></a>
            </div>
        </div>
        <h1 style="padding: 0 30%;">Testimonio de clientes</h1>
        <div class="trContenedor">
            <div class="imaformacion1">
                <img src="./persona1.jpg" alt="segundafoto">
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae ab quisquam accusantium possimus error, soluta aspernatur doloribus quidem ipsa tenetur quod reprehenderit odio eligendi fugiat sequi, reiciendis dolore? Eum.</h4>
            </div>
            <div class="imaformacion1">
                <img src="./persona2.jpg" alt="segundafoto">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore fuga voluptates reprehenderit eveniet iure nisi cumque odio magnam, quibusdam quidem nulla, debitis culpa a consectetur consequuntur esse reiciendis doloribus!</h4>
            </div>
            <div class="imaformacion1">
                <img src="./persona3.jpg" alt="segundafoto">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque debitis libero id recusandae fugiat accusantium facilis laborum iure sapiente praesentium eveniet maxime, dolor explicabo nesciunt velit architecto rerum numquam? Aperiam.</h4>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
.contenedor1{
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    top:668px;
    height: 575px;
}
.fotografia{
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    padding:0 20px;
}
.imagengra{
    height: 390px;
    width: 523px;
    margin: 0 auto;
    display: flex;
}
.texto1{
    font-family:'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 29px;
    
}
.botons button{
    margin-left: 20px;
    font-weight: 700;
    color: darkslateblue;
    padding: 25px 45px;
    background: whitesmoke;
    border-radius: 50px;
    border-color: #555;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
.botons button:hover{
    background-color:beige;
    color:mediumorchid;
    transform: scale(1.1);
}

.trContenedor{
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
}
.imaformacion1{
    color: cadetblue 75%;
    left: 0px;
    top: 869px;
    width: 400px;
    height: 300px;
    left: 0px;
    top: 869px;
    align-content: space-between;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:0 50px;
}


.imaformacion1 img{
    width: 200px;
    height: 200px;
    left: 220px;
    top: 946px;
    border-radius: 60%;
    border: 7px solid #000000ad;
    
}
  </style>