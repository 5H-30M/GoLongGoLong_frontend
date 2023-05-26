import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";
import { useState } from "react";
import { GreyButton } from "components/Common/ButtonStyle";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks/useAppSelector";
import Spinner from "components/Spinner/Spinner";
import { CreateWallet } from "utils/web3/CreateWallet";
import { CreateWalletApi } from "api/member";

const Signup = () => {
    const user = useAppSelector((state) => state.auth.userData);
    const navigate = useNavigate();
    const [pw, setPw] = useState<any>();
    const [checkpw, setCheckpw] = useState<any>();
    const [selectedValue, setSelectedValue] = useState<string>("");
    const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };
    const handleCheckpw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckpw(e.target.value);
    };
    const handleRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value);
    };
    const handleSubmit = async () => {
        if (!pw) {
            return alert("비밀번호를 입력하세요.");
        } else if (!checkpw) {
            return alert("비밀번호 확인을 입력하세요.");
        } else if (pw != checkpw) {
            return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        } else {
            try {
                if (user) {
                    const userId = user.id;
                    const wallet = await CreateWallet();
                    await CreateWalletApi({ userId, wallet });

                    //지역 user 정보에 넣기 region(userId)
                }
                alert("회원가입이 완료되었습니다.");
                navigate("/");
            } catch (err) {
                console.log(err);
                alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
                navigate("/login");
            }
        }
    };

    if (user && user.walletUrl) {
        //지갑 주소가 존재하면 이미 회원 가입된 상태이므로 메인 화면으로 이동
        navigate("/");
        return (
            <div style={{ marginTop: "80px" }}>
                <Spinner />
            </div>
        );
    } else {
        //회원 가입 되지 않은 상태이므로 지갑 생성 & 지역 선택
        return (
            <Container>
                <Box>
                    <text
                        style={{
                            width: "100%",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        ❗다음 정보들을 입력해야 회원가입이 완료됩니다.
                    </text>
                    <Column style={{ width: "100%", gap: "50px" }}>
                        <Row
                            style={{
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <text>암호화폐 지갑 비밀번호 </text>
                            <input
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                value={pw}
                                onChange={handlePw}
                            ></input>
                        </Row>
                        <Row
                            style={{
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <text>암호화폐 지갑 비밀번호 확인</text>
                            <input
                                type="password"
                                placeholder="비밀번호 확인을 입력하세요"
                                value={checkpw}
                                onChange={handleCheckpw}
                            ></input>
                        </Row>
                        <Row
                            style={{
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <text>사는 지역</text>
                            <input
                                type="text"
                                placeholder="지역을 입력하세요(ex 서울시 서초구)"
                                value={selectedValue}
                                onChange={handleRegion}
                            ></input>
                            {/* <select
                                value={selectedValue}
                                onChange={handleRegion}
                            >
                                <option value="컴퓨터공학과">
                                    컴퓨터공학과
                                </option>
                                <option value="영어영문과">영어영문과</option>
                                <option value="경영학과">경영학과</option>
                                <option value="사회체육과">사회체육과</option>
                            </select> */}
                        </Row>
                    </Column>
                    <Button onClick={handleSubmit}>회원가입 완료하기</Button>
                </Box>
            </Container>
        );
    }
};

export default Signup;

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
const Box = styled(Column)`
    width: 600px;
    height: 500px;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    margin-top: 60px;

    border: 0.5px solid #b2b2b2;
    border-radius: 5px;
    padding: 40px;

    font-size: 20px;

    input,
    select {
        border: none;
        outline: none;
        font-size: 12px;
        width: 200px;
    }
    text {
        font-size: 15px;
    }
`;
const Button = styled(GreyButton)`
    width: 50%;
`;
