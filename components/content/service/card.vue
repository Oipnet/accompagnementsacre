<template>
  <div class="card" @click="handleClickService">
    <nuxt-img
      :src="service.image"
      :alt="service.title"
      :width="300"
      :height="300"
      loading="lazy"
    />
    <h2>{{ service.title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});

const handleClickService = () => {
  navigateTo(`/service/${props.service.slug}`);
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

h2 {
  text-align: center;
  padding: 2em;
}
p {
  white-space: pre-line;
}
</style>
