import { GreyButton } from "components/Common/ButtonStyle";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { postType } from "utils/types";
import DonateModal from "components/DonateModal/DonateModal";

interface propsType {
    post: postType;
}

const StatusButton = ({ post }: propsType) => {
    const navigate = useNavigate();
    const [isWriter, setIsWriter] = useState<boolean>(true);
    const [renderModal, setRenderModal] = useState<boolean>(false);
    // useEffect(()=>{
    //     const getUser=()=>{
    //         if user_id == post.uploader_id{
    //             setIsWriter(true);
    //         }
    //     }
    //     getUser();
    // }, [])

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

        switch (post.status) {
            case 0:
                result = (
                    <GreyButton onClick={handleStatus0}>기부하기</GreyButton>
                );
                break;
            case 1:
            case 4:
                result = <GreyButton>모금종료</GreyButton>;
                break;
            case 2:
                if (isWriter) {
                    result = (
                        <GreyButton onClick={handleStatus2}>
                            토큰 수령하기
                        </GreyButton>
                    );
                } else result = <GreyButton>모금종료</GreyButton>;
                break;
            case 3:
                if (isWriter) {
                    result = (
                        <GreyButton onClick={handleStatus3}>
                            후기 작성하기
                        </GreyButton>
                    );
                } else result = <GreyButton>모금종료</GreyButton>;
                break;
        }
        return result;
    };

    return (
        <>
            {handleStatus()}
            {renderModal && <DonateModal />}
        </>
    );
};

export default StatusButton;
