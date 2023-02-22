import img1 from "../assets/imgs/test/1.jpg";
import { Container, Line } from "./styles/Post";

const PostContents = () => {
    return (
        <Container>
            <text className="title">도움이 필요합니다</text>
            <text>천천히 조금씩 조금씩~</text>
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
            <Line></Line>
        </Container>
    );
};

export default PostContents;
