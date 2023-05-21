import { Container } from "components/Common/MyPageStyle";
import Search from "components/Search/Search";
import { Row } from "components/Common/DivStyle";
import Donation from "components/MyDonation/Donation";
import { donationsType, postType, userType } from "utils/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { testUser } from "redux/authSlice";
import { useAppSelector } from "hooks/useAppSelector";

const MyDonation = () => {
    const userId = useParams().id;
    const [user, setUser] = useState<userType>(testUser);

    //donations post 정보를 가져온다.
    const testDonation = {
        post_id: 59,
        donated_at: "2023-05-19",
        amount: 5000,
        trx_id: [
            "0xc635dd2777366734f410cf9f073ca3e73835975ab4801352fe070fbbd63b8b82",
            "0x54142A81f139e00d0bB21f1866cD66edE0b092Bd",
            "0xc635dd2777366734f410cf9f073ca3e73835975ab4801352fe070fbbd63b8b82",
            "0xc635dd2777366734f410cf9f073ca3e73835975ab4801352fe070fbbd63b8b82",
            "0xc635dd2777366734f410cf9f073ca3e73835975ab4801352fe070fbbd63b8b82",
        ],
    };
    const testDonation2 = {
        post_id: 57,
        donated_at: "2023-05-19",
        amount: 2000,
        trx_id: [
            "0xc635dd2777366734f410cf9f073ca3e73835975ab4801352fe070fbbd63b8b82",
            "0x54142A81f139e00d0bB21f1866cD66edE0b092Bd",
            "0xc635dd2777366734f410cf9f073ca3e73835975ab4801352fe070fbbd63b8b82",
            "0xc635dd2777366734f410cf9f073ca3e73835975ab4801352fe070fbbd63b8b82",
            "0xc635dd2777366734f410cf9f073ca3e73835975ab4801352fe070fbbd63b8b82",
        ],
    };
    const donations: donationsType[] = [testDonation2, testDonation];
    const [filteredPosts, setFilteredPosts] = useState<
        donationsType[] | undefined
    >();

    // //새로고침시 filteredPosts = donations
    // useEffect(() => {
    //     setFilteredPosts(donations);
    // }, [donations]);

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
                    <text className="number">
                        {/*{user.donations.length}*/}2
                    </text>
                    <text className="notice">건의 기부 내역이 있습니다.</text>
                </Row>
                <Search
                    donations={donations}
                    setFilteredPosts={setFilteredPosts}
                />
            </Row>
            {donations.map((item, index) => {
                if (typeof item) {
                    return <Donation key={index} info={item} />;
                }
            })}
        </Container>
    );
};

export default MyDonation;
