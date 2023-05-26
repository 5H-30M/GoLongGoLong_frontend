import styled from "styled-components";
import { Container, ThinLine } from "components/Common/PostStyle";
import { GreyButton } from "components/Common/ButtonStyle";
import { postType, epilPostType } from "utils/types";
import { Column } from "components/Common/DivStyle";
import { PlanList } from "./Plans";
import { formattedAmount } from "components/Common/CalculateInfo";

interface propsType {
    post: postType;
    epilpost: epilPostType;
}

const EpiloguePostContents = ({ post, epilpost }: propsType) => {
    const 모금액사용내역 = () => {
        const result: any[] = [];
        result.push(
            <PlanList
                planName="진료비(혈액검사, 엑스레이, 초음파, 흉복수 검사)"
                planNum={653750}
            />
        );
        return result;
    };

    return (
        <Container>
            <div dangerouslySetInnerHTML={{ __html: epilpost.content }} />
            <ThinLine></ThinLine>
            <ConfettiDiv>
                <text className="title">모금 내역</text>
                <RowDiv>
                    <text className="number">{post.raised_people}</text>
                    <text>명이 참여하여</text>
                </RowDiv>
                <RowDiv>
                    <text className="number">
                        {formattedAmount(post.amount)}
                    </text>
                    <text>원이 모였습니다</text>
                </RowDiv>
                <a
                    href={`https://sepolia.etherscan.io/address/0x54142A81f139e00d0bB21f1866cD66edE0b092Bd`}
                >
                    <GreyButton>자세한 모금 내역 바로가기</GreyButton>
                </a>
            </ConfettiDiv>
            <ThinLine></ThinLine>
            <text className="title">모금액 사용내역</text>
            <img src={epilpost.receipt} style={{ objectFit: "contain" }}></img>
            <>{모금액사용내역()}</>
        </Container>
    );
};

export default EpiloguePostContents;

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    line-height: 60px;

    .number {
        font-weight: bold;
        font-size: 50px;
        color: #f1b95c;
    }
`;
const ConfettiDiv = styled(Column)`
    gap: 20px;
`;
