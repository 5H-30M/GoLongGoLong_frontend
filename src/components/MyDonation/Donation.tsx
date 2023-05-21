import { GreyDiv, StyledImg } from "components/Common/MyPageStyle";
import DonationTracking from "components/MyDonation/DonationTracking";
import { Row, Column } from "components/Common/DivStyle";
import { donationsType, postType, userType } from "utils/types";
import { useState, useEffect } from "react";
import { ViewApi } from "api/post";
import { Link } from "react-router-dom";
import { testUser } from "redux/authSlice";

interface propsType {
    info: donationsType;
}

const Donation = ({ info }: propsType) => {
    const [post, setPost] = useState<postType>();
    const [user, setUser] = useState<userType>(testUser);

    //postId로 post 정보를 가져온다.
    useEffect(() => {
        const getPost = async () => {
            setPost(await ViewApi(info.post_id));
        };

        getPost();
    }, []);

    //user 정보를 가져온다.

    return (
        <>
            {post && (
                <GreyDiv style={{ flexDirection: "column", gap: "20px" }}>
                    <Link
                        to={`/post/${info.post_id}`}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <Row style={{ gap: "24px" }}>
                            <StyledImg src={post?.images[0]}></StyledImg>
                            <Column style={{ gap: "10px" }}>
                                <text className="postTitle">{post.title}</text>
                                <text className="author">{user.nickname}</text>
                                <li>후원일 {info.donated_at}</li>
                                <li>{info.amount}원 후원</li>
                            </Column>
                        </Row>
                    </Link>
                    <DonationTracking
                        postId={post.post_id}
                        status={post.status}
                        txList={info.trx_id}
                    />
                </GreyDiv>
            )}
        </>
    );
};

export default Donation;
