<template>
  <section>
    <BaseTitle>Mes services</BaseTitle>
    <div>
      <ContentServiceCard v-for="service in services" :service="service" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  services: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: auto;
  width: 75%;
}
</style>
