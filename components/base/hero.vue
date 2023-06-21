<template>
  <div class="hero">
    <h1>
      <span>{{ title }}</span>
    </h1>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.hero {
  background-image: url("assets/images/hero.webp");
  background-size: 700px 400px;
  background-repeat: no-repeat;
  background-position: 25%;
  background-color: #e1dae7;
  height: 450px;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding-right: 5rem;
  width: 100vw;
  position: relative;
}
h1 span {
  display: inline-block;
  position: absolute;
  left: 60vw;
}
</style>
