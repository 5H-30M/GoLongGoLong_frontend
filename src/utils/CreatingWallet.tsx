import Web3 from "web3";

const CreatingWallet = () => {
    // Web3 인스턴스 생성
    const web3 = new Web3();

    // 새로운 지갑 생성
    const newAccount = web3.eth.accounts.create();

    // 새로운 지갑 주소와 개인키 리턴
    const result = [newAccount.address, newAccount.privateKey];
    return result;
};

export default CreatingWallet;
