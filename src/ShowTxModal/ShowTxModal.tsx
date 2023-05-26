import { Column } from "components/Common/DivStyle";
import {
    Container,
    Overlay,
    Box,
    TextBox,
    Name,
    Content,
    Button,
} from "./Style";
import { transitionType } from "utils/types";

interface propsType {
    tx: transitionType;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    status: number;
}

const ShowTxModal = ({ tx, setModal, status }: propsType) => {
    const renderInfo = () => {
        const result: JSX.Element[] = [];
        if (status == 1) {
            result.push(
                <>
                    <TextBox>
                        <Name>모금글 지갑 주소</Name>
                        <Content>{tx.toAddress}</Content>
                    </TextBox>
                    <TextBox>
                        <Name>지갑 트랜잭션 Etherscan 링크</Name>
                        <Content>
                            <a
                                href={`http://sepolia.etherscan.io/address/${tx.toAddress}`}
                            >
                                http://sepolia.etherscan.io/address/
                                {tx.toAddress}
                            </a>
                        </Content>
                    </TextBox>
                </>
            );
        } else {
            result.push(
                <>
                    <TextBox>
                        <Name>트랜잭션 ID</Name>
                        <Content>{tx.transactionId}</Content>
                    </TextBox>
                    <TextBox>
                        <Name>생성 시간</Name>
                        <Content>{tx.transactionCreatedAt}</Content>
                    </TextBox>
                    <TextBox>
                        <Name>전송자 지갑 주소</Name>
                        <Content>{tx.fromAddress}</Content>
                    </TextBox>
                    <TextBox>
                        <Name>수신자 지갑 주소</Name>
                        <Content>{tx.toAddress}</Content>
                    </TextBox>
                    <TextBox>
                        <Name>전송된 토큰 값</Name>
                        <Content>{tx.amount}&nbsp; GOL</Content>
                    </TextBox>
                    <TextBox>
                        <Name>Etherscan 링크</Name>
                        <Content>
                            <a
                                href={`http://sepolia.etherscan.io/tx/${tx.transactionId}`}
                            >
                                http://sepolia.etherscan.io/tx/
                                {tx.transactionId}
                            </a>
                        </Content>
                    </TextBox>
                </>
            );
        }
        return result;
    };

    return (
        <Container>
            <Overlay>
                <Box>
                    <text style={{ fontSize: "20px", fontWeight: "bold" }}>
                        트랜잭션 정보
                    </text>
                    <Column style={{ gap: "28px", width: "100%" }}>
                        {renderInfo()}
                    </Column>
                    <Button onClick={() => setModal(false)}>확인</Button>
                </Box>
            </Overlay>
        </Container>
    );
};

export default ShowTxModal;
