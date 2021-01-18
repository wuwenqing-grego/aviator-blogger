<template>
  <div class="home">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username">
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/blog/${blog.id}`">
        <div class="date">
          <span class="day">{{ splitDate(blog.createdAt).date }}</span>
          <span class="month">{{ splitDate(blog.createdAt).month }}月</span>
          <span class="year">{{ splitDate(blog.createdAt).year }}</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.description }}</p>
        <div class="actions">
          <router-link :to="`/edit/${blog.id}`">Edit</router-link>
          <a href="#" @click.prevent="onDelete(blog.id)">Delete</a>
        </div>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./home.js"></script>
<style lang="sass" src="./home.sass"></style>