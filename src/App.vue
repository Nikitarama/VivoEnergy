<template>
  
  <!-- <img style="width:200px;" src  ="https://i.postimg.cc/zfRc4VYV/vivo-logo-0.png"> -->
  <Navbar />
  <Home />
  <Footer />
  
</template>

<script setup>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-weight: 200;
  overflow: hidden;
  width: 100%;
  
}

body {
  width: 100%;
}

</style>
