import { StyledImg, GreyDiv } from "components/Common/MyPageStyle";
import { Column } from "components/Common/DivStyle";
import { postType } from "utils/types";
import { useState, useEffect } from "react";
import * as postapi from "api/post";
import * as memapi from "api/member";
import { Link } from "react-router-dom";
import CardInfo from "components/CardInfo/CardInfo";

interface propsType {
    postId: number;
}

const Interest = ({ postId }: propsType) => {
    const [post, setPost] = useState<postType>();
    const [user, setUser] = useState<string>();

    //postId로 post 정보를 가져온다.
    useEffect(() => {
        const getPost = async () => {
            setPost(await postapi.ViewApi(postId));
        };

        getPost();
    }, []);
    //user 정보를 가져온다.
    useEffect(() => {
        const getUser = async (userId: number) => {
            let author = await memapi.ViewApi(userId);
            setUser(author.nickname);
        };
        if (post) {
            getUser(post.uploader_id);
        }
    }, [post]);

    return post ? (
        <GreyDiv>
            <Link
                to={`/post/${postId}`}
                style={{ color: "black", textDecoration: "none" }}
            >
                <StyledImg src={post.images[0]}></StyledImg>
            </Link>
            <Column
                style={{
                    height: "134px",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Column style={{ gap: "10px" }}>
                    <text className="postTitle">{post.title}</text>
                    <text className="author">{user ? user : ""}</text>
                </Column>
                <CardInfo post={post}></CardInfo>
            </Column>
        </GreyDiv>
    ) : (
        <></>
    );
};

export default Interest;
