import { split, combine, } from "shamir-secret-sharing";

async function secrets() {

    const input = 'Private_Key12345';

    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(input);
    const [share1, share2, share3, share4, share5] = await split(uint8Array, 5, 3);

    const combinedPrivateKey = await combine([share1, share2, share3]);
    // console.log(combinedPrivateKey);

    const decoder = new TextDecoder();
    const decodedPrivateKey = decoder.decode(combinedPrivateKey);
    console.log("This is the decoded private key: ", decodedPrivateKey);
}

secrets();