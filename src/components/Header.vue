<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1><router-link to="/">Aviator</router-link></h1>
      <p>Share every beautiful moment of your life</p>
      <div class="btns">
        <router-link to="/login">
          <el-button>Log In</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>Sign Up</el-button>
        </router-link>
      </div>
    </template>
    <template v-else>
      <h1><router-link to="/">Aviator</router-link></h1>
      <router-link to="/create"><i class="edit el-icon-plus"></i></router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><a href="/" @click="onLogout">Logout</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import auth from '../api/auth'
window.auth = auth

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {

    }
  },

  computed: {
    ...mapGetters([
      'user',
      'isLogin'
    ])
  },

  created() {
    this.checkLogin()
  },

  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),

    onLogout() {
      this.logout()
    }
  },
}
</script>

<style scoped lang="sass">
  @use '../assets/base'
  @use '../assets/common'

  header.no-login
    display: grid
    background-color: base.$background-color
    justify-items: center
    padding: 0 12% 30px 12%

    h1
      a
        display: block
        color: #fff
        margin-top: 60px
        font-size: 40px

    p
      color: #fff
      margin-top: 15px

    button
      margin: 20px 5px 0

  header.login
    display: flex
    align-items: center
    background-color: base.$background-color

    h1
      flex: 1

      a
        color: #fff
        font-size: 40px

    .edit
      color: #fff
      font-size: 30px

    .user
      position: relative

      .avatar
        width: 40px
        height: 40px
        border: 1px solid #fff
        border-radius: 50%
        margin-left: 15px

      ul
        display: none
        position: absolute
        right: 0
        list-style: none
        border: 1px solid #eaeaea
        background-color: #fff

        a
          text-decoration: none
          color: #333
          font-size: 12px
          display: block
          padding: 5px 10px

          &:hover
            background-color: #eaeaea

      &:hover ul
        display: block
</style>