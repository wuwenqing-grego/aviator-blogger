<template>
  <div class="index">
    <section class="blog-posts">
      <div class="item">
        <figure class="avatar">
          <img src="https://www.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>wenqing</figcaption>
        </figure>
        <h3>JS闭包<span>3天前</span></h3>
        <p>在 JavaScript 中，每个运行的函数，代码块 {...} 以及整个脚本，都有一个被称为“词法环境”（Lexical Environment）的内部（隐藏）的关联对象...</p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img src="https://www.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>wenqing</figcaption>
        </figure>
        <h3>JS执行机制<span>6天前</span></h3>
        <p>我们知道JS是单线程的，但是JS又常被用来处理异步事件，这听上去是不是有点矛盾？事实是，JS本身并不具有异步行为，这些特性是浏览器/编程环境在JS语言核心之上构建的超能力，并通过Web API得以实现...</p>
      </div>
    </section>
  </div>
</template>

<script src="./index.js"></script>
<style lang="sass" scoped src="./index.sass"></style>