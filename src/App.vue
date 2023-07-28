<template>
  
  <!-- <img style="width:200px;" src  ="https://i.postimg.cc/zfRc4VYV/vivo-logo-0.png"> -->
  
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/HomeView">Home</router-link> |
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
}

nav {
  padding: 30px;
  position: relative;
  left: 30rem;
  height: 5rem;
  font-family: Raleway;
  color: grey;
  width: 60%;
}

nav a {
  font-weight: 300;
  text-decoration: none;
  padding: 1rem;
  font-family: Raleway;
  color: antiquewhite;
}

nav hover:a {
  text-decoration: line-through;
}

nav a.router-link-exact-active {
  color: black;
  font-weight: bold;
}

</style>
