import { Column } from "components/Common/DivStyle";
import { Container, TrackingDiv, State, Circle, Bar, Text } from "./Style";
import { useState } from "react";
import ShowTxModal from "ShowTxModal/ShowTxModal";
import { useNavigate } from "react-router-dom";
import { donationType, transitionType } from "utils/types";

interface propsType {
    donation: donationType;
}

const DonationTracking = ({ donation }: propsType) => {
    const [modal, setModal] = useState<boolean>(false);
    const [tx, setTx] = useState<transitionType>();
    const [status, setStatus] = useState<number>(0);
    const navigate = useNavigate();

    return (
        <Container>
            <Column style={{ width: "100%", gap: "15px" }}>
                <text style={{ fontSize: "13px", fontWeight: "bold" }}>
                    내 기부금 트래킹
                </text>
                <TrackingDiv>
                    {donation.status >= 0 ? (
                        <State
                            onClick={() => {
                                setModal(true);
                                setTx(donation.myTransaction);
                                setStatus(0);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <Circle className="checked"></Circle>
                            <Text>내 기부</Text>
                        </State>
                    ) : (
                        <State>
                            <Circle className="unchecked"></Circle>
                            <Text>내 기부</Text>
                        </State>
                    )}
                    {donation.status >= 1 ? (
                        <>
                            <Bar className="checked_bar"></Bar>
                            <State
                                onClick={() => {
                                    setModal(true);
                                    setTx(donation.myTransaction);
                                    setStatus(1);
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <Circle className="checked"></Circle>
                                <Text>모금 완료</Text>
                            </State>
                        </>
                    ) : (
                        <>
                            <Bar className="unchecked_bar"></Bar>
                            <State>
                                <Circle className="unchecked"></Circle>
                                <Text>모금 완료</Text>
                            </State>
                        </>
                    )}

                    {donation.status >= 2 ? (
                        <>
                            <Bar className="checked_bar"></Bar>
                            <State
                                onClick={() => {
                                    setModal(true);
                                    setTx(donation.postTransaction);
                                    setStatus(2);
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <Circle className="checked"></Circle>
                                <Text>기부금 전달</Text>
                            </State>
                        </>
                    ) : (
                        <>
                            <Bar className="unchecked_bar"></Bar>
                            <State>
                                <Circle className="unchecked"></Circle>
                                <Text>기부금 전달</Text>
                            </State>
                        </>
                    )}
                    {donation.status == 3 ? (
                        <>
                            <Bar className="checked_bar"></Bar>
                            <State
                                onClick={() => {
                                    navigate(
                                        `/epilogue/post/${donation.post_id}`
                                    );
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <Circle className="checked"></Circle>
                                <Text>후기 작성</Text>
                            </State>
                        </>
                    ) : (
                        <>
                            <Bar className="unchecked_bar"></Bar>
                            <State>
                                <Circle className="unchecked"></Circle>
                                <Text>후기 작성</Text>
                            </State>
                        </>
                    )}
                </TrackingDiv>
            </Column>

            {modal && tx && (
                <ShowTxModal tx={tx} setModal={setModal} status={status} />
            )}
        </Container>
    );
};

export default DonationTracking;
