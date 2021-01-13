<template>
  <div class="register">
    <h4>Username</h4>
    <input v-model="username" placeholder="Username">
    <h4>Password</h4>
    <input v-model="password" type="password" placeholder="Password" @keyup.enter="onRegister">
    <el-button size="medium" @click="onRegister">Sign Up</el-button>
  </div>
</template>

<script src="./register.js"></script>
<style scoped lang="sass" src="./register.sass"></style>