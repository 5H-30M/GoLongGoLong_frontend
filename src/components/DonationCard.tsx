import FundStatus from "components/FundStatus/FundStatus";
import { Card } from "./Card/Card";
import { postType } from "redux/postSlice";

const DonationCard = ({ post }: postType) => {
    return (
        <Card.Container>
            <Card
                thumbnail={post.images[0]}
                title={post.title}
                author={post.uploader_id}
            />
            <FundStatus
                targetAmount={post.target_amount}
                createdAt={post.created_at}
                period={post.period}
            />
        </Card.Container>
    );
};

export default DonationCard;
