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
      <div class="transfer-block">
        <div class="input-image">
          <span v-if="no_style" style="color: red">*Style can't be blank!</span>

          <div id="preview" class="img-preview">
            <img v-if="fileUrl" :src="fileUrl" />
          </div>

          <div class="plate-file file has-name">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                accept="image/*"
                @change="onFileChange($event)"
              />
              <span class="backgroud-file-input file-cta plate-input">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label"> Load file… </span>
              </span>
              <span class="file-name" v-if="fileName">
                {{ fileName }}
              </span>
            </label>
          </div>
        </div>
        <div id="preview" class="img-preview">
          <img v-if="isLoading" src="../assets/common/loading.gif" />
          <img v-if="resultImage" :src="resultImage" />
        </div>
      </div>
      <div style="text-align: center">
        <button
          class="button is-large"
          type="button"
          style="
            background-color: #b6ff7c !important;
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-style: normal;
          "
          @click="transferImage()"
        >
          Transfer!
        </button>
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
      no_style: false,
      file: null,
      fileUrl: "",
      fileName: "",
      choosedStyle: "",
      allStyles: [
        "la_muse",
        "rain_princess",
        "scream",
        "udnie",
        "wave",
        "wreck",
        "cube",
        "matta",
      ],
      resultImage: "",
      isLoading: false,
    };
  },
  methods: {
    onFileChange(e) {
      this.resultImage = "";
      this.file = e.target.files[0];
      this.fileName = this.file.name;
      this.fileUrl = URL.createObjectURL(this.file);
    },
    transferImage() {
      if (!this.choosedStyle) {
        this.no_style = true;
        return null;
      }
      this.resultImage = "";
      this.isLoading = true;

      const API_URL = process.env.VUE_APP_BASE_SERVER_URL + "transfer";

      let data = new FormData();
      data.append("file", this.file);
      data.append("style", this.choosedStyle);

      let config = {
        header: {
          "Content-Type": "'multipart/form-data'",
        },
        responseType: "blob",
      };
      axios
        .post(API_URL, data, config)
        .then((response) => {
          const urlCreator = window.URL || window.webkitURL;
          this.resultImage = urlCreator.createObjectURL(response.data);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    uploadFile(e) {
      this.File = e.target.files;
    },
    dragFile(e) {
      this.File = e.dataTransfer.files;
    },
    goto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
    },
    uncheckStyles(choosedStyle) {
      this.choosedStyle = choosedStyle;
      this.no_style = false;
      let container = document
        .querySelector("#styles")
        .querySelectorAll('input[type="checkbox"]');
      container.forEach((element) => {
        if (element.className != choosedStyle.replace(/ /g, "_").toLowerCase())
          element.checked = false;
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
    padding: 50px 0;
  }

  .plate-input {
    border: none;
    color: #474747;
    :hover {
      background-color: #b6ff7c;
    }
  }
  .backgroud-file-input {
    background-color: #b6ff7c !important;
  }
  .img-preview {
    width: 500px;
    height: 500px;
    border: solid 3px;
    border-radius: 10px;
    box-shadow: 5px 5px 18px #888888;

    img {
      height: 100%;
      width: 100%;
      display: block;
      object-fit: contain;
      object-position: center;
      padding: 5px;
    }
  }
  .transfer-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .plate-file {
    font-family: "Poppins", sans-serif;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
  }
}
</style>
