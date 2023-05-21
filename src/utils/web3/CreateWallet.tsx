import Web3 from "web3";
import CryptoJS from "crypto-js";

interface propsType {
    password: string;
}

const CreateWallet = ({ password }: propsType) => {
    //Web3 인스턴스 생성
    const web3 = new Web3();

    //새로운 지갑 생성
    const newAccount = web3.eth.accounts.create();

    // 새로운 지갑 주소와 개인키 저장
    const address = newAccount.address;
    const privateKey = newAccount.privateKey;

    //개인키 암호화
    const encryptedPrivateKey = CryptoJS.AES.encrypt(
        privateKey,
        password
    ).toString();

    //복호화
    const bytes = CryptoJS.AES.decrypt(encryptedPrivateKey, password);
    const decryptedPrivateKey = bytes.toString(CryptoJS.enc.Utf8);

    //user 정보에 지갑 주소와 암호화된 개인키 저장
    //CreateWalletApi(address, encryptedPrivateKey);

    return (
        <div>
            {/* <p>address : {address}</p>
            <p>privateKey : {privateKey}</p>
            <p>encryptedPrivateKey : {encryptedPrivateKey}</p>
            <p>decryptedPrivateKey : {decryptedPrivateKey}</p>
            <p>password : {password}</p> */}
        </div>
    );
};

export default CreateWallet;
