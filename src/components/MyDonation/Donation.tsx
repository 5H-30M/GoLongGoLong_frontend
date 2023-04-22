import { GreyDiv, StyledImg } from "components/Common/MyPageStyle";
import img1 from "../../assets/imgs/test/1.jpg";
import DonationTracking from "components/MyDonation/DonationTracking";
import { Row, Column } from "components/Common/DivStyle";
import { donationsType, postType } from "utils/types";
import { useState, useEffect } from "react";
import { ViewApi } from "api/post";
import { Link } from "react-router-dom";

interface propsType {
    info: donationsType;
}

const Donation = ({ info }: propsType) => {
    const [post, setPost] = useState<postType>();

    //postId로 post 정보를 가져온다.
    useEffect(() => {
        const getPost = async () => {
            setPost(await ViewApi(info.post_id));
        };

        getPost();
    }, []);

    return (
        <Link
            to={`/post/${info.post_id}`}
            style={{ color: "black", textDecoration: "none" }}
        >
            <GreyDiv style={{ flexDirection: "column", gap: "20px" }}>
                <Row style={{ gap: "24px" }}>
                    <StyledImg src={img1}></StyledImg>
                    <Column style={{ gap: "10px" }}>
                        <text className="postTitle">{post?.title}</text>
                        <text className="author">{post?.uploader_id}</text>
                        <li>후원일 {info.donated_at}</li>
                        <li>{info.amount}원 후원</li>
                    </Column>
                </Row>
                <DonationTracking status={post?.status ? post.status : -1} />
            </GreyDiv>
        </Link>
    );
};

export default Donation;
