import styled from "styled-components";
import { GreyButton } from "components/Common/ButtonStyle";
import { Column, Row } from "components/Common/DivStyle";
import { postType } from "utils/types";
import React, { useRef, useState } from "react";
import defaultImg from "../../assets/imgs/default.png";
import UploadImage from "utils/S3";

interface propsType {
    data: postType;
    setData: React.Dispatch<React.SetStateAction<postType>>;
}

const PostInfo = ({ data, setData }: propsType) => {
    const [finDate, setFinDate] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const minDate = new Date(
        new Date(new Date().toLocaleString().substr(0, 11)).getTime() +
            86400000 * 2
    )
        .toISOString()
        .substr(0, 10);

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, title: e.target.value });
    };
    const handleTargetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = Number(e.target.value);
        if (Number.isNaN(num)) {
            alert("잘못된 입력입니다. 숫자를 입력해주세요.");
        } else {
            setData({ ...data, target_amount: num });
        }
    };
    const handleFinDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFinDate(e.target.value);
        setData({
            ...data,
            period:
                (new Date(
                    new Date(e.target.value).toLocaleString().substr(0, 11)
                ).getTime() -
                    new Date(
                        new Date().toLocaleString().substr(0, 11)
                    ).getTime()) /
                (60 * 60 * 24 * 1000),
        });
    };
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const img = e.target.files[0];
            const uploadImg = async () => {
                if (img) {
                    const url = await UploadImage({ img });
                    if (url) {
                        setData({
                            ...data,
                            images: [`${url.split("/").slice(-1)[0]}`],
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
            <input
                className="title"
                type="text"
                value={data.title}
                onChange={handleTitle}
                placeholder="제목을 입력하세요"
                maxLength={23}
                style={{ width: "100%", textAlign: "center" }}
                required
            ></input>
            <Row style={{ gap: "60px" }}>
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
                        {data.images[0] && (
                            <div style={{ fontSize: "10px", width: "220px" }}>
                                {data.images[0]}
                            </div>
                        )}
                    </Row>
                </Column>
                <Column style={{ justifyContent: "space-between" }}>
                    <Right>
                        <ColumnDiv>
                            <text className="name">목표금액</text>
                            <RowDiv>
                                <input
                                    className="number"
                                    type="text"
                                    value={
                                        data.target_amount
                                            ? data.target_amount
                                            : ""
                                    }
                                    onChange={handleTargetAmount}
                                    placeholder="목표 금액을 입력하세요"
                                    required
                                ></input>
                                <text className="unit">원</text>
                            </RowDiv>
                        </ColumnDiv>
                        <ColumnDiv>
                            <text className="name">마감날짜</text>
                            <RowDiv>
                                {/*최소 이틀 뒤의 날짜를 선택해야 한다.*/}
                                <input
                                    className="number"
                                    type="date"
                                    value={finDate}
                                    onChange={handleFinDate}
                                    min={minDate}
                                    required
                                ></input>
                                <text className="unit">일</text>
                            </RowDiv>
                        </ColumnDiv>
                    </Right>
                </Column>
            </Row>
        </Container>
    );
};

export default PostInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    gap: 50px;

    img {
        width: 573px;
        height: 429px;
        border-radius: 10px;
        object-fit: cover;
    }

    /* text */
    .title {
        font-size: 30px;
    }
    .name {
        font-size: 14px;
    }
    .number {
        font-size: 39px;
    }
    .unit,
    .small {
        font-size: 12px;
    }
`;
const Right = styled(Column)`
    gap: 28px;
`;
const ColumnDiv = styled(Column)`
    gap: 5px;
`;
const RowDiv = styled(Row)`
    align-items: flex-end;
    gap: 5px;
`;
