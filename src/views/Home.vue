<template>
  <div class="home">
    <section id="intro" class="hero is-medium is-primary">
      <Navigation />
      <div class="hero-body has-text-right">
        <div class="columns is-vcentered">
          <div class="column">
            <svg class="bg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#E8DAFF"
                d="M30.4,-19.9C45.4,-5.4,67.8,7.6,69.6,22.4C71.4,37.2,52.7,53.8,33.8,58.5C14.8,63.1,-4.3,55.8,-18.6,46.1C-32.9,36.3,-42.4,24.1,-50.1,6.8C-57.8,-10.6,-63.6,-33,-55,-46C-46.3,-59,-23.2,-62.7,-7.7,-56.5C7.7,-50.3,15.4,-34.4,30.4,-19.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <figure class="image">
              <img src="@/assets/dev_focus.svg" style="height: 20em;" />
            </figure>
          </div>
          <div class="column">
            <h1 class="title">Hello, my name is <b>Emma Campbell</b></h1>
            <h2 class="subtitle">Computer Science Student and Problem-Solver.</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="education">
      <div class="container has-text-centered">
        <h1 class="title hline-bottom">Education</h1>
        <div class="container has-text-left">
          <div class="columns">
            <div class="column">
              <div class="indented">
                <h2><b>University of Rochester</b></h2>
                <p class="is-4">Bachelors of Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.hero {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-top: 0;
}

.image {
  position: relative;
  top: 0;
  left: 0;
}

.bg {
  position: absolute;
  top: 0px;
  left: 0px;
}

.hline-bottom {
  padding-bottom: 10px;
  border-bottom: 2px solid #000; /* whichever color you prefer */
  margin: 0 3em;
}

.indented {
  margin: 0 9em;
}
</style>
<script>
import Navigation from "@/components/layout/Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation
  }
};
</script>
