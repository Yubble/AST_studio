<template>
  <div class="wrap">
    <div class="box">this is AstDemo</div>
    <p class="remark" @click="showName">author is {{auth}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: 'liu'
    }
  },
  methods: {
    showName() {
      window.alert('my name is LiuYanbao')
    }
  },
  mounted() {
    console.log('执行了mounted')
  }
}
</script>

<style lang="css">
  .wrap {
    height: 300px;
    width: 430px;
    border: 1px solid #cacaca;
  }
  .box {
    background: #76eff7;
    font-size: 26px;
  }
  .remark {
    text-align: right;
    margin-top: 190px;
    padding-right: 10px;
    font-size: 18px;
  }
</style>