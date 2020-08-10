<template>
  <div class="home">
    <section id="intro" class="hero is-fullheight is-dark" style="background-color: #0B132B">
      <div class="hero-body" style="background-color: #1C2541">
        <div class="container has-text-centered" style="padding-bottom: 4em;">
          <img id="headshot" class="is-rounded" src="@/assets/headshot.jpg" />
          <h1 class="title">Hi 👋, my name is <b>Emma Campbell</b></h1>
          <p class="is-3"><i>Computer Science Student and Problem-Solver.</i></p>
          <div class="icons">
            <a href="https://github.com/emma-campbell">
              <b-icon id="home__icon" pack="fab" icon="github" size="is-large"></b-icon>
            </a>
            <a href="https://www.linkedin.com/in/ecampbellur">
              <b-icon id="home__icon" pack="fab" icon="linkedin" size="is-large"></b-icon>
            </a>
            <a
              href="https://drive.google.com/file/d/1pvA0tKpRvcvxEXkcw2KuSn7ZLRT7S_YY/view?usp=sharing"
            >
              <b-icon id="home__icon" pack="fas" icon="file" size="is-large"></b-icon>
            </a>
          </div>
        </div>
      </div>
      <vue-particles color="#6FFFE9"></vue-particles>
    </section>
  </div>
</template>

<style>
.hero-body {
  padding: 0em;
  z-index: 1;
}

#headshot {
  max-height: 14em;
  max-width: 14em;
  border-radius: 50%;
}

.title {
  padding-bottom: 0;
  margin-bottom: 0;
}

.icons {
  padding-top: 2em;
}

#home__icon {
  margin-right: 20px;
  color: #6fffe9;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
<script>
export default {
  name: "Home"
};
</script>
