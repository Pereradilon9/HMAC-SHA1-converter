// function.js

function calculateHmacSha1(message, secretKey) {
    const cryptoBuffer = new TextEncoder().encode(secretKey);
    const dataBuffer = new TextEncoder().encode(message);

    return crypto.subtle.importKey(
        "raw",
        cryptoBuffer,
        { name: "HMAC", hash: { name: "SHA-1" } },
        false,
        ["sign"]
    ).then((key) => {
        return crypto.subtle.sign(
            "HMAC",
            key,
            dataBuffer
        );
    }).then((signature) => {
        const hashArray = Array.from(new Uint8Array(signature));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashHex;
    });
}

export { calculateHmacSha1 }; // Export the function for use in driver.js

