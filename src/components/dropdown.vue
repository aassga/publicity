<template>
  <div>
    <b-dropdown id="dropdownMenuButton" right :text="curLang">
      <b-dropdown-item-button 
        v-for="(name, value) in langList" 
        :key="value"
        @click="switchLang(value)">
        <span>{{name}}</span>
      </b-dropdown-item-button>
    </b-dropdown>
  </div>  
</template>

<script>
import { handleCookie } from '@/utils/cookie'
import { loadProperties } from '@/utils/i18n'

export default {
  data () {
    return {
      curLang: '简体中文',
      langList: {
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文'
      }
    }
  },
  methods: {
    switchLang(LANGUAGE_CODE) {
      this.curLang = this.langList[LANGUAGE_CODE]
      handleCookie("Language", LANGUAGE_CODE, {
        expires: 30,
        path: '/'
      });
      // loadProperties(LANGUAGE_CODE);
      this.$root.$i18n.locale = LANGUAGE_CODE
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  position: absolute!important;
  top: 30px;
  right: 50px;
  z-index: 99999;
  .btn {
    font-size: 18px!important;
  }
  button.dropdown-toggle {
    font-weight: 500!important;
    color: #fff!important;
    background: transparent!important;
    border: none!important;
    &:hover {color: #fff!important;}
    &:focus, &:focus-visible {
      box-shadow: none!important;
      outline: none!important;
    }
    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      margin-left: 0!important;
      vertical-align: 0!important;
      border:none;
      width: 1.5em;
      height: 1.5em;
      top: 6px;
      background-image: url('~@/assets/icon/chevron-down.png');
      background-size: 100%;
      background-repeat: none;
    }
  }
  .dropdown-menu {
    color: #000;
    background-color: #fff;
    border: none!important;
    .dropdown-item {
      padding: .25rem 1.5rem!important;
      color: #000!important;
      &:hover {
        background-color: #f8f9fa!important;
      }
    }
  }
}

</style>