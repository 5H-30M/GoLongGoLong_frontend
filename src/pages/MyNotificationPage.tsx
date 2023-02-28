import { Wrapper, Container } from "components/Common/MypageStyle";
import Notification from "components/MyNotificationPage/Notification";

const MyNotificationPage = () => {
    const notifications: React.ReactElement[] = [];
    const onClickClose = () => {
        // 알림 삭제
    };

    /* 임시 데이터 */
    notifications.push(<Notification onClickClose={onClickClose} />);
    notifications.push(<Notification onClickClose={onClickClose} />);
    notifications.push(<Notification onClickClose={onClickClose} />);

    return (
        <Wrapper>
            <Container>
                <text className="title">알림</text>
                {notifications}
            </Container>
        </Wrapper>
    );
};

export default MyNotificationPage;
