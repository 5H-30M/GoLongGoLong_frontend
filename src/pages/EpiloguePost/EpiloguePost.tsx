import Author from "components/Author/Author";
import PostInfo from "components/Post/PostInfo";
import EpiloguePostContents from "components/Post/EpiloguePostContents";
import { Container } from "./Style";
import * as postApi from "api/post";
import * as reviewApi from "api/review";
import { useEffect, useState } from "react";
import { postType, epilPostType } from "utils/types";
import { useParams } from "react-router-dom";
import CommentBox from "components/Comment/CommentBox";
import { Line } from "components/Common/PostStyle";

const EpiloguePost = () => {
    const epilpostId = useParams().id;
    const [epilpost, setEpilpost] = useState<epilPostType>();
    const [post, setPost] = useState<postType>();

    useEffect(() => {
        //uri의 epilpostId 이용해, post 정보를 가져온다.
        const getPost = async () => {
            if (epilpostId) {
                const reviewId: number = parseInt(epilpostId);
                const epilpost: epilPostType = await reviewApi.ViewApi(
                    reviewId
                );
                const postId: number = epilpost.postId;
                setPost(await postApi.ViewApi(postId));

                //setEpilpost 사용시 딜레이 문제가 생기므로 마지막에 사용한다.
                setEpilpost(epilpost);
            }
        };

        getPost();
    }, []);

    return epilpost && post ? (
        <Container>
            <PostInfo post={post}></PostInfo>
            <EpiloguePostContents post={post} epilpost={epilpost} />
            <Line />
            <Author />
            <CommentBox epilpost={epilpost} comments={epilpost.comments} />
        </Container>
    ) : (
        <></>
    );
};

export default EpiloguePost;
