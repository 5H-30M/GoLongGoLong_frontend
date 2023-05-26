import PostContents from "components/Posting/PostContents";
import { Container } from "./Style";
import { useEffect, useState } from "react";
import { postType, postingEpilType } from "utils/types";
import { GreyButton } from "components/Common/ButtonStyle";
import { Row } from "components/Common/DivStyle";
import { WriteApi } from "api/review";
import { useNavigate, useParams } from "react-router-dom";
import PostInfo from "components/Post/PostInfo";
import UsedList from "components/Posting/UsedList";
import { ViewApi } from "api/post";

const PostingEpilogue = () => {
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

    const navigator = useNavigate();
    const [epilpost, setEpilpost] = useState<postingEpilType>({
        content: "",
        postId: postId ? parseInt(postId) : -1,
        receipt: "",
        usedList: {},
    });
    const handleSubmit = async () => {
        const res = await WriteApi(epilpost);
        if (res) {
            //post 성공시 게시판으로 이동
            navigator("/");
        }
    };
    const requiredCheck = () => {
        if (epilpost.content.length < 30) {
            alert("내용을 30자 이상 적어주세요.");
            return false;
        }
        if (Object.keys(epilpost.usedList).length === 0) {
            alert("사용 내역을 최소한 하나 작성해 주세요.");
            return false;
        }
        if (!epilpost.receipt) {
            alert("영수증 사진을 업로드해 주세요.");
            return false;
        }
        return true;
    };
    const onPost = async () => {
        if (requiredCheck()) {
            if (window.confirm("후기글을 발행하시겠습니까?")) {
                //post api
                handleSubmit();
            }
        }
    };

    return (
        <>
            {post && (
                <Container>
                    <PostInfo post={post}></PostInfo>
                    <PostContents data={epilpost} setData={setEpilpost} />
                    <UsedList data={epilpost} setData={setEpilpost} />
                    <Row style={{ justifyContent: "flex-end", width: "80vw" }}>
                        <GreyButton onClick={onPost}>발행하기</GreyButton>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default PostingEpilogue;
