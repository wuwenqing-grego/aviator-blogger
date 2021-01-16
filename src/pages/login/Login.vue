<template>
  <div class="login">
    <h4>Username</h4>
    <input v-model="username" placeholder="Username">
    <h4>Password</h4>
    <input v-model="password" type="password" placeholder="Password" @keyup.enter="onLogin">
    <el-button size="medium" @click="onLogin">Log In</el-button>
    <p class="notice">No account? <router-link to="/register">Register new account</router-link></p>
  </div>
</template>

<script src="./login.js"></script>
<style scoped lang="sass" src="./login.sass"></style>