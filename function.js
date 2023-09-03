// function.js

window.function = function (input, key) {
  const message = input.value;
  const secretKey = key.value;
  try {
    const hmacSha1 = CryptoJS.HmacSHA1(message, secretKey); // Use secretKey here
    const hexEncodedHash = hmacSha1.toString(CryptoJS.enc.Hex);
    return hexEncodedHash;
  }
  catch (error) {
    return "Error loading CryptoJS: " + error;
  }
}
