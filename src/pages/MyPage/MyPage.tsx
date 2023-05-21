import { Container } from "components/Common/MyPageStyle";
import { Row, Column } from "components/Common/DivStyle";
import { userType } from "utils/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Interest from "components/MyInterest/Interest";
import styled from "styled-components";
import pawprint from "../../assets/imgs/pawprint.png";
import { ThinLine } from "components/Common/PostStyle";
import { GreyButton } from "components/Common/ButtonStyle";
import { Link } from "react-router-dom";
import { testUser } from "redux/authSlice";

const MyPage = () => {
    const userId = useParams().id;
    const [user, setUser] = useState<userType>(testUser);

    useEffect(() => {
        //userId를 이용해 user 정보를 가져온다.
        // const getUser = async () => {
        //     setUser(await ViewApi(id));
        // };
        // getUser();
    }, []);

    return (
        <Container>
            <text className="title">마이 페이지</text>
            {user && (
                <Row
                    style={{
                        justifyContent: "center",
                        gap: "40px",
                    }}
                >
                    <Column
                        style={{
                            gap: "30px",
                        }}
                    >
                        <text>내 정보</text>
                        <InfoBox>
                            <Row
                                style={{
                                    justifyContent: "space-between",
                                    gap: "130px",
                                }}
                            >
                                <img
                                    src={user.profile_img_url}
                                    style={{
                                        width: "151px",
                                        height: "151px",
                                        borderRadius: "3px",
                                    }}
                                ></img>
                                <Column
                                    style={{
                                        justifyContent: "flex-end",
                                        alignItems: "flex-end",
                                        gap: "15px",
                                    }}
                                >
                                    <img
                                        src={pawprint}
                                        style={{
                                            width: "75px",
                                            transform: " rotate(13.43deg)",
                                        }}
                                    ></img>
                                    <Row>
                                        <text style={{ fontSize: "21px" }}>
                                            {user.token_amount}
                                        </text>
                                        <text
                                            style={{
                                                fontSize: "21px",
                                                fontWeight: "bold",
                                                color: "#F1B95C",
                                            }}
                                        >
                                            &nbsp; 고롱
                                        </text>
                                    </Row>
                                    <Link
                                        to={"/charge"}
                                        style={{ color: "black" }}
                                    >
                                        <text style={{ fontSize: "10px" }}>
                                            충전하기
                                        </text>
                                    </Link>
                                </Column>
                            </Row>
                            <ThinLine style={{ margin: "30px 0" }} />
                            <Column style={{ gap: "30px" }}>
                                <Row
                                    style={{
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <text>닉네임</text>
                                    <Column
                                        style={{
                                            alignItems: "flex-end",
                                            gap: "10px",
                                        }}
                                    >
                                        <text className="value">
                                            {user.nickname}
                                        </text>
                                        <UpdateNickname>
                                            수정하기
                                        </UpdateNickname>
                                    </Column>
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <text>이메일</text>
                                    <text className="value">
                                        {user.sns_email}
                                    </text>
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <text>가입 날짜</text>
                                    <text className="value">
                                        {user.created_at}
                                    </text>
                                </Row>
                            </Column>
                        </InfoBox>
                    </Column>
                    <Column
                        style={{
                            gap: "30px",
                        }}
                    >
                        <text>내 모금글</text>
                        <Column
                            style={{
                                gap: "30px",
                            }}
                        >
                            {user.fundraisings.map((item, index) => (
                                <Interest
                                    key={index}
                                    postId={item.post_id ? item.post_id : -1}
                                ></Interest>
                            ))}
                        </Column>
                    </Column>
                </Row>
            )}
        </Container>
    );
};

export default MyPage;

const InfoBox = styled(Column)`
    border: 0.5px solid #b2b2b2;
    border-radius: 5px;
    padding: 25px 37px;

    img {
        object-fit: cover;
    }
    .value {
        color: #888888;
    }
`;
const UpdateNickname = styled(GreyButton)`
    width: 73px;
    height: 23px;
`;
