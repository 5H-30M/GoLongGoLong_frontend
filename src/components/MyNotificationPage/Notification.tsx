import { GreyDiv, RowDiv } from "components/Common/MypageStyle";
import styled from "styled-components";
import close from "../../assets/imgs/close.png";

type Props = {
    onClickClose: () => void;
};

const Notification = ({ onClickClose }: Props) => {
    return (
        <GreyDiv>
            <RowDiv style={{ justifyContent: "space-between" }}>
                <RowDiv>
                    <InterestTag>관심</InterestTag>
                    <text className="postTitle">
                        <b>다리를 다친 뚜비를 도와주세요</b> 글의 목표 금액이
                        달성되었습니다! 🎉
                    </text>
                </RowDiv>
                <img
                    src={close}
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                    onClick={onClickClose}
                ></img>
            </RowDiv>
        </GreyDiv>
    );
};

export default Notification;

const InterestTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 9px;
    margin-right: 7px;
    gap: 10px;
    border-radius: 12px;
    background-color: #f1b95c;
    font-size: 10px;
`;
const DonatedTag = styled(InterestTag)`
    background-color: #bfbfbf;
`;
