<template>
  <b-navbar transparent>
    <template slot="brand"></template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/" v-scroll-to="'#education'">
        <p class="p__navigation">EDUCATION</p>
      </b-navbar-item>
      <b-navbar-item>
        <p class="p__navigation">WORKS</p>
      </b-navbar-item>
      <b-navbar-item>
        <p class="p__navigation">CONTACT</p>
      </b-navbar-item>
    </template>
    <template slot="end">
    </template>
  </b-navbar>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

.p__navigation {
  font-family: 'Righteous', cursive;
}
</style>
