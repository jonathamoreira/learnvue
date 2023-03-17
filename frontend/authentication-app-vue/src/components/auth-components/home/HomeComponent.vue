<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand">JWT + Node + Vue</a>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" @click="logOutUser"><button>Log Out</button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Name: {{ user.name }}</li>
              <li class="list-group-item">E-mail: {{ user.email }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./Home.js"></script>

<style src="" scoped>

</style>
<!--<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>-->
