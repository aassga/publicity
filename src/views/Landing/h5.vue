<template>
  <div class="wrap-full-h5">
    <mvArea />
    <div id="toggle_magic_1"></div>
    <div id="toggle_magic_2"></div>
    <div id="toggle_magic_3"></div>
    <div id="toggle_magic_4"></div>
    <div id="toggle_magic_5"></div>
    <div id="toggle_magic_5_p"></div>
    <div id="toggle_magic_6"></div>
    <div id="toggle_magic_6_p"></div>
    <div id="toggle_magic_7"></div>
    <div id="toggle_magic_7_p"></div>
    <div id="toggle_magic_8"></div>
    <div id="toggle_magic_8_p"></div>
    <Brand />
    <!-- <Dropdown /> -->
    <div class="string_logo-header-text">
      <img class="logo-header-text" src="@/assets/logotext.png" alt="">
    </div>
    <p class="string_desc">{{ $t("string_desc") }}</p>
    <div class="pad-air-style">
      <a :href="apk_link" target="_blank">
        <div class="download-btn">
          <img class="string_app_android_img" src="@/assets/icon/btn-android.png" alt="">
        </div>
      </a>
      <a class="hichat-browser" target="_blank" @click="goWebPage()">
        <div class="download-btn">
          <img class="string_app_browser_img" src="@/assets/icon/btn-browser.png" alt="">
        </div>
      </a>
    </div>
    <div class="wrap-sub-content unit-block-1">
      <!-- 938 -->
      <p class="string_qr_block_1 sub-title">{{ $t("string_qr_block_1") }}</p>
      <ul>
        <li>
          <div class="cube">
            <img src="@/assets/icon/flag.png" alt="">
          </div>
          <p class="string_qr_block_1_1_1">{{ $t("string_qr_block_1_1_1") }}</p>
          <p class="string_qr_block_1_1_2">{{ $t("string_qr_block_1_1_2") }}</p>
        </li>
        <li>
          <div class="cube">
            <img src="@/assets/icon/exchange.png" alt="">
          </div>
          <p class="string_qr_block_1_2_1">{{ $t("string_qr_block_1_2_1") }}</p>
          <p class="string_qr_block_1_2_2">{{ $t("string_qr_block_1_2_2") }}</p>
        </li>
        <li>
          <div class="cube">
            <img src="@/assets/icon/idcard.png" alt="">
          </div>
          <p class="string_qr_block_1_3_1">{{ $t("string_qr_block_1_3_1") }}</p>
          <p class="string_qr_block_1_3_2">{{ $t("string_qr_block_1_3_2") }}</p>
        </li>
      </ul>
    </div>

    <ul class="wrap-h5-unit-2">
      <li>
        <img src="@/assets/illustration/Rectangle-mob.png" alt="">
        <div>
          <img class="sub-img" src="@/assets/icon/send.png" alt="">
          <p class="string_qr_block_2 sub-title-horizon">{{ $t("string_qr_block_2") }}</p>
          <p class="string_qr_block_2_1 thi-title">{{ $t("string_qr_block_2_1") }}</p>
        </div>
      </li>
      <li>
        <img src="@/assets/illustration/Rectangle2-mob.png" alt="">
        <div>
          <img class="sub-img" src="@/assets/icon/group.png" alt="">
          <p class="string_qr_block_3 sub-title-horizon">{{ $t("string_qr_block_3") }}</p>
          <p class="string_qr_block_3_1 thi-title">{{ $t("string_qr_block_3_1") }}</p>
        </div>

      </li>
      <li>
        <img src="@/assets/illustration/Rectangle3-mob.png" alt="">
        <div>
          <img class="sub-img" src="@/assets/icon/edit.png" alt="">
          <p class="string_qr_block_4 sub-title-horizon">{{ $t("string_qr_block_4") }}</p>
          <p class="string_qr_block_4_1 thi-title">{{ $t("string_qr_block_4_1") }}</p>
        </div>

      </li>
      <li>
        <img src="@/assets/illustration/Rectangle4-mob.png" alt="">
        <p class="string_qr_block_5 sub-title-horizon">{{ $t("string_qr_block_5") }}</p>
        <p class="string_qr_block_5_1 thi-title">{{ $t("string_qr_block_5_1") }}</p>
      </li>
    </ul>

    <div class="pad-air-style h5-bottom">
      <div class="wrap-h5-footer">
        <a :href="apk_link" target="_blank">
          <div class="download-btn">
            <img class="string_app_android_img" src="@/assets/icon/btn-android.png" alt="">
          </div>
        </a>
        <a class="hichat-browser" target="_blank" @click="goWebPage()">
          <div class="download-btn">
            <img class="string_app_browser_img" src="@/assets/icon/btn-browser.png" alt="">
          </div>
        </a>
        <div class="footer-text">
          <img class="logo-footer" src="@/assets/brand-footer.png" alt=""><!-- icon -->
          <img class="logo-footer-text" src="@/assets/logotext.png" alt="">
        </div>
        <!-- <router-link to="privacyPolicy" class="string_privacyPolicy">{{ $t("string_privacyPolicy") }}</router-link>
        <router-link to="userAgreement" class="string_userAgreement">{{ $t("string_userAgreement") }}</router-link> -->
        <div class="string_copyright">{{ $t("string_copyright") }}</div>
        <div class="wrap-h5-footer-bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import mvArea from '@/components/mvArea.vue'
import Dropdown from '@/components/dropdown.vue'
import Brand from '@/components/brand.vue'
import apkLink from '@/constants/apkLink'
export default {
  components: {
    mvArea,
    Dropdown,
    Brand
  },
  mounted () {
    this.$nextTick(() => {
      // var controller = new ScrollMagic.Controller();
      // const scene1 = this.$scrollmagic.scene({
      //   triggerElement: "#toggle_magic_1",
      //   duration: 160
      // }).setTween(".wrap-full-h5 .mobile-1", {
      //   marginTop: '-20px'
      // })
      // this.$scrollmagic.addScene(scene1)

      // const scene2 = this.$scrollmagic.scene({
      //   triggerElement: "#toggle_magic_1",
      //   duration: 160
      // }).setTween(".wrap-full-h5 .mobile-2", {
      //   marginTop: '-10px'
      // })
      // this.$scrollmagic.addScene(scene2)
      let viewWidth = window.innerWidth
      let m1_marginTop = viewWidth > 767.98 ? 300 : 100

      const scene3 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_1",
        duration: 160
      }).setTween(".wrap-full-h5 .string_qr_block_1", {
        marginTop: m1_marginTop,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene3)

      const scene4 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_2",
        duration: 160
      }).setTween(".wrap-full-h5 .unit-block-1 ul li:nth-child(1)", {
        marginTop: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene4)

      const scene5 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_3",
        duration: 160
      }).setTween(".wrap-full-h5 .unit-block-1 ul li:nth-child(2)", {
        marginTop: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene5)

      const scene6 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_4",
        duration: 160
      }).setTween(".wrap-full-h5 .unit-block-1 ul li:nth-child(3)", {
        marginTop: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene6)

      const scene7 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_5",
        duration: 160
      }).setTween(".wrap-h5-unit-2 li:nth-child(1) img", {
        marginLeft: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene7)

      const scene8 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_5_p",
        duration: 160
      }).setTween(".wrap-h5-unit-2 li:nth-child(1) p", {
        marginTop: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene8)

      const scene9 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_6",
        duration: 160
      }).setTween(".wrap-h5-unit-2 li:nth-child(2) img", {
        marginRight: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene9)

      const scene10 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_6_p",
        duration: 160
      }).setTween(".wrap-h5-unit-2 li:nth-child(2) p", {
        marginTop: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene10)

      const scene11 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_7",
        duration: 160
      }).setTween(".wrap-h5-unit-2 li:nth-child(3) img", {
        marginLeft: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene11)

      const scene12 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_7_p",
        duration: 160
      }).setTween(".wrap-h5-unit-2 li:nth-child(3) p", {
        marginTop: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene12)

      const scene13 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_8",
        duration: 160
      }).setTween(".wrap-h5-unit-2 li:nth-child(4) img", {
        marginRight: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene13)

      const scene14 = this.$scrollmagic.scene({
        triggerElement: "#toggle_magic_8_p",
        duration: 160
      }).setTween(".wrap-h5-unit-2 li:nth-child(4) p", {
        marginTop: 0,
        opacity: 1,
        scale: 1
      })
      this.$scrollmagic.addScene(scene14)
    })
  },
  computed: {
    apk_link () {
      return apkLink
    }
  },
  methods: {
    goWebPage() {
      window.open(location.origin + '/fe/', '_blank')
    }
  }
}
</script>

<style scoped src="@/styles/main.css"></style>

<style lang="scss" scoped>
.wrap-full-h5 {
  position: relative;
  width: 100%;
  max-width: 820px;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  background-color: #FAFCFE;
  background-image: url('~@/assets/background/background-m.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center top;
  .string_desc {
    width: 10em;
    height: 1.5em;
    min-height: 1.5em;
    font-size: 7vw;
    font-weight: 500;
    color: #fff;
    border-right: 6px solid #ff6900;
    padding: 0 20px;
    margin-top: -2px;
    margin-bottom: 0;
    white-space: nowrap;
    animation: h5-typing 2s steps(8), caret 1s steps(1) infinite;
    overflow: hidden;
  }
  .thi-title {
    font-size: 1.2em;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 3em;
  }
  .pad-air-style {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    text-align: left; 
    padding: 0 45px 0 20px;
    .download-btn {
      position: relative;
      display: inline-block;
      width: 13em;
      height: auto;
      border-radius: 10px;
      font-size: 18px;
      text-align: left;
      color: #000;
      vertical-align: top;
      margin: 2em 0.5em 0 0;
      background: none;
      padding: 0;
      cursor: pointer;
      img {
        display: inline-block;
        width: -webkit-fill-available;
        position: relative;
        vertical-align: middle;
        padding: 0 2%;
        // margin: 10% 0 0;
        // transform: translateY(-50%);
        &.string_app_google_img {margin-top: 10%;}
      }
    }
    .hichat-browser .download-btn{
      width: 11em;
      margin-bottom: 5em;
      img {margin-top: 0;}
    }
  }
  .unit-block-1 {
    height: auto;
    margin-top: 0;
    text-align: center;
    .sub-title {
      font-size: 7vw;
      margin-top: 80px; 
      margin-bottom: 13vw;
      opacity: 0; 
      transform: scale(0.6);
    }
    ul {
      margin-top: 5%;
      padding: 0;
      li {
        display: inline-block;
        width: 100%;
        vertical-align: top;
        text-align: center;
        margin-top: 80px; 
        margin-bottom: 25vw;
        opacity: 0; 
        transform: scale(0.6);
        p {
          font-size: 1.5em;
          font-weight: 500;
          margin: 0;
          padding: 0;
        }
      }
    }
    .cube {
      position: relative;
      display: inline-block;
      width: 30vw;
      height: 30vw;
      margin-bottom: 3vw;
      img {
        position: absolute;
        width: 60%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  
  div[id*="toggle_magic_"] {
    position: absolute;
  }
  #toggle_magic_1 {top: 0;}
  #toggle_magic_2 {top: 170vw;}
  #toggle_magic_3 {top: 210vw;}
  #toggle_magic_4 {top: 250vw;}
  #toggle_magic_5 {top: 330vw;}
  #toggle_magic_5_p {top: 400vw;}
  #toggle_magic_6 {top: 490vw;}
  #toggle_magic_6_p {top: 560vw;}
  #toggle_magic_7 {top: 620vw;}
  #toggle_magic_7_p {top: 670vw;}
  #toggle_magic_8 {top: 730vw;}
  #toggle_magic_8_p {top: 790vw;}
  .string_logo-header-text {
    font-size: 9vw;
    color: #fff;
    margin-top: 25vw;
    margin-bottom: 15px;
    line-height: 1rem;
    text-align: left;
    padding: 0 20px;
    animation: string_fadeout 1s forwards;
    animation-delay: 0.2s;
    transform: translateY(-20px);
    opacity: 0;
    .logo-header-text{
      width: 130px;
    }
  }
  .wrap-h5-unit-2 {
    height: auto;
    margin-top: -20vw;
    padding: 0;
    li {
      margin-top: 30vw;
      &:nth-child(2n-1) img {margin-left: -120vw;}
      &:nth-child(2n) img {margin-right: -120vw;}
      &>img {
        width: 100vw;
        margin-bottom: 3vw;
        opacity: 0; 
        transform: scale(1); 
      }
      .sub-img {
        width: auto;
        height: 40px;
        position: absolute;
        left: 15px; 
        margin-top: 8px;
        margin-bottom: 2rem;
      }
      .sub-title-horizon {
        font-size: 2.1em;
        margin-bottom: 0;
      }
      .sub-title-horizon, .thi-title {
        margin-top: 2px; 
        opacity: 0; 
        transform: scale(0.8)!important;
      }
    }
  }
  .h5-bottom {
    position: relative; 
    top: 0;
    padding: 0;
    .wrap-h5-footer {
      position: relative;
      display: grid;
      width: 100%;
      left: 0;
      bottom: 0;
      color: #FFFFFF;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 0;
      background-color: #eff7fb;
      background-image: url('~@/assets/background/footer.png');
      background-repeat: no-repeat;
      background-position: center 56%;
      background-size: 100%;
      z-index: 200;
      .logo-footer {
        position: relative;
        display: block;
        left: 0;
        top: 0;
        right: 0;
        width: 3em;
      }
      .string_copyright, .string_privacyPolicy, .string_userAgreement {
        position: relative;
        display: block;
        left: 0;
        top: -1px;
        right: 0;
        font-size: 0.9em;
        background-color: #ff6900;
        z-index: 999999;
      }
      .string_privacyPolicy, .string_userAgreement {
        margin-bottom: 10px;
        &:hover {
          text-decoration: none;
          color: #FFFFFF;
          z-index: 999999;
        }
      }
      a {
        text-decoration: none;
        color: #FFF;
        .download-btn {
          margin-top: 1em; 
          background: none;
          padding: 0;
          img {
            width: -webkit-fill-available;
            margin: 0; 
            position: relative;
          }
        }
        &:first-child {
          .download-btn {margin-top: 0; }
        }
      }
      .footer-text {
        display: flex; 
        align-items: center; 
        justify-content: center; 
        margin-top: 0;
        padding: 2em 0 1em;
        background-color: #ff6900;
        .logo-footer-text {
          width: 50px;
        }
      }
      .wrap-h5-footer-bg{
        position: relative;
        top: -1px;
        height: 52px;
        background-color: #ff6900;
      }
    }
  }
}
// @media (max-width: 575.98px) {

// }
// @media (min-width: 576px) and (max-width: 767.98px) {

// }
@media (min-width: 768px) and (max-width: 820px) {
  .wrap-full-h5 {
    .string_desc {
      width: 9.8em;
      font-size: 5vw;
    }
    .thi-title {
      font-size: 5vw;
    }
    .pad-air-style {
      padding: 0 45px 0 20px;
      .download-btn {
        width: 13em;
        height: auto;
        margin: 2em 1.5em 0 0;
      }
      .hichat-browser .download-btn{
        width: 11em;
        margin-bottom: 4em;
        img {margin-top: 0;}
      }
    }
    .unit-block-1 {
      height: auto;
      margin-top: 0;
      text-align: center;
      .sub-title {
        font-size: 7vw;
        margin-top: 80px; 
        margin-bottom: 13vw;
        opacity: 0; 
        transform: scale(0.6);
      }
      ul {
        margin-top: 10%;
        padding: 0;
        li {
          display: inline-block;
          width: 100%;
          vertical-align: top;
          text-align: center;
          margin-top: 20vw; 
          margin-bottom: 10vw;
          opacity: 0; 
          transform: scale(0.6);
          p {
            font-size: 3vw;
          }
        }
      }
      .cube {
        position: relative;
        display: inline-block;
        width: 30vw;
        height: 30vw;
        margin-bottom: 1vw;
        img {
          position: absolute;
          width: 60%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    
    div[id*="toggle_magic_"] {
      position: absolute;
    }
    #toggle_magic_1 {top: 0vw;}
    #toggle_magic_2 {top: 140vw;}
    #toggle_magic_3 {top: 180vw;}
    #toggle_magic_4 {top: 220vw;}
    #toggle_magic_5 {top: 290vw;}
    #toggle_magic_5_p {top: 350vw;}
    #toggle_magic_6 {top: 430vw;}
    #toggle_magic_6_p {top: 480vw;}
    #toggle_magic_7 {top: 550vw;}
    #toggle_magic_7_p {top: 620vw;}
    #toggle_magic_8 {top: 690vw;}
    #toggle_magic_8_p {top: 760vw;}
    .string_logo-header-text {
      font-size: 9vw;
      color: #fff;
      margin-top: 25vw;
      margin-bottom: 15px;
      line-height: 1rem;
      text-align: left;
      padding: 0 20px;
      animation: string_fadeout 1s forwards;
      animation-delay: 0.2s;
      transform: translateY(-20px);
      opacity: 0;
      .logo-header-text{
        width: 16vw;
      }
    }
    .wrap-h5-unit-2 {
      height: auto;
      margin-top: -20vw;
      padding: 0;
      li {
        margin-top: 30vw;
        .sub-img {
          height: 8vw;
          left: 3vw; 
          margin-top: 3vw;
        }
        .sub-title-horizon {
          font-size: 8.6vw;
          margin-bottom: 0;
        }
      }
    }
    .h5-bottom {
      padding: 0;
      .wrap-h5-footer {
        margin-top: 0;
        margin-bottom: 0;
        background-position: center 62%;
        .logo-footer {
          position: relative;
          display: block;
          left: 0;
          top: 0;
          right: 0;
          width: 3em;
        }
        .logo-footer-text {width: 7em;}
        a {
          .download-btn {
            margin-top: 0;
            padding: 1em 0 3em; 
            img {
              width: -webkit-fill-available;
              margin: 0; 
              position: relative;
            }
          }
          &:first-child {
            .download-btn {
              margin-top: 0; 
              padding-bottom: 1em;
            }
          }
        }
        .footer-text {
          margin-top: 0;
        }
        .wrap-h5-footer-bg{
          height: 50px;
        }
      }
    }
  }
}
</style>