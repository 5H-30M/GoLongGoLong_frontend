import CardInfo from "components/CardInfo/CardInfo";
import { Card } from "./Card/Card";
import { postType } from "utils/types";
import { calLeftDays } from "./Common/CalculateInfo";

interface propsType {
    post: postType;
}

const DonationCard = ({ post }: propsType) => {
    return (
        <Card.Container>
            <Card
                thumbnail={post.images[0]}
                title={post.title}
                uploader_id={post.uploader_id}
            />
            <CardInfo post={post} />

            {calLeftDays({ post }) == 0 ? (
                <Card.CompleMark></Card.CompleMark>
            ) : (
                ""
            )}
        </Card.Container>
    );
};

export default DonationCard;
