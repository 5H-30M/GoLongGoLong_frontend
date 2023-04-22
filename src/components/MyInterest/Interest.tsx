import { StyledImg, GreyDiv } from "components/Common/MyPageStyle";
import { Column } from "components/Common/DivStyle";
import { postType } from "utils/types";
import { useState, useEffect } from "react";
import { ViewApi } from "api/post";
import { Link } from "react-router-dom";

interface propsType {
    postId: number;
}

const Interest = ({ postId }: propsType) => {
    const [post, setPost] = useState<postType>();

    //postId로 post 정보를 가져온다.
    useEffect(() => {
        const getPost = async () => {
            setPost(await ViewApi(postId));
        };

        getPost();
    }, []);

    return (
        <Link
            to={`/post/${postId}`}
            style={{ color: "black", textDecoration: "none" }}
        >
            <GreyDiv>
                <StyledImg src={post?.images[0]}></StyledImg>
                <Column
                    style={{
                        height: "134px",
                        justifyContent: "space-between",
                    }}
                >
                    <Column style={{ gap: "10px" }}>
                        <text className="postTitle">{post?.title}</text>
                        <text className="author">{post?.uploader_id}</text>
                    </Column>
                </Column>
            </GreyDiv>
        </Link>
    );
};

export default Interest;
