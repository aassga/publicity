import CryptoJS from 'crypto-js'

export function encryp( data ){
  if( typeof data === "object" ){
    try {
      data = JSON.stringify(data)
    } catch (error) {
      console.log("error:",error)
    }
  }
  const aesData = CryptoJS.enc.Utf8.parse(data) // 需要加密的資料
  const key = CryptoJS.enc.Utf8.parse("142c7ec1b64ae0c6") // 祕鑰142c7ec1b64ae0c6
  const iv = CryptoJS.enc.Utf8.parse("0000000000000000") // 偏移量
  const encrypted = CryptoJS.AES.encrypt( aesData , key , {
    iv: iv,
    mode: CryptoJS.mode.CBC, // 加密模式
    padding: CryptoJS.pad.ZeroPadding
  })
  let encryptedVal = CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  return encryptedVal //  返回加密後的值
}

export function decrypt( data ) {
/*
  傳入的key和iv需要和加密時候傳入的key一致  
*/
  // 統一將傳入的字串轉成UTF8編碼
  // let str = (encryptedVal + '').replace(/\n*$/g, '').replace(/\n/g, '')
  const base64 = CryptoJS.enc.Base64.parse(data)
  const src = CryptoJS.enc.Base64.stringify(base64)
  // let srcs = encryptedVal
  const key = CryptoJS.enc.Utf8.parse("142c7ec1b64ae0c6") // 祕鑰142c7ec1b64ae0c6
  const iv = CryptoJS.enc.Utf8.parse("0000000000000000") // 偏移量0000000000000000
  let decrypt = CryptoJS.AES.decrypt( src , key , {
    iv: iv, 
    mode: CryptoJS.mode.CBC, 
    padding: CryptoJS.pad.ZeroPadding
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}
