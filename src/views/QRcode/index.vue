<template>
  <div class="QRcode-box">
    <vue-qr
      :logoSrc="QRcode_logo"
      :logoCornerRadius="2"
      :logoMargin="1"
      :text="QRcode_link"
      :size="1000"
      :margin="0"
    ></vue-qr>
  </div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  data() {
    return {
      QRcode_logo: require("./../../assets/brand.png"),
    }
  },
  components: {
    VueQr,
  },
  computed: {
    QRcode_link() {
      return location.origin + "/pub/#/convert";
    },
  },
};
</script>

<style lang="scss">
.QRcode-box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img{
    height:20em;
  }
}
</style>