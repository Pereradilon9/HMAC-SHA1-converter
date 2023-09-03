const message = 'hello';
const secretKey = 'secret';
const hmac = CryptoJS.HmacSHA1(message, secretKey);
const hashHex = hmac.toString(CryptoJS.enc.Hex);
return hashHex
