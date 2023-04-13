import { Column } from "components/Common/DivStyle";
import { commentType } from "api/comment";
import { GreyDiv } from "./Style";

const Comment = ({ comment }: commentType) => {
    //작성자 정보를 가져온다.
    //

    const now = new Date();

    console.log(comment);
    return (
        <Column style={{ gap: "8px" }}>
            <text>작성자 닉네임</text>
            <GreyDiv>{comment ? comment.content : ""}</GreyDiv>
            <text style={{ color: "#999999" }}>
                {now.getFullYear()}년 {now.getMonth() + 1}월 {now.getDay()}일
            </text>
        </Column>
    );
};

export default Comment;
