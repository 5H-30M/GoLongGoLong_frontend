import { Container, CardInfo, Mark } from "./Style";

interface propsType {
    thumbnail: string;
    title: string;
    author: number;
}

const Card = ({ thumbnail, title, author }: propsType) => {
    //작성자 id를 통해 작성자 닉네임을 가져온다.

    return (
        <CardInfo>
            <img src={thumbnail}></img>
            <text className="title">{title}</text>
            <text className="author">작성자 닉네임</text>
        </CardInfo>
    );
};
const EpilogueMark = () => {
    return <Mark>후기</Mark>;
};

Card.Mark = EpilogueMark;
Card.Container = Container;

export { Card };
