import { Container, InnerContainer } from "./Style";
import Search from "components/Search/Search";
import Slider from "components/Slider/Slider";
import Board from "components/Board/Board";
import SelectBoard from "components/SelectBoard/SelectBoard";
import { postType } from "utils/types";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";

const MainAfterLogin = () => {
    //post 정보를 가져온다.
    const donaPosts: postType[] | undefined = useAppSelector(
        (state) => state.post.donationPost
    );
    //filter된 donapost를 따로 저장한다.
    const [filteredPosts, setFilteredPosts] = useState<
        postType[] | undefined
    >();

    //새로고침시 filteredPosts = donaPosts
    useEffect(() => {
        setFilteredPosts(donaPosts);
    }, [donaPosts]);

    return (
        <Container>
            <Slider />
            <InnerContainer>
                <Search
                    donaPosts={donaPosts}
                    setFilteredPosts={setFilteredPosts}
                />
                <SelectBoard kindOfCard={"donation"} />
                <Board kindOfCard={"donation"} donaPosts={filteredPosts} />
            </InnerContainer>
        </Container>
    );
};

export default MainAfterLogin;
