import { Container, Cards } from "./Style";
import DonationCard from "components/DonationCard";
import EpilogueCard from "components/EpilogueCard";
import { Link } from "react-router-dom";
import { useAppSelector } from "hooks/useAppSelector";
import { epilPostType, postType } from "redux/postSlice";

interface propsType {
    kindOfCard: string;
}

const Board = ({ kindOfCard }: propsType): any => {
    //리덕스 store에서 post 정보를 가져온다.
    const donaPosts: postType[] = useAppSelector(
        (state) => state.post.donationPost
    );
    const epilPosts: epilPostType["epilpost"][] = useAppSelector(
        (state) => state.post.epiloguePost
    );
    const isLoading = useAppSelector((state) => state.post.isLoading);

    const renderCard = () => {
        //kindOfCard props가 "donation"일 경우 <DonationsCard> 컴포넌트를, 아닐 경우 <EpilogueCard> 컴포넌트를 렌더한다.
        const result: any[] = [];
        if (kindOfCard == "donation") {
            result.push(
                donaPosts.map((item, index) => {
                    return (
                        <Link
                            to={`/post/${item.post_id}`}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <DonationCard post={item} />
                        </Link>
                    );
                })
            );
        } else {
            result.push(
                epilPosts.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={`/epilogue/post/${item.id}`}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <EpilogueCard epilpost={item} />
                        </Link>
                    );
                })
            );
        }

        return result;
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <Container>
            <Cards>
                {(kindOfCard == "donation" && donaPosts) || //포스팅이 존재하는 경우에만 렌더한다.
                (kindOfCard == "epilogue" && epilPosts)
                    ? renderCard()
                    : ""}
            </Cards>
        </Container>
    );
};

export default Board;
