import {
    Wrapper,
    Container,
    GreyDiv,
    ColumnDiv,
    RowDiv,
} from "components/Common/MypageStyle";
import Search from "components/Common/Search";
import img1 from "../assets/imgs/test/1.jpg";
import DonationTracking from "components/MyDonationPage/DonationTracking";
import styled from "styled-components";

const MyDonationPage = () => {
    return (
        <Wrapper>
            <Container>
                <text className="title">기부 현황</text>
                <RowDiv>
                    <RowDiv>
                        <text className="number">1</text>
                        <text className="notice">
                            건의 기부 내역이 있습니다.
                        </text>
                    </RowDiv>
                    <Search />
                </RowDiv>

                <GreyDiv>
                    <ColumnDivForWrapping>
                        <RowDivForWrapping>
                            <img src={img1}></img>
                            <ColumnDiv>
                                <text className="postTitle">
                                    다리를 다친 뚜비를 도와주세요
                                </text>
                                <text className="author">카라카라캐리</text>
                                <li>후원일 2022. 11. 21</li>
                                <li>32,000원 후원</li>
                            </ColumnDiv>
                        </RowDivForWrapping>
                        <DonationTracking />
                    </ColumnDivForWrapping>
                </GreyDiv>
                <GreyDiv>
                    <ColumnDivForWrapping>
                        <RowDivForWrapping>
                            <img src={img1}></img>
                            <ColumnDiv>
                                <text className="postTitle">
                                    다리를 다친 뚜비를 도와주세요
                                </text>
                                <text className="author">카라카라캐리</text>
                                <li>후원일 2022. 11. 21</li>
                                <li>32,000원 후원</li>
                            </ColumnDiv>
                        </RowDivForWrapping>
                        <DonationTracking />
                    </ColumnDivForWrapping>
                </GreyDiv>
            </Container>
        </Wrapper>
    );
};

export default MyDonationPage;

const ColumnDivForWrapping = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const RowDivForWrapping = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
`;
