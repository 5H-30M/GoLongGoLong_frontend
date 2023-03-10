import styled from "styled-components";
import unchecked from "../../assets/imgs/unchecked.png";
import checked from "../../assets/imgs/checked.png";

const DonationTracking = () => {
    return (
        <GreyDiv>
            <ColumnDiv style={{ width: "calc(100% - 74px)" }}>
                <RowDiv style={{ gap: "14px" }}>
                    <text className="tracking">내 기부금 트래킹</text>
                    <text className="more">자세히</text>
                </RowDiv>
                <TrackingDiv>
                    <RowDiv style={{ position: "absolute" }}>
                        <Bar className="checked_bar"></Bar>
                        <Bar className="checked_bar"></Bar>
                        <Bar className="unchecked_bar"></Bar>
                        <Bar className="unchecked_bar"></Bar>
                    </RowDiv>
                    <RowDiv style={{ justifyContent: "space-between" }}>
                        <CheckCircle className="checked"></CheckCircle>
                        <CheckCircle className="checked"></CheckCircle>
                        <CheckCircle className="unchecked"></CheckCircle>
                        <CheckCircle className="unchecked"></CheckCircle>
                        <CheckCircle className="unchecked"></CheckCircle>
                    </RowDiv>
                </TrackingDiv>
            </ColumnDiv>
        </GreyDiv>
    );
};

export default DonationTracking;

const GreyDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #b2b2b2;
    border-radius: 5px;
    padding: 16px 2px;

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
const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const RowDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;
const TrackingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;
const CheckCircle = styled.div`
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
