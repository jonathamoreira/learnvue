<template>
    <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-4"
          style="margin-top: 70px; height: auto; padding-top: 100px !important"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
        <!--INÍCIO BLOCO: NOME-->
        <div class="form-group">
        <input
          aria-label="name"
          type="text"
          name="name"
          id="name"
          class="form-control mb-3"
          placeholder="Digite seu Nome"
          v-model="registerForm.name"
          :class="{
                  'is-invalid': isSubmitted && $v.registerForm.name.$error,
                }"
            />
            <div
            v-if="isSubmitted && !$v.registerForm.name.required"
            class="invalid-feedback"
            >
                O campo nome é obrigatório!
            </div>
          </div>
          <!--FIM DO BLOCO: NOME-->
         <!--INÍCIO BLOCO: E-mail-->
         <div class="form-group">
          <input
          aria-label="email"
          type="email"
          name="email"
          id="email"
          class="form-control mb-3"
          placeholder="Digite seu E-mail"
          v-model="registerForm.email"
          :class="{
                  'is-invalid': isSubmitted && $v.registerForm.email.$error,
                }"
            />
            <div
            v-if="isSubmitted && !$v.registerForm.email.required"
            class="invalid-feedback"
            >
               <span v-if="!v.registerForm.email.required"> O campo email é obrigatório!</span>
               <span v-if="!v.registerForm.email.email"> E-mail inválido! Tente novamente</span>
            </div>
          </div>
          <!--FIM DO BLOCO: E-MAIL-->

         <!--INÍCIO BLOCO: PASSWORD-->
         <div class="form-group">
         <input
          aria-label="password"
          type="password"
          name="password"
          id="password"
          class="form-control mb-3"
          placeholder="Digite sua Senha"
          v-model="registerForm.password"
          :class="{
                  'is-invalid': isSubmitted && $v.registerForm.password.$error,
                }"
            />
            <div
            v-if="isSubmitted && !$v.registerForm.password.required"
            class="invalid-feedback"
            >
            <span v-if="!v.registerForm.password.required">
              O campo senha é obrigatório!>
            </span>
            <span v-if="!v.registerForm.password.minLength">
              A senha deve conter no mínimo 6 caracteres!>
            </span>
            </div>

          </div>

          <!--FIM DO BLOCO: PASSWORD-->

          <p class="center">
            Já tem uma conta cadastrada?<router-link to="/">Fazer Login</router-link>
          </p>

          <!--INÍCIO BLOCO: BOTÃO SUBMIT-->

          <center>
            <button
            @click="submitRegisterUser"
            class="btn btn-primary btn-block w-75 my-4"
            >Cadastrar</button>
          </center>

          <!--FIM DO BLOCO: BOTÃO SUBMIT-->

        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

  <style src="" scoped>

  </style>
