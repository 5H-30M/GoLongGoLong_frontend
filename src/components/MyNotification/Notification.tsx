import { GreyDiv } from "components/Common/MyPageStyle";
import { InterestTag, DonatedTag, CloseIcon } from "./Style";
import { Row } from "components/Common/DivStyle";

type Props = {
    onClickClose: () => void;
};

const Notification = ({ onClickClose }: Props) => {
    return (
        <GreyDiv>
            <Row style={{ width: "100%", justifyContent: "space-between" }}>
                <Row>
                    <InterestTag>관심</InterestTag>
                    <text className="postTitle">
                        <b>다리를 다친 뚜비를 도와주세요</b> 글의 목표 금액이
                        달성되었습니다! 🎉
                    </text>
                </Row>
                <CloseIcon onClick={onClickClose}></CloseIcon>
            </Row>
        </GreyDiv>
    );
};

export default Notification;
