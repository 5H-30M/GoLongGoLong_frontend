import { Container } from "components/Common/MyPageStyle";
import { Row } from "components/Common/DivStyle";
import Interest from "components/MyInterest/Interest";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";

const MyInterest = () => {
    const user = useAppSelector((state) => state.auth.userData);

    return (
        <Container>
            <text className="title">관심 모금글</text>
            <Row>
                {/* <text className="number">{user.interests.length}</text> */}
                {/* <text className="notice">건의 관심 모금글이 있습니다.</text> */}
            </Row>
            {/* {user.interests.map((item, index) => {
                return <Interest key={index} postId={item} />;
            })} */}
        </Container>
    );
};

export default MyInterest;
