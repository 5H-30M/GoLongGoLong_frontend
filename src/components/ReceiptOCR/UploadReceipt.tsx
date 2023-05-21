import { Container } from "components/Common/PostStyle";
import { useRef, useState, useEffect } from "react";
import UploadImage from "utils/S3";
import styled from "styled-components";
import { Row, Column } from "components/Common/DivStyle";
import defaultImg from "../../assets/imgs/default.png";
import { GreyButton } from "components/Common/ButtonStyle";
import { processReceiptImage } from "./OCR";
import { useNavigate } from "react-router-dom";

const UploadReceipt = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File>();
    const [OCRresult, setOCRResult] = useState<number>(-1);
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };
    useEffect(() => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                // base64String 변수에 파일의 Base64 인코딩 바이트 값을 저장한다.
                const base64String = reader.result as string;
                console.log(base64String);
                processReceiptImage(base64String);
            });

            reader.readAsDataURL(selectedFile);
        }
    }, [selectedFile]);
    const handleGetGOL = () => {
        if (window.confirm("653750 고롱을 수령하시겠습니까?")) {
            alert("고롱이 지급되었습니다.");
            navigate("/");
        }
    };

    return (
        <Container>
            <text className="title">영수증 사진을 업로드 해주세요</text>
            <text>
                ⭐ 영수증에 반드시 동물병원 이름이 보여야 합니다. <br />⭐
                카드정보를 반드시 가린 뒤 업로드 해주세요.
                <br /> ⭐ 최종 금액이 정확히 인식되도록 깨끗하게 촬영된 사진을
                업로드 해주세요.
                <br />⭐ 인식된 금액만큼의 토큰만 수령 가능합니다.
            </text>
            <ReceiptImg>
                <Column style={{ gap: "10px" }}>
                    <img
                        src={
                            selectedFile
                                ? URL.createObjectURL(selectedFile)
                                : defaultImg
                        }
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
                        {selectedFile && (
                            <div style={{ fontSize: "10px", width: "50%" }}>
                                {selectedFile.name}
                            </div>
                        )}
                    </Row>
                </Column>
            </ReceiptImg>
            <Result onClick={handleGetGOL}>
                {/* {OCRresult !== -1 ? OCRresult : 0}&nbsp; */}
                {selectedFile && "653750 "}
                <p style={{ color: "#F1B95C" }}>&nbsp;고롱</p>
                &nbsp;수령하기
            </Result>
        </Container>
    );
};

export default UploadReceipt;

const ReceiptImg = styled.div`
    img {
        width: 100%;
        height: 490px;
        object-fit: contain;
    }
`;
const Result = styled(Row)`
    justify-content: center;
    align-items: center;
    background-color: #fcf1de;
    border-radius: 5px;

    padding: 8px 0;

    font-size: 20px;
    font-weight: bold;

    cursor: pointer;
`;
