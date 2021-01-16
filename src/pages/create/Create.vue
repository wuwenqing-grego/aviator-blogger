<template>
  <div class="create">
    <h1>Create your post</h1>
    <h3>Title</h3>
    <el-input v-model="title" maxlength="30" show-word-limit></el-input>
    <p class="msg">Within 30 words</p>
    <h3>Abstract</h3>
    <el-input type="textarea" v-model="abstract" rows="3" maxlength="300" show-word-limit></el-input>
    <p class="msg">Within 300 words</p>
    <h3>Content</h3>
    <el-input type="textarea" v-model="content" rows="20" maxlength="3000" show-word-limit></el-input>
    <p class="msg">Within 3000 words</p>
    <div class="switch">
      <label>Show on index page?</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <el-button @click="onCreate">Confirm</el-button>
  </div>
</template>

<script src="./create.js"></script>
<style lang="sass" scoped src="./create.sass"></style>