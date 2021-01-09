<template>
  <div class="blog">
    <section class="user-info">
      <img src="https://www.gravatar.com/avatar/1?s=128&d=identicon" alt="">
      <h3>JS闭包</h3>
      <p><router-link to="/user">wenqing</router-link> 发布于3天前</p>
    </section>
    <section class="article">
      <h1>闭包是什么？</h1>
      <blockquote>
        MDN官方定义：一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。
      </blockquote>
      用通俗但不太准确的说法：函数访问外部变量就是闭包。
      <h1>词法环境</h1>
      在 JavaScript 中，每个运行的函数，代码块 {...} 以及整个脚本，都有一个被称为“词法环境”（Lexical Environment）的内部（隐藏）的关联对象。
      词法环境对象由两部分组成：
      <ul>
        <li>环境记录（Environment Record），一个存储所有局部变量作为其属性（包括一些其他信息，例如 this 的值）的对象。</li>
        <li>对“外部词法环境”的引用，与外部代码相关联。</li>
      </ul>
      一个“变量”只是环境记录这个特殊的内部对象的一个属性。“获取或修改变量”意味着“获取或修改词法环境的一个属性”。一个函数其实也是一个值，就像变量一样。不同之处在于函数声明的初始化会被立即完成（函数提升），这就是为什么我们可以在（函数声明）的定义之前调用函数声明。
      <br>
      具体来说：
      <ul>
        <li>在一个函数运行时，在调用刚开始时，会自动创建一个新的词法环境以存储这个调用的局部变量和参数。当代码要访问一个变量时，首先会搜索内部词法环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境。</li>
        <li>所有的函数在诞生时都会记住创建它们的词法环境。技术上，所有函数都有名为 [[Environment]] 的隐藏属性，该属性保存了对创建该函数的词法环境的引用。</li>
      </ul>
      综合以上两点，JavaScript中的函数在创建时，都会通过隐藏属性 [[Environment]] 记住当时的词法环境，在后续该函数被调用时，会创建一个新的词法环境，而外部词法环境的引用就来于存储于 [[Environment]] 中的引用。
      回到开头的定义，这种捆绑在JS中的体现就是 [[Environment]]，换言之，JavaScript的函数天生就是闭包的。
    </section>
  </div>
</template>

<script src="./blog.js"></script>
<style lang="sass" scoped src="./blog.sass"></style>