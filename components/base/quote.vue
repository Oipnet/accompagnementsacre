<template>
  <figure>
    <blockquote>
      <p>
        {{ quote }}
      </p>
    </blockquote>
    <figcaption>{{ author }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
});
</script>

<style scoped>
p {
  font-style: italic;
}

figcaption {
  font-weight: bold;
  font-size: 0.8rem;
}
</style>
