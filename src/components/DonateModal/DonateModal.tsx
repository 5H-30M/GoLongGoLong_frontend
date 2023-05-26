import { Container, Box, Button, Charge } from "./Style";
import { Column, Row } from "components/Common/DivStyle";
import { Link } from "react-router-dom";
import { postingDonationType } from "utils/types";
import { useEffect, useState } from "react";
import { PostApi } from "api/donation";
import { useAppSelector } from "hooks/useAppSelector";

interface propsType {
    postId: number;
}

const DonateModal = ({ postId }: propsType) => {
    const user = useAppSelector((state) => state.auth.userData);
    const [isover, setIsover] = useState<boolean>(false);
    const [iszero, setIszero] = useState<boolean>(true);
    const [isclicked, setIsclicked] = useState<boolean>(true);
    const [num, setNum] = useState<number>();
    const handleNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const number = Number(e.target.value);
        if (Number.isNaN(number)) {
            alert("잘못된 입력입니다. 숫자를 입력해주세요.");
        } else {
            //isover
            if (user && number > user.goltokens) {
                setIsover(true);
            } else {
                setIsover(false);
            }
            //iszero
            if (!number) {
                setIszero(true);
            } else {
                setIszero(false);
            }
            setNum(number);
        }
    };
    const donate = async (num: number) => {
        if (user) {
            const donation: postingDonationType = {
                amount: num,
                fromId: user.id,
                toId: postId,
            };

            const result = await PostApi(donation);
            return result;
        }
        return false;
    };
    const handleDonate = async () => {
        setIsclicked(true);
        if (!isover && !iszero) {
            if (window.confirm(`${num}고롱을 기부하시겠습니까?`)) {
                const result = num && (await donate(num));
                if (result) {
                    alert("기부해주셔서 감사합니다.😽");
                    window.location.reload();
                } else {
                    alert("기부에 실패했습니다. 다시 시도해주세요.");
                }
            }
        }
    };
    useEffect(() => {
        setIsclicked(false);
    }, [num]);

    return (
        <Container>
            <Box>
                <text>보유 토큰</text>
                <Row>
                    <text>{user && user.goltokens}</text>
                    <text className="gol">&nbsp;고롱</text>
                </Row>
            </Box>
            <Charge>
                <Link to={"/charge"} style={{ color: "black" }}>
                    충전하기
                </Link>
            </Charge>
            <Column style={{ alignItems: "flex-end", gap: "5px" }}>
                <Box>
                    <text>기부 토큰</text>
                    <Row>
                        <input
                            type="text"
                            value={num}
                            onChange={handleNum}
                            placeholder="액수 입력"
                            style={{
                                width: "100px",
                                textAlign: "right",
                            }}
                        ></input>
                        <text className="gol">&nbsp;고롱</text>
                    </Row>
                </Box>
                {isclicked && isover && (
                    <text style={{ color: "#EB4B38", fontSize: "12px" }}>
                        보유한 토큰보다 많습니다
                    </text>
                )}
                {isclicked && iszero && (
                    <text style={{ color: "#EB4B38", fontSize: "12px" }}>
                        금액을 입력해주세요
                    </text>
                )}
            </Column>
            <Row>
                <Button onClick={handleDonate}>기부하기</Button>
            </Row>
        </Container>
    );
};

export default DonateModal;
