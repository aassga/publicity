<template>
  <div class="signup-view">
    <div class="signup-wrapper">
      <div class="brand">
        <!-- <img src="@/assets/brand.png"> -->
        <h3>註册</h3>
      </div>
      <form class="form">
        <ul>
          <li class="phone">
            <div :class="{'valid-error':error.phone}">
              <label>手机号码</label>
              <input v-model="params.phone" type="text" @blur="handleValid('phone')" />
            </div>
            <p class="error" v-show="error.phone">{{error.phone}}</p>
          </li>
          <li class="password">
            <div :class="{'valid-error':error.password}">
              <label>登录密码</label>
              <input 
                :type="password_visivble ? 'text' : 'password'"
                 v-model="params.password"
                 autocomplete
                 @blur="handleValid('password')" />
              <div class="eye-btn" @click="handlePswVisible('password')">
                <img :src="require(`@/assets/signup/eye${!password_visivble ? '-off' : ''}.png`)">
              </div>
            </div>
            <p class="error" v-show="error.password">{{error.password}}</p>
          </li>
          <li class="confirm-password">
             <div :class="{'valid-error':error.confirm_password}">
              <label>确认密码</label>
              <input 
                :type="confirm_password_visible ? 'text' : 'password'"
                 v-model="params.confirm_password"
                 autocomplete
                 @blur="handleValid('confirm_password')" />
              <div class="eye-btn" @click="handlePswVisible('confirm_password')">
                <img :src="require(`@/assets/signup/eye${!confirm_password_visible ? '-off' : ''}.png`)">
              </div>
            </div>
            <p class="error" v-show="error.confirm_password">{{error.confirm_password}}</p>
            <span class="form-tip">密码长度为6至12个字元，至少包括1个大写、1个小写英文及1个数字。</span>
          </li>
          <li class="id">
             <div :class="{'valid-error':error.username}">
              <label>帐号 ID</label>
              <input 
                type="text" 
                v-model="params.username" 
                @blur="handleValid('username')" />
            </div>
            <p class="error" v-show="error.username">{{error.username}}</p>
            <span class="form-tip">ID长度为5至18个字元，可混用英文字母、数字和底线。註册后即无法变更。</span>
          </li>
          <li class="nickname">
            <div :class="{'valid-error':error.nickname}">
              <label>暱称</label>
              <input 
                type="text" 
                v-model="params.nickname"
                @blur="handleValid('nickname')" />
            </div>
            <p class="error" v-show="error.nickname">{{error.nickname}}</p>
          </li>
          <li class="verify-code">
             <div :class="{'valid-error':error.authCode}">
              <label>验证码</label>
              <input 
                type="text" 
                v-model="params.authCode"
                @blur="handleValid('authCode')" />
              <div 
                class="btn border-btn verify-btn"
                :class="{'disabled-btn': authCodeDisable}"
                @click="getAuthCode">获取验证码{{countDownText}}</div>
            </div>
            <p class="error" v-show="error.authCode">{{error.authCode}}</p>
          </li>
        </ul>
        <div class="btn fill-btn submit-btn" @click="handleSubmit">提交</div>
        <!-- <button class="btn border-btn goback-btn">回到登錄</button> -->
      </form>
    </div>
  </div>  
</template>

<script>
import { encryp, decrypt } from '@/utils/crypto'
import { Register, GetAuthCode } from '@/api/signup'
export default {
  data () {
    return {
      password_visivble: false,
      confirm_password_visible: false,
      agentId: 0,
      timerCount: 60,
      countDownText: '',
      authCodeDisable: false,
      params: {
        phone: '',
        password: '',
        confirm_password: '',
        username: '',
        nickname: '',
        authCode: '',
      },
      error: {
        phone: '',
        password: '',
        confirm_password: '',
        username: '',
        nickname: '',
        authCode: ''
      },
      canSubmit: true,
      modalOption: {
        modalClass: 'alert-modal',
        size: 'sm',
        buttonSize: 'md',
        okVariant: 'primary',
        okTitle: '确认',
        hideHeader: true,
        contentClass: 'text-center',
        bodyClass: 'pt-5 pb-4',
        footerClass: 'text-center p-2 border-top-0',
        centered: true
      }
    }
  },
  mounted () {
    let fullPath = this.$route.fullPath
    let querySplit = fullPath.split('?')
    let queryStr = ''
    if (!querySplit || querySplit.length <= 1) {
      this.getAgentIdError()
      return
    } else {
      queryStr = decodeURIComponent(querySplit[1])
    }
    if (!queryStr) {
      this.getAgentIdError()
      return
    }
    let decryptVal = decrypt(queryStr)
    if (!decryptVal) {
      this.getAgentIdError()
      return
    }
    let agentId = decryptVal.split('=')[1]
    if (decryptVal.split('=')[0].indexOf('agentId') < 0) {
      this.getAgentIdError()
      return
    }
    this.agentId = parseInt(agentId)
  },
  methods: {
    getAgentIdError () {
      const h = this.$createElement
      const messageVNode = h('div', { domProps: { innerHTML: '链结资讯不正确<br>请检查链结后重新再试' }})
      this.$bvModal.msgBoxOk([messageVNode], this.modalOption).then(value => {
        if (value) {
          window.opener = null
          window.open("about:blank", "_top").close()
          window.close()
        }
      }).catch(err => {})
    },
    handlePswVisible (target) {
      if (target === 'confirm_password') {
        this.confirm_password_visible = !this.confirm_password_visible
      } else {
        this.password_visivble = !this.password_visivble
      }
    },
    handleValid (name) {
      switch (name) {
        case 'phone':
          this.isPhone()
          break;
        case 'password':
          this.checkPassword('password')
          break;
        case 'confirm_password':
          this.checkPassword('confirm_password')
          break;
        case 'username':
          this.checkUsername()
          break;
        case 'nickname':
          this.checkNickname()
          break;
        case 'authCode':
          this.checkAuthCode()
          break;
      }
    },
    isPhone () {
      let phone = this.params.phone
      let myreg = /^[1][3-9][0-9]{9}$/
      this.canSubmit = false
      if (phone == '') {
        this.error.phone = '请输入手机门号'
        return
      } else if (!myreg.test(phone)) {
        this.error.phone = '请输入正确手机门号'
        return
      } else {
        this.error.phone = ''
        this.canSubmit = true
      }
    },
    checkPassword (name) {
      let password = this.params[name]
      let myreg = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/
      this.canSubmit = false
      if (password == '') {
        if (name == 'confirm_password') {
          this.error[name] = '请再次输入密码'
        } else {
          this.error[name] = '请输入密码'
        }
        return
      } else if (name == 'confirm_password' && password !== this.params.password) {
        this.error[name] = '请检查并确认您输入的密码是否一致'
        return
      } else if (password.length < 6 || password.length > 12) {
        this.error[name] = '密码长度为6至12个字元'
        return
      } else if (!myreg.test(password)) {
        this.error[name] = '密码至少包括1个大写、1个小写英文及1个数字'
        return
      } else {
        this.error[name] = ''
        this.canSubmit = true
      }
    },
    checkUsername () {
      let username = this.params.username
      let myreg = /^\w+$/
      this.canSubmit = false
      if (username == '') {
        this.error.username = '请输入帐号ID'
        return
      } else if (username.length < 5 || username.length > 18) {
        this.error.username = 'ID长度为5至18个字元'
      } else if (!myreg.test(username)) {
        this.error.username = '用户名只能包含英文字母、数字和底线'
        return
      } else {
        this.error.username = ''
        this.canSubmit = true
      }
    },
    checkNickname () {
      let nickname = this.params.nickname
      this.canSubmit = false
      if (nickname == '') {
        this.error.nickname = '请输入暱称'
        return
      } else {
        this.error.nickname = ''
        this.canSubmit = true
      }
    },
    checkAuthCode () {
      let authCode = this.params.authCode
      this.canSubmit = false
      if (authCode == '') {
        this.error.authCode = '请输入验证码'
        return
      } else {
        this.error.authCode = ''
        this.canSubmit = true
      }
    },
    getAuthCode () {
      if(!this.params.phone) {
        this.isPhone()
      } else {
        this.authCodeDisable = true
        let params = {
          phoneNo: this.params.phone,
          forRegister: true
        }
        GetAuthCode(params).then(res => {
          if (res.code == 200) {
            this.countDownTimer()
          } else {
            this.authCodeDisable = false
          }
          let msg = res.message
          this.$bvModal.msgBoxOk(msg, this.modalOption).then(value => {
          }).catch(err => {})
        })
      }
    },
    countDownTimer () {
      if (this.timerCount > 0) {
        setTimeout(() => {
          this.timerCount -= 1
          this.countDownText = ` (${this.timerCount})`
          this.countDownTimer()
        }, 1000)
      } else {
        this.timerCount = 60
        this.countDownText = ''
        this.authCodeDisable = false
      }
    },
    handleSubmit () {
      for(let name in this.params) {
        this.handleValid(name)
      }
      if (this.canSubmit) {
        let params = JSON.parse(JSON.stringify(this.params))
        params.agentId = this.agentId
        params.version = 1
        delete params.confirm_password
        let password_encode = encryp(params.password)
        params.password = password_encode
        Register(params).then(res => {
          let msg = res.message
          let success = res.code == 200
          if (success) {
            this.modalOption.okTitle = '前往下载'
          }
          this.$bvModal.msgBoxOk(msg, this.modalOption).then(value => {
            if (success && value) {
              this.$router.push({name: 'Landing'})
            }
          }).catch(err => {})
        }).catch(err => {
          this.$bvModal.msgBoxOk('发生错误', this.modalOption).then(value => {
          }).catch(err => {})
        })
      }
      
    }
  }
}
</script>
<style lang="scss">
$primary: #ff6900;
$base: 16;
.alert-modal {
  .modal-footer {
    justify-content: center;
    button {
      padding: 5/$base + rem 32/$base + rem;
      border: none!important;
      background-color: $primary;
    }
  }
}
</style>
<style lang="scss" scoped>
$primary: #ff6900;
$secondary: #10686e;
$text-dark: rgba(0, 0, 0, 0.8);
$text-light: #FFFFFF;
$text-gray: #6666667c;
$background: #eef7fb;
$base: 16;
.signup-view {
  width: 100%;
  height: auto;
  min-height: 100vh;
  font-size: 16/$base + rem;
  text-align: center;
  padding: 80/$base + rem 0 0;
  color: $text-dark;
  background-color: $background;
  .signup-wrapper {
    width: 360px;
    height: auto;
    margin: 0 auto;
    padding: 0 24/$base + rem 68/$base + rem;
    .brand {
      margin-bottom: 48/$base + rem;
      img {
        width: 100/$base + rem;
        height: auto;
        margin-bottom: 24/$base + rem;
      }
      h3 {
        font-size: 24/$base + rem;
        color: $text-dark;
        line-height: 1;
        text-align: center;
      }
    }
    .form {
      ul {
        display: flex;
        flex-direction: column;
        margin-bottom: 32/$base + rem !important;
        padding: 0;
        li {
          width: 100%;
          text-align: left;
          padding: 0;
          margin: 4/$base + rem 0 8/$base + rem;
          // &.confirm-password, &.id {
          //   margin: 0 0 8/$base + rem;
          // }
          .error {
            font-size: 12/$base + rem;
            line-height: 1.5;
            text-align: left;
            color: $primary;
            padding: 0 5/$base + rem;
            margin: 4/$base + rem 0 0;
            &::before {
              content: '!';
              display: inline-block;
              width: 15px;
              height: 15px;
              font-size: 12/$base + rem;
              font-weight: bold;
              text-align: center;
              line-height: 15px;
              color: $background;
              margin-right: 8/$base + rem;
              border-radius: 50%;
              background-color: $primary;
            }
          }

          &>div {
            position: relative;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            width: 100%;
            height: 48/$base + rem;
            padding: 0 16/$base + rem;
            border-radius: 8/$base + rem;
            background: $text-light;
            &.valid-error {
              box-shadow: 0 0 1px 1px $primary;
            }
            label {
              width: 80/$base + rem;
            }
            input {
              width: calc(100% - #{80/$base + rem});
              margin: 0 0 0 16/$base + rem;
              font-size: 16/$base + rem;
              line-height: 1.5;
              border: none;
              &:focus, &:focus-visible, &:focus-within {outline: none;}
            }
          }
          .form-tip {
            display: inline-block;
            width: 100%;
            height: auto;
            margin: 8/$base + rem 0 0;
            font-size: 12/$base + rem;
            line-height: 1.5;
            text-align: left;
            color: $text-dark;
          }
          &.password, &.confirm-password {
            &>div {
              input {
                width: calc(100% - #{120/$base + rem});
              }
              .eye-btn {
                width: 40/$base + rem;
                height: 40/$base + rem;
                line-height: 40/$base + rem;
                opacity: 0.6;
                object-fit: contain;
                transform: translateX((20/$base + rem));
                cursor: pointer;
                &:hover {
                  opacity: 0.8;
                }
                img {
                  width: 20/$base + rem;
                  height: 20/$base + rem;
                  vertical-align: sub;
                }
              }
            }
          }
        }
      }
      .btn {
        width: 100%;
        height: 48px;
        font-size: 16/$base + rem;
        text-align: center;
        margin: 8/$base + rem 0;
        padding: 0;
        border-radius: 8/$base + rem;
        &:hover {
          filter: brightness(0.9) contrast(1.2);
        }
        &:focus, &:focus-within, &:focus-visible, &:active {
          outline: none;
          box-shadow: none;
        }
        &.fill-btn {
          line-height: 48/$base + rem;
          color: $text-light;
          background-color: $primary;
        }
        &.border-btn {
          line-height: 46/$base + rem;
          color: $primary;
          border: solid 1px $primary;
          background: transparent;
          &:hover {
            background: #fe5f3f1c;
          }
        }
        &.verify-btn {
          position: absolute;
          width: max-content;
          height: 32/$base + rem;
          font-size: 14/$base + rem;
          line-height: 30/$base + rem;
          padding: 0 10/$base + rem;
          margin: 0;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
        }
        &.disabled-btn {
          color: $text-gray;
          border: solid 1px $text-gray;
          cursor: not-allowed;
        }
      }
    }
  }
}
@media (max-width: 767.98px) {
  .signup-view {
    width: 100vw;
    padding: 16/$base + rem 0 0;
    .signup-wrapper {
      width: 100vw;
      padding: 0 24/$base + rem 48/$base + rem;
      .brand {
        height: 48/$base + rem;
        margin-bottom: 16/$base + rem;
        img {display: none;}
        h3 {
          font-size: 18/$base + rem;
          color: $secondary;
          line-height: 48/$base + rem;
          text-align: center;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1199.98px) {}
@media (min-width: 1200px) {}
</style>