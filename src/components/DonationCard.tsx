import FundStatus from "components/FundStatus/FundStatus";
import { Card } from "./Card/Card";

interface propsType {
    thumbnail: React.CSSProperties;
    title: string;
    author: string;
}

const DonationCard = ({ thumbnail, title, author }: propsType) => {
    return (
        <Card.Container>
            <Card thumbnail={thumbnail} title={title} author={author} />
            <FundStatus />
        </Card.Container>
    );
};

export default DonationCard;
