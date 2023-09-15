<template>
  <BaseContainer>
    <div class="service">
      <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.content }}</p>
      </div>
      <img :src="event.image" :alt="event.title" />
    </div>
  </BaseContainer>
</template>

<script setup>
import useGetService from "~/composables/useGetEvent";
const route = useRoute();

const { data } = await useGetService(route.params.slug);
const event = computed(() => data.value);
</script>

<style scoped>
.service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
}
p {
  white-space: pre-line;
}

@media screen and (max-width: 750px) {
  .service {
    margin: 0;
    flex-direction: column-reverse;
    text-align: center;
    margin-bottom: 1rem;
  }

  img {
    height: 50vh;
  }
}
</style>
