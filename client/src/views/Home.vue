<template>
  <div>
    <section id="header">
      <div class="left-half">
        <div class="center">
          <div class="left-h">
            <h1>Put yourself to another world</h1>
          </div>
          <div class="left-h">
            <button
              class="plate-button button is-large"
              type="button"
              @click="goto('create')"
            >
              Try it now
            </button>
          </div>
          <div class="left-h">
            <div class="slogan">
              <p>The AI artist generates masterpiece from your photo.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-half"></div>
    </section>
    <section id="create">
      <div class="style-header">
        <h1>Choose your style</h1>
        <div id="styles" class="style-choose">
          <style-checkbox
            v-for="style in allStyles"
            :style-name="style"
            @click="uncheckStyles(style)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import StyleCheckbox from "../components/StyleCheckbox.vue";

export default {
  components: { StyleCheckbox },
  name: "Home",
  data() {
    return {
      choosed_style: "",
      allStyles: ["traditional", "old fashion", "modernism", "beautiful"],
    };
  },
  methods: {
    goto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
    uncheckStyles(choosed_style) {
      this.choosed_style = choosed_style;
      console.log(this.choosed_style)
      let container = document
        .querySelector("#styles")
        .querySelectorAll('input[type="checkbox"]');
      container.forEach((element) => {
        if (element.className != choosed_style.replace(/ /g,'_').toLowerCase()) element.checked = false;
      });
    },
  },
};
</script>

<style lang="scss">
section {
  height: 100vh;
}
#header {
  .right-half {
    background-image: url(../assets/home_page/home_head_section_background.png);
    background-size: 100%;
    background-repeat: no-repeat;
    width: 50vw;
    right: 0px;
    height: 100vh;
    position: absolute;
  }

  .left-half {
    width: 50%;
    position: absolute;
    left: 0px;
    height: 100%;
  }
  .center {
    position: absolute;
    width: 80%;
    left: 45%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    .left-h {
      margin: 0;
      width: 90%;
      text-align: left;
      margin-bottom: 50px;
      h1 {
        font-size: 50px;
      }
      .plate-button {
        margin-top: 0;
        background-color: #b6ff7c;
        width: 50%;
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
      .slogan {
        width: 40%;
      }
    }
  }
}

#create {
  .style-header {
    font-size: 40px;
    font-weight: 700;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    padding: 20px;
  }

  .style-choose {
    margin-right: 100px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
