<template>
  <ContentMe :summary="true" />
  <ContentServices :services="services" />
  <ContentEvenements :events="events" />
</template>

<script setup>
import useGetServices from "~/composables/useGetServices";
import useGetEvents from "~/composables/useGetEvents";

definePageMeta({
  layout: "default",
  title: "Homepage",
});
const servicesData = await useGetServices();

const services = computed(() => servicesData.data.value);

const eventsData = await useGetEvents();

const events = computed(() => eventsData.data.value);
</script>
