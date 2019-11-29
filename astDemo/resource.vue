<template>
  <div class="wrap">
    <h2 class="title">this is AstDemo</h2>
    <div class="content">
      Ast means <b>abstract syntax tree</b>,It is a concept, not a technology.
    </div>
    <span class="remark" @click="showName">author is {{auth}}</span>
  </div>
</template>

<script>
Page()
export default {
  data() {
    return {
      auth: 'Yubble'
    }
  },
  methods: {
    showName() {
      const name = 'my name is LiuYanbao'
      window.alert(name)
    }
  },
  mounted() {
    console.log('执行了mounted')
  }
}
</script>

<style lang="css">
  html,body,h2,div,h1,span,p,ul {
    margin: 0;
    padding: 0;
    border: 0px;
  }
  .wrap {
    height: 300px;
    width: 430px;
    position: relative;
    border: 1px solid #cacaca;
  }
  .title {
    background: #76eff7;
    font-size: 26px;
    padding: 0 5px;
  }
  .content {
    box-sizing: border-box;
    padding: 30px;
  }
  .remark {
    position: absolute;
    right: 23px;
    bottom: 20px;
  }
</style>