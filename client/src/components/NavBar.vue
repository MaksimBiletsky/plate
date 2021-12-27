<template>
  <div class="hero-head" style="position: absolute; width: 100%">
    <nav class="navbar background-color">
      <div class="navbar-brand">
        <div class="plate-logo">
          <a class="navbar-item" href="/home">
            <img src="../assets/common/Logo.svg" />
          </a>
        </div>
      </div>
      <div class="plate-item">
        <span class="navbar-item">
          <i class="fas fa-image plate-icon"></i>
          <a href="/gallery"> Gallery </a>
        </span>
      </div>
      <div class="plate-item">
        <span class="navbar-item">
          <i class="icon fas fa-plus-square plate-icon"></i>
          <a @click="goto('create')"> Create </a>
        </span>
      </div>
      <div v-if="!isAuth()" class="plate-item">
        <span class="navbar-item">
          <i class="fas fa-user-circle plate-icon"></i>
          <a href="/login"> Login </a>
        </span>
      </div>
      <div v-if="isAuth()" class="plate-item">
        <span class="navbar-item">
          <i class="fas fa-user-circle plate-icon"></i>
          <a href="/login"> Logout </a>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  methods: {
    isAuth() {
        return this.$store.state.auth.user 
    },
    goto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  },
};
</script>

<style lang="scss">
.background-color {
  background: rgba(173, 173, 173, 0.1) !important;
  backdrop-filter: blur(9px) !important;
}

.plate-item {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #474747;
  padding: 10px 40px;
  display: flex;
  a:visited {
    color: #474747;
  }
  a {
    color: #474747;
  }
}
.plate-logo {
  padding: 10px 40px;
}
.plate-icon {
  margin: auto;
  color: #b6ff7c !important;
  margin-right: 5px;
}
</style>
