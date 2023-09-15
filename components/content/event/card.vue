<template>
  <div class="card" @click="handleClickEvent">
    <nuxt-img
      :src="event.image"
      :alt="event.title"
      :width="300"
      :height="300"
      loading="lazy"
    />
    <h2>{{ event.title }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

const handleClickEvent = () => {
  navigateTo(`/evenement/${props.event.slug}`);
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
  padding: 0 2em;
}
p {
  white-space: pre-line;
}
@media screen and (max-width: 800px) {
  .card {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    padding: 1em;
  }
}
</style>
