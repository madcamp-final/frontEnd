<template>
  <div class="container">
    <div class="image-container"><AddImages /></div>
  </div>
</template>

<script>
import AddImages from "../components/AddImages.vue";

export default {
  components: {
    AddImages,
  },
};
</script>

<style scoped>
.container {
  margin-left: 50px;
  padding-top: 30px;
}
.selector-container {
  padding-top: 30px;
}
</style>
