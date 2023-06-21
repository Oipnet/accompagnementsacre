<template>
  <h1>Mes Services</h1>

  <div class="grid">
    <section
      v-for="service in services"
      :key="service.slug"
      class="service"
      :style="{ backgroundColor: service.color }"
    >
      <div class="content">
        <h2>{{ service.title }}</h2>
        <p>{{ service.content }}</p>
      </div>
      <div class="image">
        <nuxt-img
          :src="service.image"
          :alt="service.title"
          width="200"
          height="200"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import useGetServices from "~/composables/useGetServices";

const services = (await useGetServices()).data;
</script>
<style scoped>
h1 {
  display: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.service {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0 0 2rem 0;
  text-align: center;
}

.content {
  padding: 1rem;
}

.image {
  width: 200px;
}

.image img {
  background-color: #fff;
}

p {
  white-space: pre-line;
}
</style>
