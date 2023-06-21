<template>
  <footer>
    <div class="follow">
      <h2>Nous suivre</h2>
      <div class="links">
        <a
          href="https://www.facebook.com/Karen-Accompagnement-Sacr%C3%A9-111677753925673"
          target="_blank"
          >Facebook</a
        >
        <a
          href="https://www.instagram.com/karen_accompagnement_sacre/?hl=fr"
          target="_blank"
          >Instagram</a
        >
      </div>
    </div>
    <div class="contact">
      <h2>Contact</h2>
      <dl>
        <div>
          <dt>E-mail :</dt>
          <dd>
            <a href="mailto:accompagnementsacre@gmail.com"
              >accompagnementsacre@gmail.com</a
            >
          </dd>
        </div>
        <div>
          <dt>Téléphone :</dt>
          <dd><a href="tel:0679660240">06.79.66.02.40</a></dd>
        </div>
      </dl>
    </div>
    <div class="legal">
      <a href="#">Mentions Légales</a>
      <a href="#">Politique en matière de cookies</a>
      <a href="#">Politique de confidentialité</a>
      <a href="#">Condition d'utilisation</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #e1dae7;
  text-align: center;
  padding: 1rem;
  color: #fff;
  font-weight: 0.8rem;
}

.follow .links {
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 1rem;
  justify-content: center;
}

dl div {
  margin: 0.8rem;
}

dt {
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: inline;
}

dd {
  margin-left: 0.4rem;
  margin-bottom: 1rem;
  display: inline;
}

a {
  text-decoration: none;
  color: #fff;
}

.legal {
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 1rem;
  justify-content: center;
}
</style>
