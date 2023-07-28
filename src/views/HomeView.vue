<template>
  <div class="homePage">
    <div class="topOfPage">
      <h3>This is a portal for Vivo Energy Employees in order to
        upskill and further their knowledge and skills in
        the tech industry
      </h3>
      <div class="icon">
        
        <img src="https://i.postimg.cc/pLBTzX65/NBIC-logo-light-bulb.png">
      </div>
      <!-- <img src="https://i.postimg.cc/PfmFq5TG/FCnlc95m1-Mwc-Wi-S-bz5p7ml5s9d-FKru0.jpg"> -->
    </div>
    
    <Home />
  </div>
  <div class="vivo">
    <img style="width:200px;" src  ="https://i.postimg.cc/zfRc4VYV/vivo-logo-0.png">
  </div>

  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" class="btn btn-danger">Login</button>
</form>

<Footer />
</template>

<script setup>
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'

</script>

<style scoped>

#app {
  overflow:hidden;
  margin: 0;
}

.topOfPage {
  margin: 1rem;
  width: 30rem;
  height: 100vh;
  font-family: Raleway;
  
}

.topOfPage h3 {
  position: relative;
  left: 37rem;
  top: 2rem;
}

.icon {
  position: relative;
  bottom: 15rem;
  right: 6rem;
}

.vivo {
  position: relative;
  bottom: 22rem;
  left: 20px;
}

form {
  position: relative;
  bottom: 16rem;
  left: 12rem;
  width: 50rem;
  font-family: Raleway;
  font-weight: bold;
}
        

</style>
