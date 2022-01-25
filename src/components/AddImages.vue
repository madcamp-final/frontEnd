<style scoped>
.container img {
  max-width: 200px;
  max-height: 200px;
  display: block;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.title {
  font-weight: 700;
}
</style>

<template>
  <div class="container">
    <p class="title">Single Image Preview</p>
    <hr />
    <div class="large-12 medium-12 small-12 cell">
      <label>
        File Preview
        <input
          type="file"
          id="img_0"
          accept="image/*"
          @change="handleFileUpload_0($event)"
        />
      </label>
      <label>
        File Preview
        <input
          type="file"
          id="img_1"
          accept="image/*"
          @change="handleFileUpload_1($event)"
        />
      </label>
      <label>
        File Preview
        <input
          type="file"
          id="img_2"
          accept="image/*"
          @change="handleFileUpload_2($event)"
        />
      </label>
      <img v-bind:src="imagePreview_0" v-show="showPreview_0" />
      <img v-bind:src="imagePreview_1" v-show="showPreview_1" />
      <img v-bind:src="imagePreview_2" v-show="showPreview_2" />
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      file_0: "",
      showPreview_0: false,
      imagePreview_0: "",
      file_1: "",
      showPreview_1: false,
      imagePreview_1: "",
      file_2: "",
      showPreview_2: false,
      imagePreview_2: "",
      pid: 0,
    };
  },

  methods: {
    submitFile() {
      let formData = new FormData();
      formData.append("pid", this.pid);
      formData.append("img_0", this.file_0);
      formData.append("img_1", this.file_1);
      formData.append("img_2", this.file_2);

      axios
        .post("http://192.249.18.199:80/upload_img", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },

    handleFileUpload_0(event) {
      this.file_0 = event.target.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          this.showPreview_0 = true;
          this.imagePreview_0 = reader.result;
        }.bind(this),
        false
      );

      if (this.file_0) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file_0.name)) {
          reader.readAsDataURL(this.file_0);
        }
      }
    },

    handleFileUpload_1(event) {
      this.file_1 = event.target.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          this.showPreview_1 = true;
          this.imagePreview_1 = reader.result;
        }.bind(this),
        false
      );

      if (this.file_1) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file_1.name)) {
          reader.readAsDataURL(this.file_1);
        }
      }
    },

    handleFileUpload_2(event) {
      this.file_2 = event.target.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          this.showPreview_2 = true;
          this.imagePreview_2 = reader.result;
        }.bind(this),
        false
      );

      if (this.file_2) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file_2.name)) {
          reader.readAsDataURL(this.file_2);
        }
      }
    },

  },
};
</script>
