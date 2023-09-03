// driver.js

document.addEventListener("DOMContentLoaded", function () {
    const resultDiv = document.getElementById("result");

    // Predefined message and secret key
    const message = 'hello';
    const secretKey = 'secret';

    // Calculate the HMAC-SHA1 hash
    calculateHmacSha1(message, secretKey).then((hashHex) => {
        // Display the result in the "result" div
        resultDiv.textContent = 'HMAC-SHA1 Result: ' + hashHex;
    });
});
