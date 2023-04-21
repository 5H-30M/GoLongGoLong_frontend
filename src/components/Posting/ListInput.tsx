import styled from "styled-components";
import { Row } from "components/Common/DivStyle";
import React, { useState } from "react";
import { GreyButton } from "components/Common/ButtonStyle";

interface listProps {
    idx: number;
    onDelete: (idx: number) => void;
    handleNameInput: (idx: number, value: string) => void;
    handleNumInput: (idx: number, value: number) => void;
}
const ListInput = ({
    idx,
    onDelete,
    handleNameInput,
    handleNumInput,
}: listProps) => {
    const [planName, setPlanName] = useState<string>("");
    const [planNum, setPlanNum] = useState<number>();

    const handlePlan = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlanName(e.target.value);
        handleNameInput(idx, e.target.value);
    };
    const handlePlanNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = Number(e.target.value);
        if (Number.isNaN(num)) {
            alert("잘못된 입력입니다. 숫자를 입력해주세요.");
        } else {
            setPlanNum(num);
            handleNumInput(idx, num);
        }
    };
    const handleDelete = () => {
        onDelete(idx);
    };

    return (
        <Row style={{ justifyContent: "space-between" }}>
            <li>
                <input
                    type="text"
                    value={planName}
                    onChange={handlePlan}
                    placeholder="내용을 입력해 주세요(ex 입원비)"
                    required
                ></input>
            </li>
            <Row>
                <input
                    type="text"
                    value={planNum}
                    onChange={handlePlanNum}
                    placeholder="금액을 입력해 주세요"
                    style={{ width: "150px" }}
                    required
                ></input>
                원
                {idx >= 1 && (
                    <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
                )}
            </Row>
        </Row>
    );
};

export default ListInput;

const DeleteButton = styled(GreyButton)`
    width: 60px;
    height: 20px;
    margin-left: 10px;
`;
