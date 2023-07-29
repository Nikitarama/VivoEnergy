<template>
     <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/LoginView.vue">Home</router-link> |
    <router-link to="/UserProfileView.vue">User Profile</router-link>
  </nav>
  <router-view/>
</template>

<script setup>


</script>

<style scoepd>
nav {
  z-index: 1;
  position: relative;
  left: 40rem;
  top: 2rem;
  height: 5rem;
  font-family: Raleway;
  color: grey;
  width: 25rem;
  margin: 0;
}

nav a {
  font-weight: 300;
  text-decoration: none;
  padding: 1rem;
  font-family: Raleway;
  color: aliceblue;
  margin:0;
}

nav hover:a {
  text-decoration: line-through;
}

nav a.router-link-exact-active {
  color: black;
  font-weight: bold;
}
</style>