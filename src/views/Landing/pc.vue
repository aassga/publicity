<template>
  <div class="wrap-full-pc">
    <mvArea />
    <Brand />
    <div class="wrap-content">
      <!-- <Dropdown /> -->
      <div class="wrap-sub-content pc-top-block">
        <!-- 938 -->
        <div class="left-block">
          <img class="string_headline logo-header-text" src="@/assets/logotext.png" alt="">
          <div class="string_kebord">
            <p class="string_desc">{{ $t("string_desc") }}</p>
          </div>
          <div class="download-area">
            <a :href="appstore_link" target="_blank">
              <div class="download-btn">
                <img class="string_app_appstore_img" src="@/assets/icon/btn-appstore.png" alt="" style="height:60px;margin:0;">
              </div>
              <div class="download-qr" v-if="appstore_link">
                <span class="triangle"></span>
                <!-- <img src="@/assets/qr.png" alt=""> -->
                <vue-qr :text="appstore_link" :size="500" :margin="10"></vue-qr>
                <p class="string_qr_download">{{ $t("string_qr_download") }}</p>
              </div>
            </a>
          </div>
          <div class="download-area">
            <a :href="apk_link" target="_blank">
              <div class="download-btn">
                <img class="string_app_android_img" src="@/assets/icon/btn-android.png" alt="" style="height:60px;margin:0;">
              </div>
              <div class="download-qr" v-if="apk_link">
                <span class="triangle"></span>
                <!-- <img src="@/assets/qr.png" alt=""> -->
                <vue-qr :text="apk_link" :size="500" :margin="10"></vue-qr>
                <p class="string_qr_download">{{ $t("string_qr_download") }}</p>
              </div>
            </a>
          </div>
          <div class="download-area">
            <a class="hichat-browser" target="_blank" @click="goWebPage()">
              <div class="download-btn">
                <img 
                  class="string_app_browser_img" 
                  src="@/assets/icon/btn-browser.png" 
                  alt="" 
                  style="height:60px;margin:0;">
              </div>
            </a>
          </div>
        </div>
        <div class="right-block">
          <!-- <img class="mobile-1" src="@/assets/mobile/records-zh.png" alt="">
          <img class="mobile-2" src="@/assets/mobile/home-zh.png" alt=""> -->
        </div>
      </div>
    </div>
    <!-- 极致体验 面面俱到 -->
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
        <!--
                -->
        <li>
          <div class="cube">
            <img src="@/assets/icon/exchange.png" alt="">
          </div>
          <p class="string_qr_block_1_2_1">{{ $t("string_qr_block_1_2_1") }}</p>
          <p class="string_qr_block_1_2_2">{{ $t("string_qr_block_1_2_2") }}</p>
        </li>
        <!--
                -->
        <li>
          <div class="cube">
            <img src="@/assets/icon/idcard.png" alt="">
          </div>
          <p class="string_qr_block_1_3_1">{{ $t("string_qr_block_1_3_1") }}</p>
          <p class="string_qr_block_1_3_2">{{ $t("string_qr_block_1_3_2") }}</p>
        </li>
      </ul>
    </div>

    <!-- 重要讯息 实时传送 -->
    <div class="wrap-sub-content padding-50 unit-block-2">
      <!-- 938 -->
      <div class="unit-left">
        <img class="sub-img" src="@/assets/icon/send.png" alt="">
        <p class="string_qr_block_2 sub-title-horizon">{{ $t("string_qr_block_2") }}</p>
        <p class="string_qr_block_2_1 thi-title">{{ $t("string_qr_block_2_1") }}</p>
      </div>
      <!--
            -->
      <div class="unit-right">
        <img 
          src="@/assets/illustration/Rectangle.png" 
          style="width: 450px;" 
          alt="">
        <img 
          src="@/assets/illustration/mob1.png" 
          style="width: 158px; position: absolute; bottom: 0; right: 0;"
          alt="">
      </div>
    </div>

    <!-- 多人群组 有效讨论 -->
    <div class="wrap-sub-content padding-50 unit-block-3">
      <!-- 938 -->
      <div class="unit-left">
        <img 
          src="@/assets/illustration/Rectangle2.png" 
          style="width: 450px;" 
          alt="">
        <img 
          src="@/assets/illustration/mob2.png" 
          style="width: 158px; position: absolute; bottom: 0; left: 0;"
          alt="">
      </div>
      <!--
            -->
      <div class="unit-right">
        <img class="sub-img" src="@/assets/icon/group.png" alt="">
        <p class="string_qr_block_3 sub-title-horizon">{{ $t("string_qr_block_3") }}</p>
        <p class="string_qr_block_3_1 thi-title">{{ $t("string_qr_block_3_1") }}</p>
      </div>
    </div>

    <!-- 简单流畅 至臻设计 -->
    <div class="wrap-sub-content padding-50 unit-block-4">
      <!-- 938 -->
      <div class="unit-left">
        <img 
          class="sub-img" 
          src="@/assets/icon/edit.png" 
          alt="">
        <p class="string_qr_block_4 sub-title-horizon">{{ $t("string_qr_block_4") }}</p>
        <p class="string_qr_block_4_1 thi-title">{{ $t("string_qr_block_4_1") }}</p>
      </div>
      <!--
            -->
      <div class="unit-right">
        <img 
          src="@/assets/illustration/Rectangle3.png" 
          style="width: 450px;" 
          alt="">
        <img 
          src="@/assets/illustration/mob3.png" 
          style="width: 158px; position: absolute; bottom: 0; right: 0;"
          alt="">
      </div>
    </div>

    <!-- 立即下载 -->
    <div class="wrap-sub-content padding-50 unit-block-5">
      <!-- 938 -->
      <div class="unit-left">
        <img 
          src="@/assets/illustration/Rectangle4.png" 
          style="width: 450px;" 
          alt="">
      </div>
      <!--
            -->
      <div class="unit-right">
        <p class="string_qr_block_5 sub-title-horizon">{{ $t("string_qr_block_5") }}</p>
        <p class="string_qr_block_5_1 thi-title">{{ $t("string_qr_block_5_1") }}</p>
        <div class="download-area">
          <a :href="appstore_link" target="_blank">
            <div class="download-btn">
              <img 
                class="string_app_appstore_img" 
                src="@/assets/icon/btn-appstore.png" 
                alt="" 
                style="height: 60px; margin: 0; position: relative;">
            </div>
            <div class="download-qr" v-if="appstore_link">
              <span class="triangle"></span>
              <!-- <img src="@/assets/qr.png" alt=""> -->
              <vue-qr :text="appstore_link" :size="500" :margin="10"></vue-qr>
              <p class="string_qr_download">{{ $t("string_qr_download") }}</p>
            </div>
          </a>
        </div>
        <div class="download-area">
          <a :href="apk_link" target="_blank">
            <div class="download-btn">
              <img 
                class="string_app_android_img" 
                src="@/assets/icon/btn-android.png" 
                alt="" 
                style="height: 60px; margin: 0; position: relative;">
            </div>
            <div class="download-qr" v-if="apk_link">
              <span class="triangle"></span>
              <!-- <img src="@/assets/qr.png" alt=""> -->
              <vue-qr :text="apk_link" :size="500" :margin="10"></vue-qr>
              <p class="string_qr_download">{{ $t("string_qr_download") }}</p>
            </div>
          </a>
        </div>
        <div class="download-area">
          <a class="hichat-browser" target="_blank" @click="goWebPage()">
            <div class="download-btn">
              <img 
                class="string_app_browser_img" 
                src="@/assets/icon/btn-browser.png" 
                alt="" 
                style="height: 60px; margin: 0; position: relative;">
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="wrap-content-footer">
      <!-- 1440 -->
      <div class="wrap-footer-text">
        <img class="logo-footer" src="@/assets/brand-footer.png" alt="">
        <img class="logo-footer-text" src="@/assets/logotext.png" alt="">
      </div>
      <router-link to="userAgreement" class="string_userAgreement">{{ $t("string_userAgreement") }}</router-link>
      <router-link to="privacyPolicy" class="string_privacyPolicy">{{ $t("string_privacyPolicy") }}</router-link>
      <div class="string_copyright">{{ $t("string_copyright") }}</div>
    </div>
  </div>
</template>

<script>
import mvArea from '@/components/mvArea.vue'
import Dropdown from '@/components/dropdown.vue'
import Brand from '@/components/brand.vue'
import appstoreLink from '@/constants/appstoreLink'
import VueQr from 'vue-qr'

export default {
  props: ['apkLink'],
  components: {
    mvArea,
    Dropdown,
    Brand,
    VueQr
  },
  computed: {
    apk_link () {
      return this.apkLink
    },
    appstore_link () {
      return appstoreLink
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
.wrap-full-pc {
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 3600px;
  overflow: hidden;
  background-image: url('~@/assets/background/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  margin: 0 auto;
  .padding-50 {
    padding: 0 50px;
  }
  .sub-img {
    height: 50px;
    margin-bottom: 2rem;
  }
  .sub-title {
    font-size: 37px;
    margin-bottom: 1rem;
  }
  .sub-title-horizon {
    font-size: 37px;
    margin-bottom: 0rem;
  }
  .download-area {
    display: inline-block;
    text-align: center;
    .download-btn {
      position: relative;
      display: inline-block;
      height: 110px;
      border-radius: 5px;
      font-size: 18px;
      text-align: left;
      color: #000;
      margin: -18px 10px 0 0;
      vertical-align: top;
      cursor: pointer;
      &:hover + .download-qr, &:hover + .download-qr-googleplay {
        visibility: visible;
      }
      img {
        position: relative;
        display: inline-block;
        vertical-align: top;
      }
    }
    .download-qr, .download-qr-googleplay {
      position: absolute;
      background-color: #fff;
      border-radius: 12px;
      margin: -30px 15px 0;
      padding: 20px;
      visibility: hidden;
      z-index: 9;
      &.show {visibility: visible;}
      img {
        max-width: 130px;
        width: 100%;
      }
      .string_qr_download {
        font-size: 14px;
        font-weight: 700;
        margin-top:1em;
        margin-bottom: 0;
        text-decoration: none;
        color: #333;
      }
    }
    .triangle {
      position: absolute;
      top: -10px;
      margin-left: 55px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #ffffff transparent;
    }
  }
  .wrap-content, .wrap-content-footer {
    position: relative;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    z-index: 50;
    .pc-top-block {
      max-width: 1920px;
      padding: 0 100px;
      height: 938px;
      .left-block, .right-block {
        position: relative;
        width: 100%;
        display: inline-block;
        margin-top: 160px;
        vertical-align: top;
      }
      .left-block {
        text-align: left;
      }
      .string_headline {
        font-size: 48px;
        color: #fff;
        margin-top: 119px;
        animation: string_fadeout 1s forwards;
        animation-delay: 0.2s;
        transform: translateY(-20px);
        opacity: 0;
        &.logo-header-text{
          width: 180px;
          margin-bottom: 30px;
        }
      }
      .string_desc {
        width: 9.5em;
        font-size: 35px;
        color: #fff;
        border-right: 6px solid #ff6900;
        margin-bottom: 2em;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 2s steps(9), caret 1s steps(1) infinite;
      }
    }
  }
  .unit-block-1 {    
    height: 450px;
    margin-top: 50px;
    ul {
      li {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        width: 33%;
        p {
          margin: 0;
          padding: 0;
          font-size: 24px;  
        }
      }
    }
    .cube {
      position: relative;
      display: inline-block;
      width: 140px;
      height: 140px;
      margin-bottom: 29px;
      img {
        position: absolute;
        width: 88px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .unit-block-2 {
    margin-top: 80px;
    height: 420px;
    .unit-left, .unit-right {
      display: inline-block;
      width: 49%;
    }
    .unit-left {
      text-align: left;
      vertical-align: middle;
    }
    .unit-right {text-align: right;}
  }
  .unit-block-3 {
    margin-top: 80px;
    height: 422px;
    .unit-left, .unit-right {
      display: inline-block;
      text-align: left;
    }
    .unit-left {width: 55%;}
    .unit-right {
      width: 44%;
      vertical-align: middle;
    }
  }
  .unit-block-4 {
    margin-top: 80px;
    height: 422px;
    .unit-left, .unit-right {
      display: inline-block;
    }
    .unit-left {
      width: 55%;
      vertical-align: middle;
    }
    .unit-right {
      width: 44%;
      text-align: right;
    }
  }
  .unit-block-5 {
    margin-top: 120px;
    height: 450px;
    .unit-left, .unit-right {
      display: inline-block;
      text-align: left;
    }
    .unit-left {
      width: 55%;
      top: 98px;
      img {
        margin-top: -12em;
      }
    }
    .unit-right {
      width: 44%;
      vertical-align: middle;
    }
  }
  .wrap-content-footer {
    position: relative;
    display: flex;
    max-width: 1920px;
    align-items: center;
    bottom: 0;
    z-index: 9;
    margin: 0 auto;
    
    .wrap-footer-text{
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1920px;
      padding: 20px 100px;
      font-weight: 300;
      font-size: 18px;
      top: 0;
      z-index: 2;
      &>span {
        font-size: 1.2em;
        color: #ffffff;
        letter-spacing: 2px;
        font-weight: 600;
      }
      .logo-footer-text {
        width: 50px;
      }
    }
    .string_copyright, .string_privacyPolicy, .string_userAgreement {
      position: absolute;
      top: 38px;
      color: #fff;
      font-size: 0.9em;
      z-index: 999999;
    }
    .string_userAgreement {right: 340px;}
    .string_copyright {right: 60px;}
    .string_privacyPolicy {right: 255px;}
    // a {
    //   color: #FFF;
    //   text-decoration: none;
    // }
  }
  .thi-title {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 3em;
  }
}
</style>