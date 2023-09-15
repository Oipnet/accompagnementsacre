<template>
  <section>
    <h1>Decouvrir les valeurs qui m'animent</h1>
    <div class="grid">
      <div>
        <h2>Amour</h2>
        <p>Pour faire un soin, l'énergie d’amour est importante.</p>
        <p>
          Elle permet à la personne de se sentir protégée et de pouvoir établir
          un lien de confiance, ce qui sera plus facile par la suite pour se
          déposer.
        </p>
        <p>
          Cette valeur me semble importante dans ma communication pour
          transmettre cette belle énergie, donner envie d’en savoir plus.
        </p>
        <p>
          Comprendre que cette énergie peut tout transcender quand elle est pure
          et vraie.
        </p>
      </div>
      <figure class="amour">
        <nuxt-img src="/images/amour.webp" alt="Amour" loading="lazy" />
      </figure>
      <figure class="bienveillance">
        <nuxt-img
          src="/images/bienveillance.webp"
          alt="Bienveillance"
          loading="lazy"
        />
      </figure>
      <div>
        <h2>Bienveillance</h2>
        <p>
          La bienveillance est aussi un des piliers pour accompagner les femmes.
        </p>
        <p>
          On ne peut pas se permettre d’être dans le jugement ou la critique.
        </p>
        <p>
          On doit pouvoir écouter de façon bienveillante et d’ailleurs mes
          réponses doivent l’être tout autant. Pour moi, la bienveillance est
          l’un des piliers les plus importants des thérapeutes.
        </p>
        <p>
          De même pour la communication, nos réponses doivent rester
          bienveillantes (quelque soit notre point de vue).
        </p>
        <p>
          Notre travail n’est pas le choix que fait le patient mais bien de lui
          montrer le champs des possibles afin qu’il puisse faire son choix/ ou
          ses choix.
        </p>
      </div>
      <div>
        <h2>Sacré</h2>
        <p>Pour moi le sacré est aussi une valeur qui a du sens.</p>
        <p>
          Il me permet de moi me retrouver via des petits rituels (d’ancrage ou
          autre) et d’apporter de la magie dans la vie.
        </p>
        <p>D’avoir confiance en l’univers !</p>
        <p>
          Et c’est aussi ces valeurs de magie et de rituels que je transmet en
          tant que thérapeute pour que les patient(e)s/ client(e)s croient à
          nouveau en la vie, à la magie et se retrouvent.
        </p>
        <p>
          Transmettre le sacré dans les communications, c’est comme transmettre
          la magie qui m’inspire.
        </p>
      </div>
      <figure class="sacre">
        <nuxt-img src="/images/sacre.webp" alt="Sacré" loading="lazy" />
      </figure>
      <figure class="harmonie">
        <nuxt-img src="/images/harmonie.webp" alt="Harmonie" loading="lazy" />
      </figure>
      <div>
        <h2>Harmonie</h2>
        <p>
          L’harmonie, c’est la capacité de comprendre que nous faisons partie
          d’un grand tout.
        </p>
        <p>
          C’est aussi le fait d’être alignée à faire ce en quoi je crois et ce
          qui me fait vibrer.
        </p>
        <p>
          Et c’est aussi quelque chose que je veux transmettre dans mes soins
          (l’harmonie avec nous même, l’harmonie avec notre planète et les
          éléments, l’harmonie avec notre univers…) Si tout le monde faisait ce
          qui les fait vibrer, les gens seraient en harmonie avec eux mêmes.
        </p>
        <p>
          En énergétique on ressent bien l’importance de l’harmonisation dans le
          corps afin de ne pas avoir de coupure et que les choses soient fluides
          !!!
        </p>
        <p>En harmonisant on retrouve la fluidité.</p>
      </div>
      <div>
        <h2>Espoir ou respect/tolérance</h2>
        <p>Alors ici le choix a été difficile.</p>
        <p>
          Ces 3 valeurs sont assez proches des autres valeurs que j’ai déjà
          choisies mais avec quelques variances quand même.
        </p>
        <p>Au final je vais choisir le respect.</p>
        <p>
          Le respect est une valeur fondamentale pour l’accompagnement des
          personnes.
        </p>
        <p>
          On doit être dans le non-jugement et on doit profondément respecter
          chaque personne (que ça ait été ses choix de vie, que cela soit dans
          ses choix actuels ou dans ceux qu’elle va choisir plus tard) On peut
          amener notre vision, offrir une panoplie de choix mais toujours
          laisser le libre-arbitre et surtout respecter leur choix.
        </p>
        <p>
          Mais aussi les accompagner dans leur décision avec respect et
          bienveillance.
        </p>
        <p>Pour la communication, c’est pareil, le respect est fondamental.</p>
        <p>
          On peut ne pas être en accord, ne pas avoir les mêmes croyances mais
          on doit le respecter.
        </p>
        <p>On peut amener à voir un point de vue sans jamais forcer.</p>
        <p>
          Le respect est une valeur qui fait sens pour moi que ce soit dans des
          accompagnements comme dans ma rigueur personnel et elle a même été un
          des piliers lors de mes années dans l’armée.
        </p>
      </div>
      <figure class="espoir">
        <nuxt-img
          src="/images/espoir.webp"
          alt="Espoir ou respect/tolérance"
          loading="lazy"
        />
      </figure>
    </div>
  </section>
</template>

<style scoped>
section {
  text-align: center;
  background-color: #e1dae7;
  padding: 2rem;
}
h1 {
  font-size: 2rem;
  margin: 1rem 0;
  color: #74272c;
}

h2 {
  font-size: 1.5rem;
  font-weight: 100;
  margin: 1rem 0;
  color: #ab7260;
}
p {
  margin: 1rem 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
.grid div {
  padding: 0 6rem;
}
figure {
  display: flex;
  justify-content: center;
}
figure img {
  margin: auto;
}
figure.amour img,
figure.sacre img {
  width: 224px;
  height: 336px;
}

figure.bienveillance img {
  width: 300px;
  height: 300px;
}

figure.harmonie img {
  width: 400px;
  height: 270px;
}

figure.espoir img {
  width: 400px;
  height: 530px;
}

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .grid div {
    padding: 0;
  }
  figure {
    width: 100%;
  }
  figure img{
    width: 100%;
    height: auto;
  }

  .bienveillance {
    grid-row-start: 4;
  }
  .harmonie {
    grid-row-start: 8;
  }
}
</style>
