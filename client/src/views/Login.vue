<template>
  <div id="login">
    <div class="left-half">
      <div class="center">
        <div class="center-h logo-block">
          <img src="../assets/common/Logo.svg" />
          <h1>Put yourself to another world</h1>
        </div>

        <div class="input-block">
          <input
            v-if="is_sign_up"
            class="input is-large panel-input"
            type="text"
            name="name"
            v-model="name"
            placeholder="Full name"
          />
          <input
            class="input is-large panel-input"
            type="text"
            name="email"
            v-model="email"
            placeholder="Email"
          />
          <input
            class="input is-large panel-input"
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
          />
          <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
            style="color: red"
          >
            {{ message }}
          </div>
        </div>

        <div class="center-h">
          <button
            class="plate-button button is-large"
            type="button"
            v-on:click="enter"
          >
            {{ buttonValue() }}
          </button>
        </div>
        <div class="divided">
          <span></span>
          <span class="divider"></span>
          <span></span>
        </div>
        <div class="center-h panel-create-account">
          <h2>{{ backToValue() }}</h2>
          <button v-on:click="is_sign_up = !is_sign_up; message = ''">
            {{ changerValue() }}
          </button>
        </div>
      </div>
    </div>
    <div class="right-half"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      errorMsg: "",
      loading: false,
      message: "",
      is_sign_up: false,
    };
  },
  methods: {
    enter() {
      let data = {
        email: this.email,
        password: this.password,
      };
      let action = "auth/";
      if (this.is_sign_up) {
        data.name = this.name;
        action += "register";
      } else action += "login";
      this.$store.dispatch(action, data).then(
        () => {
          this.$router.push("/");
        },
        (error) => {
          this.loading = false;
          this.message =
            "*" +
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    backToValue() {
      if (this.is_sign_up) return "Already have an account?";
      return "Dont't have account yet?";
    },
    changerValue() {
      // this.message = "";
      if (this.is_sign_up) return "Log in!";
      return "Create!";
    },
    buttonValue() {
      if (this.is_sign_up) return "Sign up!";
      return "Log in!";
    },
  },
};
</script>

<style lang="scss">
#login {
  .right-half {
    background: url(../assets/login_page/login_background.png);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 50%;
    position: absolute;
    right: 0px;
    height: 100%;
    box-shadow: -4px 4px 9px 0px #00000040;
  }

  .left-half {
    width: 50%;
    position: absolute;
    left: 0px;
    height: 100%;
    .center {
      position: absolute;
      width: 80%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      .input-block {
        padding: 45px;
        .panel-input {
          border: 2px solid rgba(0, 0, 0, 0.8);
          box-sizing: border-box;
          border-radius: 5px;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 18px;
          margin: 10px 0px;
          color: rgba(0, 0, 0, 0.6);
          padding: 31px 29px;
        }
      }
      .center-h {
        margin: auto;
        width: 70%;
        text-align: center;
        h1 {
          font-size: 18px;
          padding-top: 6px;
        }
        .plate-button {
          background-color: #b6ff7c;
          width: 100%;
          font-family: "Poppins", sans-serif;
          height: 65px;
          border: none;
          color: #474747;
          font-size: 25px;
          font-weight: 700;
          font-style: normal;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }
      }
      .divided {
        display: flex;
        align-items: center;
      }

      .divider {
        flex-grow: 1;
        border-bottom: 2px solid #c4c4c4;
        margin: 45px 240px;
      }
      .panel-create-account {
        font-size: 15px;
        button {
          background: none !important;
          border: none;
          padding: 0 !important;
          text-decoration: none;
          cursor: pointer;
          font-family: Sansita;
          color: #474747;
          font-size: 15px;
          transition-duration: 0.5s;
          &:hover {
            color: #b6ff7c;
          }
        }
      }
    }
  }
}
</style>
