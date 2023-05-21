import styled from "styled-components";
import unchecked from "../../assets/imgs/unchecked.png";
import checked from "../../assets/imgs/checked.png";
import { GreyDiv } from "components/Common/MyPageStyle";
import { Column, Row } from "components/Common/DivStyle";

export const Container = styled(GreyDiv)`
    /* text */
    .unchecked_bar {
        background-color: #f1f3f5;
    }
    .checked_bar {
        background-color: #f1b95c;
    }
    .unchecked {
        background-image: url(${unchecked});
    }
    .checked {
        background-image: url(${checked});
    }
`;
export const TrackingDiv = styled(Row)`
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const Text = styled(Row)`
    justify-content: center;
    font-size: 12px;
    width: 60px;
`;
export const State = styled(Column)`
    align-items: center;
    gap: 13px;
`;
export const Circle = styled.div`
    height: 40px;
    width: 40px;
    object-fit: contain;
`;
export const Bar = styled.div`
    width: calc(100% / 4 - 3px);
    height: 8px;
    background-color: #f1b95c;
    margin-left: 2px;
    z-index: -1;
`;
