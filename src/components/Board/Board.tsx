import { Container, Cards } from "./Style";
import DonationCard from "components/DonationCard";
import EpilogueCard from "components/EpilogueCard";
import { Link } from "react-router-dom";
/* 테스트용 이미지*/
import img1 from "../../assets/imgs/test/1.jpg";

interface propsType {
    kindOfCard: string;
}

const Board = ({ kindOfCard }: propsType): any => {
    const renderCard = () => {
        //kindOfCard props가 "donation"일 경우 <DonationsCard> 컴포넌트를, 아닐 경우 <EpilogueCard> 컴포넌트를 렌더한다.
        const result: any[] = [];

        if (kindOfCard == "donation") {
            result.push(
                <Link
                    to="/post"
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <DonationCard
                        thumbnail={img1}
                        title={"다리를 다친 뚜비를 도와주세요"}
                        author={"카라카라케리"}
                    />
                </Link>
            );
        }
        if (kindOfCard == "epilogue") {
            result.push(
                <Link
                    to="/epilogue/post"
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <EpilogueCard
                        thumbnail={img1}
                        title={"다리를 다친 뚜비를 도와주세요"}
                        author={"카라카라케리"}
                    />
                </Link>
            );
        }

        return result;
    };

    return (
        <Container>
            <Cards>{renderCard()}</Cards>
        </Container>
    );
};

export default Board;
