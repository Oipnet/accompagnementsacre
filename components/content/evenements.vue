<template>
  <section>
    <BaseTitle>Mes évènements</BaseTitle>
    <div>
      <ContentEventCard v-for="event in events" :event="event" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  events: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
div {
  width: 75%;
  margin: auto;
}
</style>
