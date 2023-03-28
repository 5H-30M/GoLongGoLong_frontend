import { Row } from "components/Common/DivStyle";
import styled from "styled-components";
import close from "../../assets/imgs/close.png";

const InterestTag = styled(Row)`
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
const CloseIcon = styled.img.attrs({
    src: `${close}`,
})`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export { InterestTag, DonatedTag, CloseIcon };
