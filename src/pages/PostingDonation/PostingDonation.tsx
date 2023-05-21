import PostContents from "components/Posting/PostContents";
import { Container } from "./Style";
import PostInfo from "components/Posting/PostInfo";
import { useState } from "react";
import { postingPostType } from "utils/types";
import { GreyButton } from "components/Common/ButtonStyle";
import { Row } from "components/Common/DivStyle";
import PostPlan from "components/Posting/PostPlan";
import { WriteApi } from "api/post";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks/useAppSelector";

const PostingDonation = () => {
    const user = useAppSelector((state) => state.auth.userData);
    const navigator = useNavigate();
    const [post, setPost] = useState<postingPostType>({
        content: "",
        images: [],
        period: 0,
        plans: {},
        target_amount: 0,
        title: "",
        uploader_id: user.user_id,
    });
    const handleSubmit = async () => {
        const res = await WriteApi({ post });
        if (res) {
            //post 성공시 게시판으로 이동
            navigator("/");
        }
    };
    const requiredCheck = () => {
        if (post.content.length < 30) {
            alert("내용을 30자 이상 적어주세요.");
            return false;
        }
        if (post.images.length === 0) {
            alert("썸네일 이미지를 업로드해 주세요.");
            return false;
        }
        if (!post.period) {
            alert("마감날짜를 선택해 주세요.");
            return false;
        }
        if (Object.keys(post.plans).length === 0) {
            alert("사용 계획을 최소한 하나 작성해 주세요.");
            return false;
        }
        if (!post.target_amount) {
            alert("목표금액을 입력해 주세요.");
            return false;
        }
        if (!post.title) {
            alert("제목을 입력해 주세요.");
            return false;
        }
        return true;
    };
    const onPost = async () => {
        if (requiredCheck()) {
            if (
                window.confirm(
                    "모금글을 발행하시겠습니까? \n모금이 시작되면 글을 수정할 수 없습니다."
                )
            ) {
                //post api
                handleSubmit();
            }
        }
    };

    return (
        <Container>
            <PostInfo data={post} setData={setPost}></PostInfo>
            <PostContents data={post} setData={setPost} />
            <PostPlan data={post} setData={setPost} />
            <Row style={{ justifyContent: "flex-end", width: "80vw" }}>
                <GreyButton onClick={onPost}>발행하기</GreyButton>
            </Row>
        </Container>
    );
};

export default PostingDonation;
