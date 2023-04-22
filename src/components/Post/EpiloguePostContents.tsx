import styled from "styled-components";
import { Container, ThinLine } from "components/Common/PostStyle";
import { GreyButton } from "components/Common/ButtonStyle";
import { epilPostType, postType } from "redux/postSlice";

interface propsType {
    post: postType;
    epilpost: epilPostType;
}

const EpiloguePostContents = ({ post, epilpost }: propsType) => {
    const 모금액사용내역 = () => {
        const result: any[] = [];
        result.push(
            <>
                <li>혈액 검사(종합 17항목)</li>
                <li>입원</li>
                <li>
                    진찰 및 기타 검사(X-ray, 복부 초음파, 내시경,
                    설사검사패키지)
                </li>
            </>
        );
        return result;
    };

    return (
        <Container>
            <div dangerouslySetInnerHTML={{ __html: epilpost.content }} />
            <ThinLine></ThinLine>
            <div id="confettiDiv">
                <text className="title">모금 내역</text>
                <RowDiv>
                    <text className="number">{post.raised_people}</text>
                    <text>명이 참여하여</text>
                </RowDiv>
                <RowDiv>
                    <text className="number">{post.amount}</text>
                    <text>원이 모였습니다</text>
                </RowDiv>
                <GreyButton>자세한 모금 내역 바로가기</GreyButton>
            </div>
            <ThinLine></ThinLine>
            <text className="title">모금액 사용내역</text>
            <img src={epilpost.receipt}></img>
            {모금액사용내역()}
        </Container>
    );
};

export default EpiloguePostContents;

const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    .number {
        font-weight: bold;
        font-size: 50px;
        color: #f1b95c;
    }
`;
