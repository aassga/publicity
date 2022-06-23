export function loadLocaleMessages () {
  const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export function loadProperties (lang) {
  if (lang === 'en-US' || lang === 'en') {
    // document.querySelector('.logo').setAttribute('src', require('@/assets/brand.png'));
    document.querySelector('.logo-footer').setAttribute('src', require('@/assets/brand-footer.png'));
    // document.querySelector('.mobile-1').setAttribute('src', require('@/assets/mobile/records-en.png'));
    // document.querySelector('.mobile-2').setAttribute('src', require('@/assets/mobile/home-en.png'));
    document.querySelector('.dropdown button').innerHTML = '<img class="flag" src="require('/'@/assets/language/united-states.png'/')">English '; // 下拉選單
  } else {
    // document.querySelector('.logo').setAttribute('src', require('@/assets/brand.png'));
    document.querySelector('.logo-footer').setAttribute('src', require('@/assets/brand-footer.png'));
    // document.querySelector('.mobile-1').setAttribute('src', require('@/assets/mobile/records-zh.png'));
    // document.querySelector('.mobile-2').setAttribute('src', require('@/assets/mobile/home-zh.png'));
    if (lang === 'zh-TW') {
      document.querySelector(".string_app_google_img").setAttribute("src", require('@/assets/icon/btn-googleplay-tc.png'));
      document.querySelector(".string_app_android_img").setAttribute("src", require('@/assets/icon/btn-android-tc.png'));
      document.querySelector(".string_app_browser_img").setAttribute("src", require('@/assets/icon/btn-browser-tc.png'));
      document.querySelector('.dropdown button').innerHTML = '<span>繁體中文</span> '; // 下拉選單
    } else {
      document.querySelector(".string_app_google_img").setAttribute("src", require('@/assets/icon/btn-googleplay.png'));
      document.querySelector(".string_app_android_img").setAttribute("src", require('@/assets/icon/btn-android.png'));
      document.querySelector(".string_app_browser_img").setAttribute("src", require('@/assets/icon/btn-browser.png'));
      document.querySelector('.dropdown button').innerHTML = '<span>简体中文</span> '; // 下拉選單
    }
  }
}

export function getNavLanguage () {
  if (navigator.appName == "Netscape") {
    let navLanguage = navigator.language
    return navLanguage.substr(0, 2);
  }
  return false
}