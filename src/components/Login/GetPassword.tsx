import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";
import { useState } from "react";
import { GreyButton } from "components/Common/ButtonStyle";
import { useNavigate } from "react-router-dom";

const GetPassword = () => {
    const navigate = useNavigate();
    const [pw, setPw] = useState<any>();
    const [checkpw, setCheckpw] = useState<any>();
    const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };
    const handleCheckpw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckpw(e.target.value);
    };
    const handleSubmit = () => {
        if (!pw) {
            return alert("비밀번호를 입력하세요.");
        } else if (!checkpw) {
            return alert("비밀번호 확인을 입력하세요.");
        } else if (pw != checkpw) {
            return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        } else {
            alert("지갑이 생성되었습니다.");
            navigate("/");
        }
    };

    return (
        <Container>
            <Box>
                <text style={{ fontSize: "30px" }}>지갑 비밀번호 생성하기</text>
                <Column style={{ width: "100%", gap: "50px" }}>
                    <Row
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <text>비밀번호 </text>
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
                        <text>비밀번호 확인</text>
                        <input
                            type="password"
                            placeholder="비밀번호 확인을 입력하세요"
                            value={checkpw}
                            onChange={handleCheckpw}
                        ></input>
                    </Row>
                </Column>
                <Button onClick={handleSubmit}>지갑 생성하기</Button>
            </Box>
        </Container>
    );
};

export default GetPassword;

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

    input {
        border: none;
        outline: none;
    }
`;
const Button = styled(GreyButton)`
    width: 50%;
`;
