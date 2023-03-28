import { Card } from "./Card/Card";

interface propsType {
    thumbnail: React.CSSProperties;
    title: string;
    author: string;
}

const EpilogueCard = ({ thumbnail, title, author }: propsType) => {
    return (
        <Card.Container>
            <Card thumbnail={thumbnail} title={title} author={author} />
            <Card.Mark></Card.Mark>
        </Card.Container>
    );
};

export default EpilogueCard;
