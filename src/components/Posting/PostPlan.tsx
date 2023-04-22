import styled from "styled-components";
import { Container } from "components/Common/PostStyle";
import React, { useState, useEffect } from "react";
import { GreyButton } from "components/Common/ButtonStyle";
import add from "../../assets/imgs/add.png";
import ListInput from "./ListInput";
import { postType } from "utils/types";

interface propsType {
    data: postType;
    setData: React.Dispatch<React.SetStateAction<postType>>;
}

let globalIdx: number = 0;

const PostPlan = ({ data, setData }: propsType) => {
    //ListInput의 input 값들을 하나의 객체 배열에 저장한다.
    interface inputValueType {
        idx: number;
        planName?: string;
        planNum?: number;
    }
    const [plans, setPlans] = useState<inputValueType[]>([{ idx: 0 }]);
    const handleNameInput = (idx: number, value: string) => {
        setPlans((plans) => {
            const newData = [...plans];
            const index = newData.findIndex((item) => item.idx === idx);
            newData[index] = { ...newData[index], planName: value };
            return newData;
        });
    };
    const handleNumInput = (idx: number, value: number) => {
        setPlans((plans) => {
            const newData = [...plans];
            const index = newData.findIndex((item) => item.idx === idx);
            newData[index] = { ...newData[index], planNum: value };
            return newData;
        });
    };
    //props로 받은 data state에 내용을 저장한다.
    useEffect(() => {
        //plans의 값을 data state에 넣을 수 있는 형태로 가공하기 위해 plansData를 사용한다.
        interface plansDataType {
            [key: string]: number;
        }
        const plansData: plansDataType = {};
        plans.forEach((item) => {
            const planName = item.planName;
            const planNum = item.planNum;
            planName && planNum && (plansData[planName] = planNum);
        });
        setData({ ...data, plans: plansData });
    }, [plans]);
    //ListInput을 관리하는 변수. 처음에 하나의 ListInput을 가지고 시작한다.
    const [listInput, setListInput] = useState<React.ReactNode[]>([
        <ListInput
            key={0}
            idx={0}
            onDelete={() => {}}
            handleNameInput={handleNameInput}
            handleNumInput={handleNumInput}
        />,
    ]);
    //ListInput에서 DeleteButton 클릭시 해당 ListInput을 삭제한다.
    const deleteListInput = (idx: number) => {
        setListInput((listInput) => {
            let newList = [...listInput];
            newList = listInput.filter((item) => {
                return (item as React.ReactElement).props.idx !== idx;
            });
            return newList;
        });
        setPlans((plans) => {
            const newData = [...plans];
            const index = newData.findIndex((item) => item.idx === idx);
            newData.splice(index, 1);
            return newData;
        });
    };
    //AddButton 클릭시 listInput에 ListInput을 하나 추가한다.
    const addListInput = () => {
        globalIdx++;
        setListInput([
            ...listInput,
            <ListInput
                key={globalIdx}
                idx={globalIdx}
                onDelete={deleteListInput}
                handleNameInput={handleNameInput}
                handleNumInput={handleNumInput}
            />,
        ]);
        setPlans([...plans, { idx: globalIdx }]);
    };

    return (
        <Container>
            <text className="title">모금액 사용 계획</text>
            {listInput.map((item) => item)}
            <AddButton onClick={addListInput}>
                <img
                    src={add}
                    style={{
                        width: "20px",
                        height: "20px",
                    }}
                ></img>
            </AddButton>
        </Container>
    );
};

export default PostPlan;

const AddButton = styled(GreyButton)`
    width: 100%;
    padding: 12px;
    img {
        padding: 0;
    }
`;
