<template>
  
  <!-- <img style="width:200px;" src  ="https://i.postimg.cc/zfRc4VYV/vivo-logo-0.png"> -->
  
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/HomeView.vue">Home</router-link> |
    <router-link to="/UserProfileView">User Profile</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  font-weight: 200;
  overflow: hidden;
  width: fit-content;
}

nav {
  
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
