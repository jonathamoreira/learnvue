<template>
    <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; width: auto; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
         <!--INÍCIO BLOCO: E-mail-->
         
          <input
          type="email"
          name="email"
          id="email"
          class="form-control mb-3"
          placeholder="Digite seu E-mail"
          v-model="loginForm.email"
            ><label for="email"></label><br>
          <!--FIM DO BLOCO: E-MAIL-->

         <!--INÍCIO BLOCO: PASSWORD-->
         
         <input
          type="password"
          name="password"
          id="password"
          class="form-control mb-3"
          placeholder="Digite sua Senha"
          v-model="loginForm.password"
          ><label for="password"></label>

          <!--FIM DO BLOCO: PASSWORD-->
          <p class="center">
            Não tem uma conta cadastrada?<router-link to="/register">Cadastre Aqui</router-link>
          </p>
          <!--INÍCIO BLOCO: BOTÃO SUBMIT-->

          <center>
            <button
            @click="submitLoginUser"
            class="btn btn-primary btn-block w-75 my-4"
            >Entrar</button>
          </center>

          <!--FIM DO BLOCO: BOTÃO SUBMIT-->

        </form>
      </div>
    </div>
  </div>
  </template>

<script src="./Login.js"></script>

  <style src="" scoped>

  </style>
