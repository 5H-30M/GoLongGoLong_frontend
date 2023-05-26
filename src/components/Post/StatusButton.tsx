import { GreyButton } from "components/Common/ButtonStyle";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { postType, userType_new } from "utils/types";
import DonateModal from "components/DonateModal/DonateModal";
import { ViewApi } from "api/member";
import { useAppSelector } from "hooks/useAppSelector";

interface propsType {
    post: postType;
}

const StatusButton = ({ post }: propsType) => {
    const navigate = useNavigate();
    const user_id = window.localStorage.getItem("userId");
    const userId = user_id ? parseInt(user_id) : 0;
    const writerId = post.uploader_id;

    const [renderModal, setRenderModal] = useState<boolean>(false);

    const handleStatus0 = () => {
        setRenderModal(!renderModal);
    };
    const handleStatus2 = () => {
        navigate(`/receiptOCR/${post.post_id}`);
    };
    const handleStatus3 = () => {
        navigate(`/posting/epilogue`);
    };
    const handleStatus = () => {
        let result: React.ReactElement = <></>;
        if (userId) {
            switch (post.status) {
                case 0:
                    result = (
                        <GreyButton onClick={handleStatus0}>
                            기부하기
                        </GreyButton>
                    );
                    break;
                case 1:
                    if (userId == writerId) {
                        result = (
                            <GreyButton onClick={handleStatus2}>
                                토큰 수령하기
                            </GreyButton>
                        );
                    } else result = <GreyButton>모금종료</GreyButton>;
                    break;
                case 2:
                    if (userId == writerId) {
                        result = (
                            <GreyButton onClick={handleStatus3}>
                                후기 작성하기
                            </GreyButton>
                        );
                    } else result = <GreyButton>모금종료</GreyButton>;
                    break;
                case 3:
                    result = <GreyButton>모금종료</GreyButton>;
                    break;
            }
        }

        return result;
    };

    return (
        <>
            {handleStatus()}
            {renderModal && <DonateModal postId={post.post_id} />}
        </>
    );
};

export default StatusButton;
