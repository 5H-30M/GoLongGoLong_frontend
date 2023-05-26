import { Container } from "components/Common/PostStyle";
import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Column } from "components/Common/DivStyle";
import defaultImg from "../../assets/imgs/default.png";
import { GreyButton } from "components/Common/ButtonStyle";
import { useNavigate, useParams } from "react-router-dom";
import { PostApi } from "api/ocr";
import { SendApi } from "api/donation";
import { useAppSelector } from "hooks/useAppSelector";
import { ViewApi } from "api/review";
import { epilPostType } from "utils/types";
import { formattedAmount } from "components/Common/CalculateInfo";

const UploadReceipt = () => {
    const epilpostId = useParams().id;
    const getPostId = async () => {
        if (epilpostId) {
            const res: epilPostType = await ViewApi(parseInt(epilpostId));
            const postId: number = res.postId;
            return postId;
        }
    };
    const navigate = useNavigate();
    const userId = window.localStorage.getItem("userId");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File>();
    const [OCRresult, setOCRResult] = useState<number>(-1);
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };
    useEffect(() => {
        const OCR = async () => {
            // 파일 선택 시 바로 OCR을 거친다.
            if (selectedFile) {
                const res = await PostApi(selectedFile.name);
                setOCRResult(res.totalPrice);
            }
        };
        OCR();
    }, [selectedFile]);

    const handleGetGOL = async () => {
        if (OCRresult < 1) {
            alert("금액이 잘못 인식되었습니다. 다시 시도해주세요.");
        } else {
            const formatted = formattedAmount(OCRresult);
            if (window.confirm(`${formatted}고롱을 수령하시겠습니까?`)) {
                try {
                    //고롱 지급 api
                    const postId = await getPostId();
                    if (postId && userId) {
                        const donation = {
                            amount: OCRresult,
                            fromId: postId,
                            toId: parseInt(userId),
                        };
                        await SendApi(donation);
                    }
                    alert(`${formatted} 고롱이 지급되었습니다.`);
                    navigate("/");
                } catch (err) {
                    alert(
                        "고롱 송금 중 오류가 발생했습니다. 다시 시도해주세요."
                    );
                    alert(`/epilogue/post/${epilpostId}`);
                }
            }
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
            <GetButton onClick={handleGetGOL}>
                {OCRresult < 1 ? 0 : formattedAmount(OCRresult)}&nbsp;
                <p style={{ color: "#F1B95C" }}>고롱</p>
                &nbsp;수령하기
            </GetButton>
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
const GetButton = styled(Row)`
    justify-content: center;
    align-items: center;
    background-color: #fcf1de;
    border-radius: 5px;

    padding: 8px 0;

    font-size: 20px;
    font-weight: bold;

    cursor: pointer;
`;
