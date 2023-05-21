import { Container } from "components/Common/MyPageStyle";
import { Row } from "components/Common/DivStyle";
import Interest from "components/MyInterest/Interest";
import { userType } from "utils/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { testUser } from "redux/authSlice";

const MyInterest = () => {
    const userId = useParams().id;
    const [user, setUser] = useState<userType>(testUser);

    useEffect(() => {
        //userId를 이용해 user 정보를 가져온다.
        // const getUser = async () => {
        //     setUser(await ViewApi(id));
        // };
        // getUser();
    }, []);

    return (
        <Container>
            <text className="title">관심 모금글</text>
            <Row>
                <text className="number">{user.interests.length}</text>
                <text className="notice">건의 관심 모금글이 있습니다.</text>
            </Row>
            {user.interests.map((item, index) => {
                return <Interest key={index} postId={item} />;
            })}
        </Container>
    );
};

export default MyInterest;
