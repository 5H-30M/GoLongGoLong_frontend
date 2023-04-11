import Author from "components/Author/Author";
import DonationPostContents from "components/Post/DonationPostContents";
import PostInfo from "components/Post/PostInfo";
import { Container } from "./Style";
import { ViewApi } from "api/post";
import { useEffect, useState } from "react";
import { postType } from "redux/postSlice";
import { useParams } from "react-router-dom";

const DonationPost = () => {
    const postId = useParams().id;
    const [post, setPost] = useState<postType["post"]>();

    useEffect(() => {
        //uri의 postId를 이용해, post 정보를 가져온다.
        const getPost = async () => {
            const id: number = postId ? parseInt(postId) : -1;
            setPost(await ViewApi(id));
        };

        getPost();
    }, []);

    return (
        <>
            {post ? (
                <Container>
                    <PostInfo post={post}></PostInfo>
                    <DonationPostContents post={post} />
                    <Author />
                </Container>
            ) : (
                ""
            )}
        </>
    );
};

export default DonationPost;
