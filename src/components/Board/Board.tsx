import { Container, Cards } from "./Style";
import DonationCard from "components/DonationCard";
import EpilogueCard from "components/EpilogueCard";
import { Link } from "react-router-dom";
import { useAppSelector } from "hooks/useAppSelector";
import { postType } from "redux/postSlice";

interface propsType {
    kindOfCard: string;
}

const Board = ({ kindOfCard }: propsType): any => {
    //리덕스 store에서 post 정보를 가져온다.
    const posts: postType["post"][] = useAppSelector((state) =>
        kindOfCard == "donation"
            ? state.post.donationPost
            : state.post.epiloguePost
    );
    const isLoading = useAppSelector((state) => state.post.isLoading);

    const renderCard = () => {
        //kindOfCard props가 "donation"일 경우 <DonationsCard> 컴포넌트를, 아닐 경우 <EpilogueCard> 컴포넌트를 렌더한다.
        const result: any[] = [];
        result.push(
            posts.map((item, index) => {
                if (kindOfCard == "donation") {
                    return (
                        <Link
                            to={`/post/${item.post_id}`}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <DonationCard post={item} />
                        </Link>
                    );
                }
                if (kindOfCard == "epilogue") {
                    return (
                        <Link
                            to={`/epilogue/post/${item.post_id}`}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <EpilogueCard post={item} />
                        </Link>
                    );
                }
            })
        );
        return result;
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <Container>
            <Cards>{posts ? renderCard() : ""}</Cards>
        </Container>
    );
};

export default Board;
