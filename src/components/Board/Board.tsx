import { Container, Cards } from "./Style";
import DonationCard from "components/DonationCard";
import EpilogueCard from "components/EpilogueCard";
import { Link } from "react-router-dom";
import { useAppSelector } from "hooks/useAppSelector";
import { postType, epilPostType } from "utils/types";
import { useState, useEffect } from "react";
import { Filtering } from "components/FilterMenu/Filtering";
import NoPostings from "components/FilterMenu/NoPostings";
import Spinner from "components/Spinner/Spinner";

interface propsType {
    kindOfCard: string;
    donaPosts?: postType[];
    epilPosts?: epilPostType[];
}

const Board = ({ kindOfCard, donaPosts, epilPosts }: propsType): any => {
    //isLoading, filteredBy, user 정보를 가져온다.
    const isLoading = useAppSelector((state) => state.post.isLoading);
    const filteredBy = useAppSelector((state) => state.post.filteredBy);
    const user = useAppSelector((state) => state.auth.userData);
    const region = user.region;

    const renderCard = () => {
        //kindOfCard props가 "donation"일 경우 <DonationsCard> 컴포넌트를, 아닐 경우 <EpilogueCard> 컴포넌트를 렌더한다.
        const result: any[] = [];
        if (kindOfCard == "donation") {
            if (donaPosts && donaPosts.length > 0) {
                //FilteredBy 값에 맞게 정렬한다.
                donaPosts = Filtering({
                    donaPosts,
                    filteredBy,
                    region,
                });

                if (donaPosts.length == 0 && filteredBy == "region") {
                    result.push(
                        <NoPostings notice={"❗우리 지역의 모금글이 없어요"} />
                    );
                }

                result.push(
                    donaPosts.map((item, index) => {
                        return (
                            <Link
                                to={`/post/${item.post_id}`}
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                }}
                            >
                                <DonationCard post={item} />
                            </Link>
                        );
                    })
                );
            } else {
                result.push(<NoPostings notice={"❗아직 글이 없어요"} />);
            }
        }
        if (kindOfCard == "epilogue") {
            if (epilPosts && epilPosts.length > 0) {
                result.push(
                    epilPosts.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                to={`/epilogue/post/${item.id}`}
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                }}
                            >
                                <EpilogueCard epilpost={item} />
                            </Link>
                        );
                    })
                );
            } else {
                result.push(<NoPostings notice={"❗아직 글이 없어요"} />);
            }
        }

        return result;
    };

    if (isLoading) {
        return <Spinner />;
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
