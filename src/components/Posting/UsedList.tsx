import styled from "styled-components";
import { Container } from "components/Common/PostStyle";
import React, { useState, useEffect, useRef } from "react";
import { GreyButton } from "components/Common/ButtonStyle";
import add from "../../assets/imgs/add.png";
import ListInput from "./ListInput";
import { epilPostType } from "redux/postSlice";
import UploadImage from "S3";
import { Column, Row } from "components/Common/DivStyle";
import defaultImg from "../../assets/imgs/default.png";

interface propsType {
    data: epilPostType;
    setData: React.Dispatch<React.SetStateAction<epilPostType>>;
}

let globalIdx: number = 0;

const UsedList = ({ data, setData }: propsType) => {
    /* listInput */
    //ListInput의 input 값들을 하나의 객체 배열에 저장한다.
    interface inputValueType {
        idx: number;
        planName?: string;
        planNum?: number;
    }
    const [use, setUse] = useState<inputValueType[]>([{ idx: 0 }]);
    const handleNameInput = (idx: number, value: string) => {
        setUse((plans) => {
            const newData = [...plans];
            const index = newData.findIndex((item) => item.idx === idx);
            newData[index] = { ...newData[index], planName: value };
            return newData;
        });
    };
    const handleNumInput = (idx: number, value: number) => {
        setUse((plans) => {
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
        use.forEach((item) => {
            const useName = item.planName;
            const useNum = item.planNum;
            useName && useNum && (plansData[useName] = useNum);
        });
        setData({ ...data, usedList: plansData });
    }, [use]);
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
        setUse((plans) => {
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
        setUse([...use, { idx: globalIdx }]);
    };

    /* receipt image */
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const img = e.target.files[0];
            const uploadImg = async () => {
                if (img) {
                    const url = await UploadImage({ img });
                    if (url) {
                        setData({
                            ...data,
                            receipt: url.split("/").slice(-1)[0],
                        });
                        setPreviewUrl(url);
                    }
                }
            };
            uploadImg();
        }
    };

    return (
        <Container>
            <text className="title">모금액 사용 내역</text>
            <Notice>❗영수증 사진을 반드시 첨부해주세요</Notice>
            <ReceiptImg>
                <Column style={{ gap: "10px" }}>
                    <img
                        src={previewUrl ? previewUrl : defaultImg}
                        alt="preview image"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInput}
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        required
                    />
                    <Row
                        style={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <GreyButton
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            파일 찾아보기
                        </GreyButton>
                        {data.receipt && (
                            <div style={{ fontSize: "10px", width: "220px" }}>
                                {data.receipt}
                            </div>
                        )}
                    </Row>
                </Column>
            </ReceiptImg>
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

export default UsedList;

const AddButton = styled(GreyButton)`
    width: 100%;
    padding: 12px;
    img {
        padding: 0;
    }
`;
const Notice = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #e5e5e5;
    padding: 10px 0;
`;
const ReceiptImg = styled.div`
    img {
        width: 100%;
        height: 490px;
        object-fit: contain;
    }
`;
