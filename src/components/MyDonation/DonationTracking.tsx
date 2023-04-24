import { Column, Row } from "components/Common/DivStyle";
import { Container, TrackingDiv, Circle, Bar } from "./Style";

interface propsType {
    status: number;
}

const DonationTracking = ({ status }: propsType) => {
    const statusArr = [0, 0, 0, 0, 0];
    statusArr.fill(1, 0, status);
    const shiftedStatusArr = [...statusArr];

    return (
        <Container style={{}}>
            <Column style={{ width: "calc(100% - 74px)", gap: "20px" }}>
                <Row style={{ gap: "14px" }}>
                    <text className="tracking">내 기부금 트래킹</text>
                    <text className="more">자세히</text>
                </Row>
                <TrackingDiv>
                    <Row style={{ width: "100%", position: "absolute" }}>
                        {shiftedStatusArr.shift() &&
                            shiftedStatusArr.map((item) =>
                                item ? (
                                    <Bar className="checked_bar"></Bar>
                                ) : (
                                    <Bar className="unchecked_bar"></Bar>
                                )
                            )}
                    </Row>
                    <Row
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        {statusArr.map((item) =>
                            item ? (
                                <Circle className="checked"></Circle>
                            ) : (
                                <Circle className="unchecked"></Circle>
                            )
                        )}
                    </Row>
                </TrackingDiv>
            </Column>
        </Container>
    );
};

export default DonationTracking;
