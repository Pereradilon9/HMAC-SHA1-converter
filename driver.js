// driver.js

document.addEventListener("DOMContentLoaded", function () {
    const resultTextarea = document.getElementById("result");

    // Predefined message and secret key
    const message = 'hello';
    const secretKey = 'secret';

    // Calculate the HMAC-SHA1 hash
    calculateHmacSha1(message, secretKey).then((hashHex) => {
        resultTextarea.value = hashHex;
    });
});
