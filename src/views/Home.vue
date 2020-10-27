<template>
  <div class="home">
    <div id="content__container" class="container has-text-centered">
      <img id="headshot" class="is-rounded" src="@/assets/headshot.jpg" />
      <h1 class="title" style="color: #ffffff">Hi 👋, my name is <br /><b>Emma Campbell</b></h1>
      <p class="is-3" style="color: #ffffff"><i>Computer Science Student and Problem-Solver.</i></p>
      <div class="icons">
        <a href="https://github.com/emma-campbell">
          <b-icon class="home__icon" pack="fab" icon="github" size="is-large"></b-icon>
        </a>
        <a href="https://www.linkedin.com/in/ecampbellur">
          <b-icon class="home__icon" pack="fab" icon="linkedin" size="is-large"></b-icon>
        </a>
        <a
          href="https://drive.google.com/file/d/1pvA0tKpRvcvxEXkcw2KuSn7ZLRT7S_YY/view?usp=sharing"
        >
          <b-icon class="home__icon" pack="fas" icon="file" size="is-large"></b-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

#headshot {
  max-height: 14em;
  max-width: 14em;
  border-radius: 50%;
  padding-top: 1em;
}

.title {
  padding-bottom: 0;
  margin-bottom: 0;
}

.icons {
  padding-top: 2em;
  padding-bottom: 2em;
}

.home__icon {
  margin-right: 20px;
  color: #6fffe9;
}

#content__container {
  margin-top: 2em;
  margin-bottom: 2em;
  width: 45vw;
  max-width: 450px;
  min-width: 230px;
  max-height: 500px;
  background-color: #1c2541;
  border: 2px solid #6fffe9;
  z-index: 1;
}
</style>
<script>
export default {
  name: "Home"
};
</script>
