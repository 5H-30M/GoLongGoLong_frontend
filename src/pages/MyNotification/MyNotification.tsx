import { Container } from "components/Common/MyPageStyle";
import Notification from "components/MyNotification/Notification";
import { userType } from "utils/types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { testUser } from "redux/authSlice";

const MyNotification = () => {
    const userId = useParams().id;
    const [user, setUser] = useState<userType>(testUser);

    useEffect(() => {
        //userId를 이용해 user 정보를 가져온다.
        // const getUser = async () => {
        //     setUser(await ViewApi(id));
        // };
        // getUser();
    }, []);

    const onDelete = () => {
        //
    };

    return (
        <Container>
            <text className="title">알림</text>
            {user.notifications.map((item, index) => {
                return (
                    <Notification key={index} info={item} onDelete={onDelete} />
                );
            })}
        </Container>
    );
};

export default MyNotification;
