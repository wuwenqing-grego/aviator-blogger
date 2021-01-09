<template>
  <div class="home">
    <section class="user-info">
      <img src="https://www.gravatar.com/avatar/1?s=128&d=identicon" alt="">
      <h3>Wenqing</h3>
    </section>
    <section>
      <div class="item">
        <div class="date">
          <span class="day">20</span>
          <span class="month">11月</span>
          <span class="year">2020</span>
        </div>
        <h3>JS闭包</h3>
        <p>在 JavaScript 中，每个运行的函数，代码块 {...} 以及整个脚本，都有一个被称为“词法环境”（Lexical Environment）的内部（隐藏）的关联对象...</p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
      <div class="item">
        <div class="date">
          <span class="day">25</span>
          <span class="month">10月</span>
          <span class="year">2020</span>
        </div>
        <h3>JS执行机制</h3>
        <p>我们知道JS是单线程的，但是JS又常被用来处理异步事件，这听上去是不是有点矛盾？事实是，JS本身并不具有异步行为，这些特性是浏览器/编程环境在JS语言核心之上构建的超能力，并通过Web API得以实现...</p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./home.js"></script>
<style lang="sass" scoped src="./home.sass"></style>