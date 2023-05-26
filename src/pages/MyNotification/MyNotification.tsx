import { Container } from "components/Common/MyPageStyle";
import Notification from "components/MyNotification/Notification";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";

const MyNotification = () => {
    const user = useAppSelector((state) => state.auth.userData);

    const onDelete = () => {
        //
    };

    return (
        <Container>
            <text className="title">알림</text>
            {/* {user?.notifications.map((item, index) => {
                return (
                    <Notification key={index} info={item} onDelete={onDelete} />
                );
            })} */}
        </Container>
    );
};

export default MyNotification;
