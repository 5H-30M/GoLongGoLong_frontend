import PostContents from "components/Posting/PostContents";
import { Container } from "./Style";
import { useState } from "react";
import { epilPostType, postType } from "redux/postSlice";
import { GreyButton } from "components/Common/ButtonStyle";
import { Row } from "components/Common/DivStyle";
import { WriteApi } from "api/review";
import { useNavigate } from "react-router-dom";
import PostInfo from "components/Post/PostInfo";
import UsedList from "components/Posting/UsedList";

interface propsType {
    post: postType;
}

const PostingEpilogue = () => {
    //이후 삭제하고, 실제로는 props로 post 넘겨받기. 지금은 컴포넌트 확인을 위해서 임시방편으로 post 변수를 만들어 놓았다.
    const post: postType = {
        amount: 500000,
        content: "",
        images: [
            "https://pbs.twimg.com/profile_images/1450121710674407426/SwOINBDw_400x400.jpg",
        ],
        period: 10,
        plans: {},
        target_amount: 500000,
        title: "",
        post_id: 20,
        uploader_id: -1,
        raised_people: 100,
        created_at: "2023-04-10",
        status: 4,
    };
    const navigator = useNavigate();
    const [epilpost, setEpilpost] = useState<epilPostType>({
        content: "",
        postId: post.post_id ? post.post_id : -1,
        receipt: "",
        usedList: {},
    });
    const handleSubmit = async () => {
        const res = await WriteApi({ epilpost });
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
        <Container>
            <PostInfo post={post}></PostInfo>
            <PostContents data={epilpost} setData={setEpilpost} />
            <UsedList data={epilpost} setData={setEpilpost} />
            <Row style={{ justifyContent: "flex-end", width: "80vw" }}>
                <GreyButton onClick={onPost}>발행하기</GreyButton>
            </Row>
        </Container>
    );
};

export default PostingEpilogue;
