<template>
  <div>
    <vue-qr :text="QRcode_link" :size="200" :margin="20"></vue-qr>
  </div>  
</template>

<script>
import VueQr from 'vue-qr'
export default {
  components: {
    VueQr
  },
  computed:{
    QRcode_link () {
      return location.origin + '/pub/#/convert'
    },  
  },
}
</script>

<style lang="scss">
</style>