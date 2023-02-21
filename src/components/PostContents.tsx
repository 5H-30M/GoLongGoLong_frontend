import styled from "styled-components";
import img1 from "../assets/imgs/test/1.jpg";

const PostContents = () => {
    return (
        <Container>
            <Title>도움이 필요합니다</Title>
            <Text>천천히 조금씩 조금씩~</Text>
            <Text>
                반이는 제 둘째아들이 되어가고 있습니다. 발치 후에도 입퇴원을
                반복해 애태웠는데 이제는 사료도 잘먹고 캔에 섞인 약도 퉤! 하고
                뱉어내는 신기술도 터득해서 약먹일때마다 저와 잔머리 싸움을 할
                정도로 적응완료했습니다^^;; 아직 약을 먹어야 하지만 밥 잘 먹고
                잘 지내고 있습니다. 많은 분들의 관심과 사랑으로 반이가 제게 온
                만큼 잘 돌보고 오래 오래 건강하게 행복할 수 있도록 잘
                보살피겠습니다. 다시 한번 진심으로 감사드립니다.
            </Text>
            <Img src={img1}></Img>
            <Line></Line>
        </Container>
    );
};

export default PostContents;

const Container = styled.div`
    width: 750px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.text`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 30px;
`;
const Text = styled.text`
    font-size: 16px;
    padding-bottom: 30px;
    line-height: 188%;
    color: #444444;
`;
const Img = styled.img`
    width: 100%;
    height: 390px;
    object-fit: cover;
`;
const Line = styled.div`
    width: 100%;
    height: 6px;
    background: #444444;
    margin-top: 100px;
`;
