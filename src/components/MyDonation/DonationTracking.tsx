import { Column, Row } from "components/Common/DivStyle";
import { Container, TrackingDiv, Circle, Bar } from "./Style";

const DonationTracking = () => {
    return (
        <Container style={{}}>
            <Column style={{ width: "calc(100% - 74px)", gap: "20px" }}>
                <Row style={{ gap: "14px" }}>
                    <text className="tracking">내 기부금 트래킹</text>
                    <text className="more">자세히</text>
                </Row>
                <TrackingDiv>
                    <Row style={{ width: "100%", position: "absolute" }}>
                        <Bar className="checked_bar"></Bar>
                        <Bar className="checked_bar"></Bar>
                        <Bar className="unchecked_bar"></Bar>
                        <Bar className="unchecked_bar"></Bar>
                    </Row>
                    <Row
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Circle className="checked"></Circle>
                        <Circle className="checked"></Circle>
                        <Circle className="unchecked"></Circle>
                        <Circle className="unchecked"></Circle>
                        <Circle className="unchecked"></Circle>
                    </Row>
                </TrackingDiv>
            </Column>
        </Container>
    );
};

export default DonationTracking;
