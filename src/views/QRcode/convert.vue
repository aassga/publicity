<template>
  <div>
    {{convertText}}
  </div>  
</template>

<script>
import { GetAndroidVersion } from '@/api/download'
import appstoreLink from '@/constants/appstoreLink'

export default {
  data () {
    return {
      apk_url: "",
      convertText:"转导回首页中...."
    }
  },
  mounted() {
    this.getAndroidVersion()
  },
  methods: {
    changeDeviceDowload(){
      var ua = navigator.userAgent;
      var android = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; // android
      var iOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios
      if (android == true) {
        document.location.href = this.apk_url;
        this.$router.push({name: 'Landing'})
      } else if (iOS == true) {
        document.location.href = appstoreLink;
      } else {
        alert('您目前非行动装置')
        setTimeout(() => {
          this.$router.push({name: 'Landing'})
        }, 1500);
      }
    },
    getAndroidVersion () {
      GetAndroidVersion().then(res => {
        if (res.code == 200) {
          this.apk_url = res.data.apkUrlHailiao
          this.changeDeviceDowload()
        } 
      })
    }
  },
}
</script>

<style lang="scss">
</style>