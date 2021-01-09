<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>Aviator</h1>
      <p>Share every beautiful moment of your life</p>
      <div class="btns">
        <el-button>Log In</el-button>
        <el-button>Sign Up</el-button>
      </div>
    </template>
    <template v-else>
      <h1>Aviator</h1>
      <i class="edit el-icon-edit"></i>
      <img class="avatar" src="https://www.gravatar.com/avatar/1?s=128&d=identicon">
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
    }
  }
}
</script>

<style scoped lang="sass">
  @use '../assets/base'

  header.no-login
    display: grid
    background-color: base.$background-color
    justify-items: center
    padding: 0 12% 30px 12%

    h1
      color: #fff
      margin-top: 60px
      font-size: 40px

    p
      color: #fff
      margin-top: 15px

    button
      margin: 20px 5px 0
      color: #006600

  header.login
    display: flex
    align-items: center
    background-color: base.$background-color

    h1
      color: #fff
      font-size: 40px
      flex: 1

    .edit
      color: #fff
      font-size: 30px

    .avatar
      width: 40px
      height: 40px
      border: 1px solid #fff
      border-radius: 50%
      margin-left: 15px
</style>