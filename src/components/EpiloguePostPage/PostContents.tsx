import styled from "styled-components";
import { Container, ThinLine, Line } from "components/Common/PostStyle";
import img1 from "../../assets/imgs/test/5.jpg";
import receipt from "../../assets/imgs/test/receipt.png";
import { GreyButton } from "components/Common/ButtonStyle";

const PostContents = () => {
    return (
        <Container>
            <text className="title">모금 후기</text>
            <text>
                반이는 제 둘째아들이 되어가고 있습니다. 발치 후에도 입퇴원을
                반복해 애태웠는데 이제는 사료도 잘먹고 캔에 섞인 약도 퉤! 하고
                뱉어내는 신기술도 터득해서 약먹일때마다 저와 잔머리 싸움을 할
                정도로 적응완료했습니다^^;; 아직 약을 먹어야 하지만 밥 잘 먹고
                잘 지내고 있습니다. 많은 분들의 관심과 사랑으로 반이가 제게 온
                만큼 잘 돌보고 오래 오래 건강하게 행복할 수 있도록 잘
                보살피겠습니다. 다시 한번 진심으로 감사드립니다.
            </text>
            <img src={img1}></img>
            <ThinLine></ThinLine>
            <div id="confettiDiv">
                <text className="title">모금 내역</text>
                <RowDiv>
                    <text className="number">128</text>
                    <text>명이 참여하여</text>
                </RowDiv>
                <RowDiv>
                    <text className="number">1,000,000</text>
                    <text>원이 모였습니다</text>
                </RowDiv>
                <GreyButton>자세한 모금 내역 바로가기</GreyButton>
            </div>
            <ThinLine></ThinLine>
            <text className="title">모금액 사용내역</text>
            <img src={receipt}></img>
            <text>
                반이는 제 둘째아들이 되어가고 있습니다. 발치 후에도 입퇴원을
                반복해 애태웠는데 이제는 사료도 잘먹고 캔에 섞인 약도 퉤! 하고
                뱉어내는 신기술도 터득해서 약먹일때마다 저와 잔머리 싸움을 할
                정도로 적응완료했습니다^^;; 아직 약을 먹어야 하지만 밥 잘 먹고
                잘 지내고 있습니다. 많은 분들의 관심과 사랑으로 반이가 제게 온
                만큼 잘 돌보고 오래 오래 건강하게 행복할 수 있도록 잘
                보살피겠습니다. 다시 한번 진심으로 감사드립니다.
            </text>
            <Line></Line>
        </Container>
    );
};

export default PostContents;

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
