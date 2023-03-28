import defaultImg from "../../assets/imgs/default.png";
import { Container, CardInfo, Mark } from "./Style";

interface propsType {
    thumbnail: React.CSSProperties;
    title: string;
    author: string;
}

const Card = ({ thumbnail, title, author }: propsType) => {
    return (
        <CardInfo>
            <img src={thumbnail ? thumbnail : defaultImg}></img>
            <text className="title">{title}</text>
            <text className="author">{author}</text>
        </CardInfo>
    );
};
const EpilogueMark = () => {
    return <Mark>후기</Mark>;
};

Card.Mark = EpilogueMark;
Card.Container = Container;

export { Card };
