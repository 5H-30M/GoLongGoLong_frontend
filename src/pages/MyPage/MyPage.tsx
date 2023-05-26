import { Container } from "components/Common/MyPageStyle";
import { Row, Column } from "components/Common/DivStyle";
import { useEffect, useState } from "react";
import Interest from "components/MyInterest/Interest";
import styled from "styled-components";
import pawprint from "../../assets/imgs/pawprint.png";
import { ThinLine } from "components/Common/PostStyle";
import { GreyButton } from "components/Common/ButtonStyle";
import { Link } from "react-router-dom";
import { useAppSelector } from "hooks/useAppSelector";
import { formattedAmount } from "components/Common/CalculateInfo";
import { UpdateApi } from "api/member";

const MyPage = () => {
    const user = useAppSelector((state) => state.auth.userData);
    const [imgUrl, setImgUrl] = useState<string>();
    const [nick, setNick] = useState<string>();
    const [region, setRegion] = useState<string>();

    useEffect(() => {
        if (user) {
            setImgUrl(user.profileImgUrl);
            setNick(user.nickName);
            setRegion(user.region);
        }
    }, [user]);

    const handleNick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNick(e.target.value);
    };
    const handleRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(e.target.value);
    };

    const [imgUdt, setImgUdt] = useState<boolean>(false);
    const [nickUdt, setNickUdt] = useState<boolean>(false);
    const [regionUdt, setRegionUdt] = useState<boolean>(false);
    const handleImgUdt = async () => {
        setImgUdt(!imgUdt);

        if (imgUdt && user) {
            const userId = user.id;
            const updated = {
                profileImgUrl: imgUrl,
            };
            if (window.confirm("프로필 이미지를 수정하시겠습니까?")) {
                await UpdateApi({ userId, updated });
                window.location.reload();
            }
        }
    };
    const handleNickUdt = async () => {
        setNickUdt(!nickUdt);

        if (nickUdt && user) {
            const userId = user.id;
            const updated = {
                nickName: nick,
            };
            if (window.confirm("닉네임을 수정하시겠습니까?")) {
                await UpdateApi({ userId, updated });
                window.location.reload();
            }
        }
    };
    const handleRegionUdt = async () => {
        setRegionUdt(!regionUdt);

        if (regionUdt && user) {
            const userId = user.id;
            const updated = {
                region: region,
            };
            if (window.confirm("지역을 수정하시겠습니까?")) {
                await UpdateApi({ userId, updated });
                window.location.reload();
            }
        }
    };

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
                                <Column
                                    style={{
                                        alignItems: "flex-end",
                                        gap: "10px",
                                    }}
                                >
                                    <img
                                        src={user.profileImgUrl}
                                        style={{
                                            width: "151px",
                                            height: "151px",
                                            borderRadius: "3px",
                                        }}
                                    ></img>
                                    <UpdateButton onClick={handleImgUdt}>
                                        {imgUdt ? "수정 완료" : "수정하기"}
                                    </UpdateButton>
                                </Column>

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
                                            {formattedAmount(user.goltokens)}
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
                                        {nickUdt ? (
                                            <input
                                                type="text"
                                                value={nick}
                                                onChange={handleNick}
                                                style={{ textAlign: "right" }}
                                            ></input>
                                        ) : (
                                            <text className="value">
                                                {user.nickName}
                                            </text>
                                        )}
                                        <UpdateButton onClick={handleNickUdt}>
                                            {nickUdt ? "수정 완료" : "수정하기"}
                                        </UpdateButton>
                                    </Column>
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <text>지역</text>
                                    <Column
                                        style={{
                                            alignItems: "flex-end",
                                            gap: "10px",
                                        }}
                                    >
                                        {regionUdt ? (
                                            <input
                                                type="text"
                                                value={region}
                                                onChange={handleRegion}
                                                style={{ textAlign: "right" }}
                                            ></input>
                                        ) : (
                                            <text className="value">
                                                {user.region}
                                            </text>
                                        )}

                                        <UpdateButton onClick={handleRegionUdt}>
                                            {regionUdt
                                                ? "수정 완료"
                                                : "수정하기"}
                                        </UpdateButton>
                                    </Column>
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <text>이메일</text>
                                    <text className="value">
                                        {user.snsEmail}
                                    </text>
                                </Row>
                                <Row
                                    style={{
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <text>가입 날짜</text>
                                    <text className="value">
                                        {user.createdAt}
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
                            {user.postsByMember.map((item, index) => (
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
    input {
        border: none;
        outline: none;
    }
`;
const UpdateButton = styled(GreyButton)`
    width: 73px;
    height: 23px;
`;
