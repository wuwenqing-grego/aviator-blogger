<template>
  <div class="blog">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username">
      <h3>{{ title }}</h3>
      <p><router-link :to="`/user/${user.id}`">{{ user.username }}</router-link> {{ createdAt }}</p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./blog.js"></script>
<style lang="sass" scoped src="./blog.sass"></style>