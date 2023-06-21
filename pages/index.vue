<template>
  <ContentMe :summary="true" />
  <ContentServices :services="services" />
  <ContentEvenements />
</template>

<script setup>
import useGetServices from "~/composables/useGetServices";

definePageMeta({
  layout: "default",
  title: "Homepage",
});
const { data } = await useGetServices();

const services = computed(() => data.value);
</script>
