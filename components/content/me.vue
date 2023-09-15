<template>
  <section>
    <div class="presentation">
      <h1>Qui suis-je</h1>
      <p>
        Moi, c'est Karen, 34 ans, je vis dans la région bordelaise avec mon mari
        (mon pilier) et mes 3 enfants.
      </p>
      <p>
        Depuis toujours, j’ai des perceptions extra-sensorielles et j'ai appris
        à les utiliser pour accompagner les âmes qui en ont besoin, notamment
        lors de notre entrée ou sortie de ce monde.
      </p>
      <template v-if="!summary">
        <p>
          Mon don accompagne également toutes les « petites morts », tous ces
          changements qui nous permettent de nous réaligner dans nos vies. Je me
          suis formée en Reiki, lithothérapie, radiesthésie, naturopathie, Doula
          holistique, hypnonatal, facilitatrice d’espaces sacrés, Moon Mother…
          ce qui est ma petite boite à outils cosmique.
        </p>
        <p>
          Après un « arrêt naturel de grossesse », qui a donné naissance à une
          petite étoile, j’ai décidé d’accompagner mes sœurs dans les petits et
          grands passages de la vie des femmes, dont celui de l’enfantement mais
          aussi de la préconception et de la matrescence.
        </p>
        <p>
          La spiritualité fait partie intégrante de mes accompagnements, pour
          être au plus juste des besoins des femmes, pour les aider à se
          reconnecter à leur puissance et empouvoirement pour être actrices et
          pas spectatrices de leur vie!
        </p>
      </template>
      <NuxtLink to="/qui-suis-je" class="more" v-if="summary"
        >En savoir plus</NuxtLink
      >
    </div>
    <figure>
      <nuxt-img
        src="/images/karen.webp"
        alt="Karen"
        loading="lazy"
        class="figure-image"
      />
    </figure>
  </section>
</template>

<script setup>
defineProps({
  summary: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 400px;
}

.presentation {
  padding-top: 2rem;
  text-align: center;
}

h1 {
  color: #ab7260;
  font-weight: 100;
}

p {
  max-width: 300px;
  margin: auto;
  margin-bottom: 1.2rem;
}

figure {
  width: 400px;
}

img {
  width: 384px;
  height: 256px;
  object-fit: cover;
}
.more {
  color: #ab7260;
  text-decoration: none;
  border: 1px solid #ab7260;
  line-height: 1rem;
  margin-top: 2rem;
  padding: 0.4rem 1rem;
  transition: all 0.3s ease-in-out;
}

.more:hover {
  background-color: #ab7260;
  color: #fff;
}

@media screen and (max-width: 800px) {
  section {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 0;
    padding: 0;
  }

  figure {
    width: 100%;
  }

  .figure-image {
    width: 100%;
    height: auto;
    border-radius: none;
  }

  .presentation {
    padding-top: 1rem;
  }
  p {
    max-width: none;
    width: 100%;
    padding: 1rem;
  }
}
</style>
