import { Container } from "components/Common/MyPageStyle";
import Notification from "components/MyNotification/Notification";

const MyNotification = () => {
    const notifications: React.ReactElement[] = [];
    const onClickClose = () => {
        notifications.pop();
    };

    /* 임시 데이터 */
    notifications.push(<Notification onClickClose={onClickClose} />);
    notifications.push(<Notification onClickClose={onClickClose} />);
    notifications.push(<Notification onClickClose={onClickClose} />);

    return (
        <Container>
            <text className="title">알림</text>
            {notifications}
        </Container>
    );
};

export default MyNotification;
