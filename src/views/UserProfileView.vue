<template>
    <div class="user">
        <h1>User Profile</h1>
        <img src="https://i.postimg.cc/qvwRTSxt/Ks-Wz-WJUT-lo2ozoj-avatar.jpg">
        <div class="info">
            <h3>Full Name:</h3>
            <h4>Sally Johnson</h4>
            <h3>Email Address:</h3>
            <h4>Sally.Johnson@gmail.com</h4>
            <h3>Status:</h3>
            <h4>50% complete</h4>
        </div>
    </div>
</template>

<style scoped>
.user {
    height: 150vh;
}

.user h1 {
    font-family: Raleway;
    font-size: 4rem;
    position: relative;
    left: 20rem;
    top: 5rem;
}

.user img {
    width: 300px;
    height: 300px;
    position: relative;
    top: 15rem;
    left: 13rem;
    border-radius: 150px;
}

.info h3 {
    font-family: Raleway;
    position: relative;
    left: 10rem;
    top: 4rem;
    padding-top: 5rem;
    border-bottom: 1px solid black;
    width: 30rem;
}

.info h4 {
    font-family: Raleway;
    position: relative;
    right: 17rem;
    top: 5rem;
    font-weight: bold;
}

</style>