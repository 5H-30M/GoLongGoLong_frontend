import { Container } from "./Style";
import PostInfo from "components/Post/PostInfo";
import { postType } from "utils/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ViewApi } from "api/post";
import UploadReceipt from "components/ReceiptOCR/UploadReceipt";

const ReceiptOCR = () => {
    const postId = useParams().id;
    const [post, setPost] = useState<postType>();
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
            {post && (
                <Container>
                    <PostInfo post={post} />
                    <UploadReceipt />
                </Container>
            )}
        </>
    );
};

export default ReceiptOCR;
