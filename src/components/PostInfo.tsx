import styled from "styled-components";
import thumbnail from "../assets/imgs/test/1.jpg";

const PostInfo = () => {
    return (
        <Container>
            <Text fontSize="30">까불이에게 삶의 희망을 주세요</Text>
            <Box>
                <Img src={thumbnail}></Img>
                <Right>
                    <ColumnBox>
                        <Text fontSize="14">모인금액</Text>
                        <RowBox>
                            <Text fontSize="39">1,220,000</Text>
                            <Text fontSize="14">원</Text>
                        </RowBox>
                    </ColumnBox>
                    <ColumnBox>
                        <Text fontSize="14">남은시간</Text>
                        <RowBox>
                            <Text fontSize="39">1</Text>
                            <Text fontSize="14">일</Text>
                        </RowBox>
                    </ColumnBox>
                    <ColumnBox>
                        <Text fontSize="14">후원자</Text>
                        <RowBox>
                            <Text fontSize="39">189</Text>
                            <Text fontSize="14">명</Text>
                        </RowBox>
                    </ColumnBox>
                    <Line></Line>
                    <RowBox>
                        <Text fontSize="12">목표금액</Text>
                        <Text fontSize="12">1,000,000원</Text>
                    </RowBox>
                    <RowBox>
                        <Text fontSize="12">모금기간</Text>
                        <Text fontSize="12">2022.06.29 ~ 2022.07.27</Text>
                    </RowBox>
                    <DonateButton>기부하기</DonateButton>
                </Right>
            </Box>
        </Container>
    );
};

export default PostInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    gap: 50px;
`;
const Text = styled.text`
    font-size: ${(props) => props.fontSize}px;
`;
const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
`;
const RowBox = styled(Box)`
    align-items: flex-end;
    gap: 5px;
`;
const Img = styled.img`
    width: 573px;
    height: 429px;
    border-radius: 10px;
    object-fit: cover;
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;
const ColumnBox = styled(Right)`
    gap: 5px;
`;
const Line = styled.div`
    width: 340px;
    height: 1px;
    background: #f4f4f4;
`;
const DonateButton = styled.button`
    width: 353px;
    height: 40px;
    background: #f1f3f5;
    border: none;
    border-radius: 5px;
`;
