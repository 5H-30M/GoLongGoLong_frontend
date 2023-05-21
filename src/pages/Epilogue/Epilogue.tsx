import Board from "components/Board/Board";
import Search from "components/Search/Search";
import { Banner, InnerContainer, Container } from "./Style";
import SelectBoard from "components/SelectBoard/SelectBoard";
import { epilPostType, postType } from "utils/types";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";
import { ViewApi } from "api/post";

const Epilogue = () => {
    //epilogue post 정보를 가져온다.
    const epilPosts: epilPostType[] | undefined = useAppSelector(
        (state) => state.post.epiloguePost
    );
    //filter된 epilpost를 따로 저장한다.
    const [filteredPosts, setFilteredPosts] = useState<
        epilPostType[] | undefined
    >();

    //새로고침시 filteredPosts = epilPosts
    useEffect(() => {
        setFilteredPosts(epilPosts);
    }, [epilPosts]);

    return (
        <Container>
            <Banner />
            <InnerContainer>
                <Search
                    epilPosts={epilPosts}
                    setFilteredPosts={setFilteredPosts}
                />
                <SelectBoard kindOfCard={"epilogue"} />
                <Board kindOfCard={"epilogue"} epilPosts={filteredPosts} />
            </InnerContainer>
        </Container>
    );
};

export default Epilogue;
