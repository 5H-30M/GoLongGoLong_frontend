import { Container, Info, Mark } from "./Style";
import { useEffect, useState } from "react";
import { ViewApi } from "api/member";
import { userType_new } from "utils/types";

interface propsType {
    thumbnail: string;
    title: string;
    uploader_id: number;
}

const Card = ({ thumbnail, title, uploader_id }: propsType) => {
    //작성자 id를 통해 작성자 정보를 가져온다.
    const [user, setUser] = useState<userType_new>();

    useEffect(() => {
        const getUser = async () => {
            setUser(await ViewApi(uploader_id));
        };

        getUser();
    }, []);

    return (
        <Info>
            <img src={thumbnail}></img>
            <text className="title">{title}</text>
            <text className="author">{user?.nickName}</text>
        </Info>
    );
};
const EpilogueMark = () => {
    return <Mark>후기</Mark>;
};
const CompleteMark = () => {
    return <Mark>모금완료</Mark>;
};

Card.EpilMark = EpilogueMark;
Card.CompleMark = CompleteMark;
Card.Container = Container;

export { Card };
