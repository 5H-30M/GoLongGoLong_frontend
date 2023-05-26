import { Container } from "components/Common/MyPageStyle";
import Search from "components/Search/Search";
import { Row } from "components/Common/DivStyle";
import Donation from "components/MyDonation/Donation";
import { donationType } from "utils/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { GetApi } from "api/donation";

const MyDonation = () => {
    const user = useAppSelector((state) => state.auth.userData);
    const [donations, setDonations] = useState<donationType[]>();
    const [filteredPosts, setFilteredPosts] = useState<
        donationType[] | undefined
    >();
    //새로고침시 filteredPosts = donations
    useEffect(() => {
        setFilteredPosts(donations);
    }, [donations]);

    useEffect(() => {
        //donations post 정보를 가져온다.
        const getDonations = async () => {
            if (user) {
                let res = await GetApi(user.id);
                setDonations(res);
            }
        };
        getDonations();
    }, [user]);

    return (
        <Container>
            <text className="title">기부 현황</text>
            {donations && (
                <Row>
                    <Row style={{ width: "100%" }}>
                        <text className="number">{donations.length}</text>
                        <text className="notice">
                            건의 기부 내역이 있습니다.
                        </text>
                    </Row>
                    <Search
                        donations={donations}
                        setFilteredPosts={setFilteredPosts}
                    />
                </Row>
            )}
            {donations?.map((item, index) => {
                if (typeof item) {
                    return <Donation key={index} donation={item} />;
                }
            })}
        </Container>
    );
};

export default MyDonation;
