import { Container } from "components/Common/MyPageStyle";
import Search from "components/Search/Search";
import { Row } from "components/Common/DivStyle";
import Donation from "components/MyDonation/Donation";
import { userType } from "utils/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { testUser } from "App";

const MyDonation = () => {
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
            <text className="title">기부 현황</text>
            <Row>
                <Row style={{ width: "100%" }}>
                    <text className="number">{user.donations.length}</text>
                    <text className="notice">건의 기부 내역이 있습니다.</text>
                </Row>
                <Search />
            </Row>
            {user.donations.map((item, index) => {
                return <Donation key={index} info={item} />;
            })}
        </Container>
    );
};

export default MyDonation;
