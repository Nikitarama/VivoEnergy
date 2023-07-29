<template>
  <div class="Login">
    <h2>These are the courses we offer to our employees</h2>
     
    <img src="https://i.postimg.cc/PfmFq5TG/FCnlc95m1-Mwc-Wi-S-bz5p7ml5s9d-FKru0.jpg">
      
      <h3>Download the training material here:</h3>
      <input type="file" @change="uploadFile" ref="file"> <v-button @click="submitFile">Upload!</v-button>

     
  </div>
</template>

<script setup>
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'

</script>

<style scoped>
.Login img {
  position: relative;
  top: 10rem;
  z-index: -3;
  margin-bottom: 10rem;
  width: 90.4rem;
} 

.Login h2 {
  font-family: Raleway;
  width: 25rem;
  position: relative;
  left: 47rem;
  top: 6rem;
  margin-bottom: -6rem;
  z-index: 2;
}

.Login h3 {
  position: relative;
  bottom: 37rem;
  left: 15rem;
  font-family: Raleway;
  font-weight: bold;
  background-color: rgba(128, 128, 128, 0.493);
  width: 60rem;
  height: 20rem;
}

.Login {
  height: 150vh;
  z-index: -3;
  
  /* background-image: url(https://i.postimg.cc/PfmFq5TG/FCnlc95m1-Mwc-Wi-S-bz5p7ml5s9d-FKru0.jpg); */
}

</style>
