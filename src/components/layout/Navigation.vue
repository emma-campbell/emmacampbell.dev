<template>
  <b-navbar transparent>
    <template slot="brand"></template>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/" v-scroll-to="'#education'">
        <p class="p__navigation" style="color: #6FFFE9;">EDUCATION</p>
      </b-navbar-item>
      <b-navbar-item>
        <p class="p__navigation" style="color: #6FFFE9;">WORKS</p>
      </b-navbar-item>
      <b-navbar-item>
        <p class="p__navigation" style="color: #6FFFE9;">CONTACT</p>
      </b-navbar-item>
    </template>
    <template slot="end">
    </template>
  </b-navbar>
</template>

<style>
</style>
