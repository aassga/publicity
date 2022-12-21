<template>
  <div class="brand-area">
    <div class="wrap-content-text" ref="wrapContent">
      <img class="logo-header" src="@/assets/brand.png" alt="">
      <img class="logo-header-text" ref="logoHeader" src="@/assets/logotext.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let that = this
    this.$nextTick(function () {
      document.addEventListener('scroll', function(e) {
        const scroll = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop
        let wrapContent = that.$refs.wrapContent
        let logoHeader = that.$refs.logoHeader
        let agent = navigator.userAgent
        if (wrapContent && logoHeader) {
          if (
            agent.match(/Android/i) ||
            agent.match(/webOS/i) ||
            agent.match(/iPhone/i) ||
            agent.match(/iPad/i) ||
            agent.match(/iPod/i) ||
            agent.match(/BlackBerry/i) ||
            agent.match(/Windows Phone/i)
          ) {
            if (scroll >= 446) {
              wrapContent.classList.add("wrap-content-text-write")
              logoHeader.setAttribute("src", require('@/assets/logotext_or.png'))
            } else {
              wrapContent.classList.remove("wrap-content-text-write")
              logoHeader.setAttribute("src", require('@/assets/logotext.png'))
            }
          } else {
            if (scroll >= 788) {
              wrapContent.classList.add("wrap-content-text-write")
              logoHeader.setAttribute("src", require('@/assets/logotext_or.png'))
            } else {
              wrapContent.classList.remove("wrap-content-text-write")
              logoHeader.setAttribute("src", require('@/assets/logotext.png'))
            }
          }
        }
      });
    })
  },
  beforeDestroy() {
    document.removeEventListener("scroll", null)
  }
}
</script>

<style lang="scss" scoped>
.brand-area {
  .wrap-content-text {
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    max-width: 1920px;
    z-index: 3;
    padding: 20px 100px;
    font-weight: 300;
    font-size: 18px;
    z-index: 2;
    .logo-header{
      width: 55px;
      padding-right: 10px;
    }
    .logo-header-text{
      width: 50px;
      padding-right: 10px;
    }
  }
  .wrap-content-text-write{
    background-color:#FFFFFF;
  }
}
@media (max-width: 820px) {
  .brand-area {
    .wrap-content-text {
      display: flex;
      align-items: center;
      position: fixed;
      width: 100%;
      max-width: 1920px;
      padding: 20px;
      font-weight: 300;
      font-size: 18px;
      z-index: 2;
      .logo-header{
        width: 8vw;
        min-width: 50px;
        padding-right: 2vw;
      }
      .logo-header-text{
        width: 8vw;
        min-width: 50px;
        padding-right: 2vw;
      }
    }
    .wrap-content-text-write{
      background-color:#FFFFFF;
    }
  }
}
</style>