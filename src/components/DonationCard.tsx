import FundStatus from "components/FundStatus/FundStatus";
import { Card } from "./Card/Card";
import { postType } from "redux/postSlice";

interface propsType {
    post: postType;
}

const DonationCard = ({ post }: propsType) => {
    const createdAt = post.created_at ? post.created_at : "";
    const totalAmount = post.amount != undefined ? post.amount : -1;

    return (
        <Card.Container>
            <Card
                thumbnail={post.images[0]}
                title={post.title}
                author={post.uploader_id}
            />
            <FundStatus
                totalAmount={totalAmount}
                targetAmount={post.target_amount}
                createdAt={createdAt}
                period={post.period}
            />
        </Card.Container>
    );
};

export default DonationCard;
