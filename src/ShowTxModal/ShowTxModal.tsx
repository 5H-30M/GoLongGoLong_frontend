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
import { ShowTxDetail } from "utils/web3/ShowTxDetail";

interface propsType {
    txId: string;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowTxModal = ({ txId, setModal }: propsType) => {
    const tx = ShowTxDetail({ txId });
    return (
        <Container>
            <Overlay>
                <Box>
                    <text style={{ fontSize: "20px", fontWeight: "bold" }}>
                        트랜잭션 정보
                    </text>
                    <Column style={{ gap: "28px", width: "100%" }}>
                        <TextBox>
                            <Name>트랜잭션 ID</Name>
                            <Content>{txId}</Content>
                        </TextBox>
                        <TextBox>
                            <Name>생성 시간</Name>
                            <Content>May-17-2023 02:42:36 PM +UTC</Content>
                        </TextBox>
                        <TextBox>
                            <Name>전송자 지갑 주소</Name>
                            <Content>
                                0x54142a81f139e00d0bb21f1866cd66ede0b092bd
                            </Content>
                        </TextBox>
                        <TextBox>
                            <Name>수신자 지갑 주소</Name>
                            <Content>
                                0xb248d4cbb7c728ef0e81de0b4b17734aeed2d280
                            </Content>
                        </TextBox>
                        <TextBox>
                            <Name>전송된 토큰 값</Name>
                            <Content>2000 GOL</Content>
                        </TextBox>
                        <TextBox>
                            <Name>Etherscan 링크</Name>
                            <Content>
                                <a
                                    href={`https://sepolia.etherscan.io/tx/${txId}`}
                                >
                                    https://sepolia.etherscan.io/tx/{txId}
                                </a>
                            </Content>
                        </TextBox>
                    </Column>
                    <Button onClick={() => setModal(false)}>확인</Button>
                </Box>
            </Overlay>
        </Container>
    );
};

export default ShowTxModal;
