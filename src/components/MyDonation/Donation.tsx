import { GreyDiv, StyledImg } from "components/Common/MyPageStyle";
import DonationTracking from "components/MyDonation/DonationTracking";
import { Row, Column } from "components/Common/DivStyle";
import { donationType, postType } from "utils/types";
import { useState, useEffect } from "react";
import { ViewApi } from "api/post";
import { Link } from "react-router-dom";
import { dateFormat, formattedAmount } from "components/Common/CalculateInfo";
import { useAppSelector } from "hooks/useAppSelector";

interface propsType {
    donation: donationType;
}

const Donation = ({ donation }: propsType) => {
    const [post, setPost] = useState<postType>();
    const user = useAppSelector((state) => state.auth.userData);

    //postId로 post 정보를 가져온다.
    useEffect(() => {
        const getPost = async () => {
            setPost(await ViewApi(donation.post_id));
        };

        getPost();
    }, []);

    return (
        <>
            {post && (
                <GreyDiv style={{ flexDirection: "column", gap: "20px" }}>
                    <Link
                        to={`/post/${donation.post_id}`}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <Row style={{ gap: "24px" }}>
                            <StyledImg src={post?.images[0]}></StyledImg>
                            <Column style={{ gap: "10px" }}>
                                <text className="postTitle">{post.title}</text>
                                <text className="author">{user?.nickName}</text>
                                <li>
                                    후원일&nbsp;
                                    {dateFormat(
                                        new Date(
                                            donation.myTransaction.transactionCreatedAt
                                        )
                                    )}
                                </li>
                                <li>
                                    {formattedAmount(
                                        donation.myTransaction.amount
                                    )}
                                    원 후원
                                </li>
                            </Column>
                        </Row>
                    </Link>
                    <DonationTracking donation={donation} />
                </GreyDiv>
            )}
        </>
    );
};

export default Donation;
