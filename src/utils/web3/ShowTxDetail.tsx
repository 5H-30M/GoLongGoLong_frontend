import Web3 from "web3";

interface propsType {
    txId: string;
}

export const ShowTxDetail = ({ txId }: propsType) => {
    let result: any;

    const rpcURL =
        "https://sepolia.infura.io/v3/35c142c49558446680bceff7b8eb4e42";

    // Web3 인스턴스 생성
    const web3 = new Web3(rpcURL);

    //트랜잭션 조회
    web3.eth.getTransaction(txId).then((obj) => {
        result = obj;
    });

    return result;
};
