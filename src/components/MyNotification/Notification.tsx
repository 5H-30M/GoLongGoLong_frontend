import { GreyDiv } from "components/Common/MyPageStyle";
import { InterestTag, DonatedTag, CloseIcon } from "./Style";
import { Row } from "components/Common/DivStyle";
import { notificationsType, postType } from "utils/types";
import { useState, useEffect } from "react";
import { ViewApi } from "api/post";

interface propsType {
    info: notificationsType;
    onDelete: () => void;
}

const Notification = ({ info, onDelete }: propsType) => {
    const [post, setPost] = useState<postType>();

    //postId로 post 정보를 가져온다.
    useEffect(() => {
        const getPost = async () => {
            setPost(await ViewApi(info.post_id));
        };

        getPost();
    }, []);

    const noticeByStatus = [
        " 글의 모금이 종료되었습니다.",
        " 글의 기부금이 구조자님께 전달되었습니다. 💨",
        " 글의 구조자님이 기부금을 사용하였습니다. 🐾",
        " 글의 후기글이 업로드 되었습니다. 👏",
    ];
    return (
        <GreyDiv>
            <Row style={{ width: "100%", justifyContent: "space-between" }}>
                <Row>
                    {info.tag ? (
                        <DonatedTag>기부완료</DonatedTag>
                    ) : (
                        <InterestTag>관심</InterestTag>
                    )}
                    <text className="postTitle">
                        <b>{post?.title}</b>
                        {noticeByStatus[info.status]}
                    </text>
                </Row>
                <CloseIcon onClick={onDelete}></CloseIcon>
            </Row>
        </GreyDiv>
    );
};

export default Notification;
