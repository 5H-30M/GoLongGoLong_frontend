import { Column } from "components/Common/DivStyle";
import { Container, TrackingDiv, State, Circle, Bar, Text } from "./Style";
import { useState } from "react";
import ShowTxModal from "ShowTxModal/ShowTxModal";
import { useNavigate } from "react-router-dom";

interface propsType {
    postId: number;
    status: number;
    txList: string[];
}

const DonationTracking = ({ postId, status, txList }: propsType) => {
    const [modal, setModal] = useState<boolean>(false);
    const [txId, setTxId] = useState<string | undefined>();
    const navigate = useNavigate();

    return (
        <Container>
            <Column style={{ width: "100%", gap: "15px" }}>
                <text style={{ fontSize: "13px", fontWeight: "bold" }}>
                    내 기부금 트래킹
                </text>
                <TrackingDiv>
                    {status >= 0 ? (
                        <State
                            onClick={() => {
                                setModal(true);
                                setTxId(txList[0]);
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
                    {status >= 1 ? (
                        <>
                            <Bar className="checked_bar"></Bar>
                            <State
                                onClick={() => {
                                    setModal(true);
                                    setTxId(txList[1]);
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

                    {status >= 2 ? (
                        <>
                            <Bar className="checked_bar"></Bar>
                            <State
                                onClick={() => {
                                    setModal(true);
                                    setTxId(txList[2]);
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
                    {status == 4 ? (
                        <>
                            <Bar className="checked_bar"></Bar>
                            <State
                                onClick={() => {
                                    navigate(`/epilogue/post/3`);
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

            {modal && txId && <ShowTxModal txId={txId} setModal={setModal} />}
        </Container>
    );
};

export default DonationTracking;
