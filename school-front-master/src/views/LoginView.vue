<template>
    <div class="container">
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <h1>Enter your access credentials</h1>
                    <div class="login">
                        <form>
                            <div class="mb-3">
                                <label for="InputEmail1" class="form-label">Email address</label>
                                <input type="text" class="form-control" id="InputEmail1" aria-describedby="emailHelp" v-model="usuario" />
                                <div id="emailHelp" class="form-text">Please enter your email.</div>
                            </div>
                            <div class="mb-3">
                                <label for="InputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="InputPassword1" v-model="pass">
                                <div id="passwordHelp" class="form-text">Please enter your password.</div>
                            </div>
                            <div class="mb-3">
                                <a href="#" id="forgotHelp" class="form-text">Forgot your password?.</a>
                            </div>
                            <button @click="sendForm" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>

                <div class="col d-flex justify-content-center">
                    <img src="../components//icons/logo1.png" alt="school">
                    
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
    import axios from "axios";
import Footer from '../components/Footer.vue';


    export default {
        data() {
            return {
                usuario: '',
                pass: ''
            };
        },
        name: 'Login',
        components: {
            Footer,
        },
        methods: {
            sendForm() {
                const dataForm = {
                    usuario: this.usuario, 
                    pass: this.pass
                }

                axios
                .post("http://localhost:3000/api/v1/auth", dataForm)
                .then((response) => {
                    let token = response.data.token;

                    // saved token in localstore
                    localStorage.setItem("token", token);
                })
                .catch((error) => {
                    return { response: error };
                });
            },
        }
    };

</script>

<style>
@media (max-width: 768px) {
  .container {
    max-width: 100%;
  }
}
</style>