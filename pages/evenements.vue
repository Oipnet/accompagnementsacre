<template>
  <h1>Evènements</h1>
  <section class="magie">
    <div>
      <h2>La magie des cercles de femme</h2>
      <p>
        Les cercles de femmes sont des espaces privilégiés pour les femmes qui cherchent une reconnexion à elles-mêmes
        et aux autres femmes.<br>
        Les cercles permettent de s’explorer et de s’exprimer en toute bienveillance et avec beaucoup de douceur.
      </p>
      <p>
        Ils mettent en lumière le chemin de celles qui désirent grandir, se transformer, se révéler.
      </p>
      <p>
        Chacune vient trouver sa propre vérité ! Toutes les rencontres seront différentes. Ce sont des espaces pour
        prendre du temps pour soi et s’offrir des rituels.
      </p>
      <p>
        Nous avons toutes besoin d’espace sécuritaire où il fait bon ÊTRE.
      </p>
    </div>
  </section>
  <div class="grid">
    <section
        v-for="event in events"
        :key="event.slug"
        class="event"
    >
      <div class="container">
        <div class="content">
          <h2>
            <NuxtLink :to="`/evenement/${event.slug}`" class="link"
            >{{ event.title }}</NuxtLink
            ></h2>
          <p>{{ event.content }}</p>
        </div>
        <div class="image">
          <nuxt-img
              :src="event.image"
              :alt="event.title"
              width="200"
              height="200"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import useGetEvents from "~/composables/useGetEvents";

const events = (await useGetEvents()).data;
</script>

<style scoped>
h1 {
  display: none;
}

.link {
  color: inherit;
  text-decoration: none;
  transition: all .3s ease-in-out;
}
.link:hover {
  text-decoration: underline;
  color: #303030;
}

.magie {
  text-align: center;
  padding-bottom: 2em;
  padding-top: 2em;
}
.magie div {
  width: 45%;
  margin: auto;
}
.magie h2 {
  font-size: 2em;
  margin-bottom: 1.5em
}
p {
  margin-bottom: 1em;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

.event {

  padding: 0 0 2rem 0;
  text-align: center;
}

.event:nth-child(odd) {
  background-color: #e1dae7;
}

.event .container {
  width: 75%;
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.content {
  padding: 1rem;
}

.image {
  width: 200px;
  display: flex;
  align-items: center;
}

.image img {
  background-color: #fff;
}

p {
  white-space: pre-line;
}

@media screen and (max-width: 900px) {
  .event .container {
    grid-template-columns: 1fr;
  }
  .image {
    width: 100%;
  }

  .image img {
    margin: auto;
  }
}
</style>