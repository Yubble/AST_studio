page({
    data: {
      auth: 'Yubble',
      years: 32
    },

    showName() {
      const name = 'my name is LiuYanbao'
      window.alert(name)
    },

    noneName() {
      console.log('这个方法没什么用')
    },

    onReady() {
      console.log('执行了mounted')
    }
});