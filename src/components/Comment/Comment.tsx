import { Column } from "components/Common/DivStyle";
import { GreyDiv } from "./Style";
import { commentType, userType } from "utils/types";
import { useState } from "react";
import { testUser } from "redux/authSlice";

interface propsType {
    comment: commentType;
}

const Comment = ({ comment }: propsType) => {
    const [user, setUser] = useState<userType>(testUser);
    //작성자 정보를 가져온다.
    //
    const date = new Date(comment.created_at);

    return (
        <Column style={{ gap: "8px", marginBottom: "30px" }}>
            <text>{user.nickname}</text>
            <GreyDiv>{comment.content}</GreyDiv>
            <text style={{ color: "#999999", fontSize: "13px" }}>
                {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}
                일
            </text>
        </Column>
    );
};

export default Comment;
