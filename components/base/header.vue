<template>
  <header>
    <h1>Karen Accompagnement Sacré</h1>
    <BaseQuote
      quote="Guérir, c'est toucher avec de l’Amour ce qui a précédemment été touché
          par la peur."
      author="Stephen Levine"
    />
    <nav>
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/qui-suis-je">Qui suis-je</NuxtLink>
      <NuxtLink to="/evenements">Evènements</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/tarifs">Tarifs</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #e1dae7;
  text-align: center;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 75vw;
  margin: auto;
  margin-top: 1rem;
}
nav a {
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in-out;
}
nav a:hover {
  font-weight: bold;
}

@media screen and (max-width: 800px) {
  header {
    padding: 0 0.5rem;
    margin-bottom: 0;
  }

  nav {
    display: none;
  }
}
</style>
