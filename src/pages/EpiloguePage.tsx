import EpiloguePost from "components/EpiloguePost";
import Search from "components/Search";
import styled from "styled-components";
import epilogue from "../assets/imgs/banners/epilogue.png";
/* 테스트용 이미지*/
import img1 from "../assets/imgs/test/1.jpg";
import img2 from "../assets/imgs/test/2.jpg";
import img3 from "../assets/imgs/test/3.jpg";
import img4 from "../assets/imgs/test/4.jpg";
import img5 from "../assets/imgs/test/5.jpg";
import img6 from "../assets/imgs/test/6.jpg";
import img7 from "../assets/imgs/test/7.jpg";
import img8 from "../assets/imgs/test/8.jpg";

const Epilogue = () => {
    return (
        <Container>
            <Banner src={epilogue}></Banner>
            <InnerContainer>
                <Search />
                <Board>
                    <EpiloguePost
                        thumbnail={img1}
                        title={"다리를 다친 뚜비를 도와주세요"}
                        author={"카라카라케리"}
                    />
                    <EpiloguePost
                        thumbnail={img2}
                        title={"사랑이에게 사랑을 베풀어 주세요"}
                        author={"코숏최고"}
                    />
                    <EpiloguePost
                        thumbnail={img3}
                        title={"세찌의 수술이 시급합니다"}
                        author={"고양시캣맘"}
                    />
                    <EpiloguePost
                        thumbnail={img4}
                        title={"양말이에게 삶의 희망을 주세요"}
                        author={"냥냥아"}
                    />

                    <EpiloguePost
                        thumbnail={img5}
                        title={"레오가 꽃길을 걷는 그날까지"}
                        author={"캣스맘"}
                    />
                    <EpiloguePost
                        thumbnail={img6}
                        title={"호돌이가 더이상 아프지 않도록 도와주세요"}
                        author={"냥냥걸"}
                    />
                    <EpiloguePost
                        thumbnail={img7}
                        title={"새끼 고양이 한번만 도와주세요"}
                        author={"행복한고양이"}
                    />
                    <EpiloguePost
                        thumbnail={img8}
                        title={"퓨리를 위해 모금 부탁드립니다"}
                        author={"고양시캣맘"}
                    />
                </Board>
            </InnerContainer>
        </Container>
    );
};

export default Epilogue;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
`;
const Banner = styled.img`
    width: 100vw;
`;
const InnerContainer = styled.div`
    width: 1040px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;
const Board = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    flex-wrap: wrap;
`;
