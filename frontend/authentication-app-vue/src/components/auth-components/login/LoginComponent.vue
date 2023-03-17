<template>
    <div class="container">
    <div class="row">
      
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        
        <form
          class="text-center border border-primary p-5"
          style="margin-top: 70px; width: auto; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
        <h2 class="mb-5">Login</h2>
         <!--INÍCIO BLOCO: E-mail-->

          <div class="form-group">
              <input
                aria-label="email"
                type="email"
                name="email"
                id="email"
                class="form-control mb-5"
                placeholder="Digite seu E-mail"
                v-model="loginForm.email"
                :class="{
                  'is-invalid': isSubmitted && $v.loginForm.email.$error,
                }"
            />
            <div
            v-if="isSubmitted && !$v.loginForm.email.required"
            class="invalid-feedback"
            >
                O campo email é obrigatório!
            </div>
          </div>
          <!--FIM DO BLOCO: E-MAIL-->

         <!--INÍCIO BLOCO: PASSWORD-->
         <div class="form-group">
            <input
              aria-label="password"
              type="password"
              id="password"
              name="password"
              class="form-control mb-5"
              placeholder="Digite sua Senha"
              v-model="loginForm.password"
              :class="{
                'is-invalid': isSubmitted && $v.loginForm.password.$error,
              }"
            />
            <p
              v-if="isSubmitted && !$v.loginForm.password.required"
              class="invalid-feedback"
            >
              O campo password é obrigatório!
            </p>

          </div>

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

  <style src="" scoped></style>
