import { Column, Row } from "components/Common/DivStyle";
import { Container } from "./Style";
import img1 from "../../assets/imgs/test/1.jpg";

const Author = () => {
    return (
        <Container>
            <Row style={{ gap: "10px", alignItems: "center" }}>
                <img src={img1}></img>
                <Column style={{ gap: "10px" }}>
                    <text className="small">구조자</text>
                    <text className="medium">냥냥아</text>
                </Column>
            </Row>
        </Container>
    );
};

export default Author;
