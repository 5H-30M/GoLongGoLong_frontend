import styled from "styled-components";
import unchecked from "../../assets/imgs/unchecked.png";
import checked from "../../assets/imgs/checked.png";
import { GreyDiv } from "components/Common/MyPageStyle";
import { Column } from "components/Common/DivStyle";

const Container = styled(GreyDiv)`
    /* text */
    .tracking {
        font-size: 13px;
    }
    .more {
        font-size: 13px;
        color: #999999;
    }
    .unchecked_bar {
        background-color: #d9d9d9;
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
const TrackingDiv = styled(Column)`
    justify-content: center;
    align-items: center;
    position: relative;
`;
const Circle = styled.div`
    height: 40px;
    width: 40px;
    object-fit: contain;
`;
const Bar = styled.div`
    width: calc(100% / 4 - 3px);
    height: 8px;
    background-color: #d9d9d9;
    margin-left: 2px;
    z-index: -1;
`;

export { Container, TrackingDiv, Circle, Bar };
