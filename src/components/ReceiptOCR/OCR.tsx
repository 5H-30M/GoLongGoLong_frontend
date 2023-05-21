import axios from "axios";

// 네이버 CLOVA OCR API 인증 정보
const INVOKE_URL = process.env.REACT_APP_OCR_INVOKE_URL;
const CLIENT_SECRET = process.env.REACT_APP_OCR_CLIENT_SECRET;

// 사용자가 업로드한 이미지 파일을 전송하고, CLOVA OCR API로부터 총 금액을 추출하는 함수
export const processReceiptImage = async (url: string) => {
    const body = {
        version: "v1.0.2",
        requestId: "test",
        timestamp: 0,
        images: [{ format: "string", data: url, name: "testreceipt" }],
    };
    const testbody = {
        images: [
            {
                format: "png",
                name: "medium",
                data: null,
                url: "https://golong-bucket.s3.ap-northeast-2.amazonaws.com/1682698747498test_receipt.png",
            },
        ],
        lang: "ko",
        requestId: "test",
        resultType: "string",
        timestamp: 0,
        version: "V1",
    };

    try {
        // 이미지 파일을 CLOVA OCR API로 전송
        if (INVOKE_URL) {
            const { data } = await axios.post(
                "/custom/v1/22207/f9b650a0bd1ab67d16c199b06d923743c8a26f6b81feaaa8ac0eea6fb195e01a/general",
                testbody,
                {
                    headers: {
                        "Access-Control-Allow-Headers":
                            "Content-Type,x-ocr-secret",
                        "Content-Type": "application/json",
                        "X-OCR-SECRET":
                            "aXVqdGxIa1VueGl4eGtIbExGRWxGenpCS05keW5aR3Q=",
                    },
                }
            );

            console.log(data);

            // 응답으로 받은 JSON 데이터에서 총 금액 추출
            const totalAmount = data.fields.reduce(
                (total: number, field: any) => {
                    if (field.name === "") {
                        total += Number(field.inferText);
                    }
                    return total;
                },
                0
            );

            return totalAmount;
        }
    } catch (err) {
        console.error(err);
        return -1;
    }
};
