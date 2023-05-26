import { useEffect, useState } from "react";
import {
    KakaoButton,
    CardsButton,
    Box,
    TitleTag,
    SpaceBetween,
    Thinline,
} from "./Style";
import { Column, Row } from "components/Common/DivStyle";
import { userType_new } from "utils/types";
import { formattedAmount } from "components/Common/CalculateInfo";

interface propsType {
    user: userType_new;
}

const Payment = ({ user }: propsType) => {
    const [chargenum, setChargenum] = useState<number>();
    const IDENT_CODE = process.env.REACT_APP_PORTONE_IDENT_CODE;

    useEffect(() => {
        //jquery와 iamport 라이브러리를 html head에 추가한다.
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);

        //컴포넌트 소멸 직전에 return 부분 수행
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);

    const onClickPayment = (pg: string) => {
        const { IMP } = window;
        IMP.init(IDENT_CODE); // 결제 데이터 정의

        const data = {
            pg: pg,
            pay_method: "card",
            merchant_uid: `mid_${new Date().getTime()}`,
            name: "결제 테스트",
            amount: chargenum,
            buyer_name: user.nickName,
            buyer_email: user.snsEmail,
        };
        IMP.request_pay(data, callback);
    };

    const callback = (res: any) => {
        const {
            success,
            error_msg,
            imp_uid,
            merchant_uid,
            pay_method,
            paid_amount,
            status,
        } = res;
        if (success) {
            alert("결제 성공");
            if (chargenum) {
                setChargenum(0);
                user.goltokens += chargenum;
                //post로 user 정보 업데이트
            }
        } else {
            alert(`결제 실패 : ${error_msg}`);
        }
    };
    const handleChargenum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const number = Number(e.target.value);
        if (Number.isNaN(number)) {
            alert("잘못된 입력입니다. 숫자를 입력해주세요.");
        } else {
            setChargenum(number);
        }
    };

    return (
        <Box>
            <Row style={{ width: "100%", justifyContent: "flex-start" }}>
                <TitleTag>토큰 충전</TitleTag>
            </Row>
            <Column style={{ width: "332px", gap: "67px" }}>
                <SpaceBetween>
                    <text>보유 토큰</text>
                    <Row>
                        <text>{formattedAmount(user.goltokens)}</text>
                        <text style={{ color: "#F1B95C" }}>&nbsp; 고롱</text>
                    </Row>
                </SpaceBetween>
                <SpaceBetween>
                    <text>충전 토큰</text>
                    <Row>
                        <input
                            type="text"
                            value={chargenum}
                            onChange={handleChargenum}
                            placeholder="액수 입력"
                            style={{ width: "100px", textAlign: "right" }}
                        ></input>
                        <text style={{ color: "#F1B95C" }}>&nbsp; 고롱</text>
                    </Row>
                </SpaceBetween>
                <Thinline />
                <Row style={{ width: "100%", justifyContent: "flex-end" }}>
                    {chargenum}&nbsp; 원 결제하기
                </Row>
                <SpaceBetween>
                    <KakaoButton
                        onClick={() => onClickPayment("kakaopay.TC0ONETIME")}
                    >
                        카카오 페이
                    </KakaoButton>
                    <CardsButton
                        onClick={() => onClickPayment("uplus.tlgdacomxpay")}
                    >
                        카드 결제
                    </CardsButton>
                </SpaceBetween>
            </Column>
        </Box>
    );
};

export default Payment;
