<template>
  <div>
    <H5 v-if="showMobile" :apkLink="apk_url" />
    <PC v-if="showPC" :apkLink="apk_url" />
  </div>
</template>

<script>
import { handleCookie } from '@/utils/cookie'
import { setLocalDefault, getLocal } from '@/utils/storage'
import { loadProperties, getNavLanguage } from '@/utils/i18n'
import { GetAndroidVersion } from '@/api/download'
import H5 from './h5.vue'
import PC from './pc.vue'

export default {
  name: 'LandingPage',
  components: {
    H5,
    PC
  },
  data() {
    return {
      showMobile: false,
      showPC: false,
      setting: {
        title: this.$t("string_title"),
        keywords: this.$t("string_title"),
        description: this.$t("string_desc"),
      },
      apk_url: ''
    };
  },
  metaInfo() {
    return {
      title: this.setting.title,
      meta: [
        { name: "Keywords", content: this.setting.keywords },
        { name: "Description", content: this.setting.description },
      ],
    };
  },
  mounted() {
    this.getAndroidVersion()
    if (window.innerWidth < 820) {
      this.showMobile = true
      this.showPC = false
    } else {
      this.showMobile = false
      this.showPC = true
    }
    window.addEventListener('mousewheel', function (event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    }, {
      passive: false
    });
    //firefox
    window.addEventListener('DOMMouseScroll', function (event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    }, {
      passive: false
    });
    // this.getUserLang()
  },
  destroyed() {
    window.removeEventListener('mousewheel', function(){})
    window.removeEventListener('DOMMouseScroll', function(){})
  },
  methods: {
    getUserLang() {
      let i18nLanguage = process.env.VUE_APP_I18N_LOCALE
      let webLanguage = ['en-US', 'en', 'zh-CN', 'zh-TW']
      if (handleCookie("Language")) {
        i18nLanguage = handleCookie("Language")
      } else {
        // 获取浏览器语言
        let navLanguage = getNavLanguage()
        if (navLanguage) {
          // 判断是否在网站支持语言数组里
          // let charSize = $.inArray(navLanguage, webLanguage)
          let charSize = webLanguage.indexOf(navLanguage)
          if (charSize > -1) {
            i18nLanguage = navLanguage
            getCookie("Language", navLanguage, {
              expires: 30,
              path: '/'
            })
          }
        } else {
          console.log("not navigator")
          return false
        }
      }
      // loadProperties(i18nLanguage)
      this.$root.$i18n.locale = i18nLanguage
    },
    getAndroidVersion () {
      GetAndroidVersion().then(res => {
        if (res.code == 200) {
          this.apk_url = res.data.apkUrlHailiao
          setLocalDefault('apk_url', res.data.apkUrlHailiao)
        } else {
          this.apk_url = getLocal('apk_url')
        }
      })
    }
  }
}
</script>

<style src="@/styles/main.css"></style>
