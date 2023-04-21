import AWS from "aws-sdk";

// AWS S3 설정
AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS,
    secretAccessKey: process.env.REACT_APP_SECRET,
    region: process.env.REACT_APP_REGION,
});

const s3 = new AWS.S3();

interface propsType {
    img: File;
}

const UploadImage = async ({ img }: propsType) => {
    if (img) {
        const now = new Date().getTime(); //파일 이름이 겹치지 않도록 현재 시간을 파일 이름에 포함한다.
        try {
            const result = await s3
                .upload({
                    Bucket: `${process.env.REACT_APP_BUCKET_NAME}`,
                    Key: `${now}${img.name}`,
                    Body: img,
                    ACL: "public-read",
                })
                .promise();
            return result.Location; //업로드한 이미지의 URL을 리턴한다.
        } catch (error) {
            console.error("Error uploading file: ", error);
            return "https://github.com/5H-30M/GoLongGoLong_frontend/blob/main/src/assets/imgs/default.png?raw=true";
        }
    }
};

export default UploadImage;
