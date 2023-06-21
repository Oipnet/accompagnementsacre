<template>
  <BaseContainer>
    <div class="service">
      <div>
        <h1>{{ service.title }}</h1>
        <p>{{ service.content }}</p>
      </div>
      <img :src="service.image" :alt="service.title" />
    </div>
  </BaseContainer>
</template>

<script setup>
import useGetService from "~/composables/useGetService";
const route = useRoute();

const { data } = await useGetService(route.params.slug);
const service = computed(() => data.value);
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
