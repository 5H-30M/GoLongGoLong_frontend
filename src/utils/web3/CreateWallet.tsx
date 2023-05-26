import Web3 from "web3";
import CryptoJS from "crypto-js";
import { CreateWalletApi } from "api/member";

interface propsType {
    password?: string;
    userId: number;
}

export const CreateWallet = async () => {
    //Web3 인스턴스 생성
    const web3 = new Web3();

    //새로운 지갑 생성
    const newAccount = web3.eth.accounts.create();

    // 새로운 지갑 주소와 개인키 저장
    const address = newAccount.address;
    const privateKey = newAccount.privateKey;

    // //개인키 암호화
    // const encryptedPrivateKey = CryptoJS.AES.encrypt(
    //     privateKey,
    //     password
    // ).toString();

    //user 정보에 지갑 주소와 암호화된 개인키 저장
    const wallet = {
        privateKey: privateKey,
        walletAddress: address,
    };
    return wallet;
};
