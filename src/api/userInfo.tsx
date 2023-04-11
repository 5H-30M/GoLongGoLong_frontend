import axios from "axios";

const RegisterInfoApi = () => {
    let body = {
        // 등록할 정보
    };
    axios
        .post("/users/my/info", body)
        .then(() => {
            // 정보 등록 로직
        })
        .catch((err) => {
            console.log(err);
        });
};

const ViewInfoApi = async () => {
    try {
        let res = await axios.get("/users/my/info");
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

const UpdateInfoApi = () => {
    let body = {
        // 업데이트할 정보
    };
    axios
        .post("/users/my/info", body)
        .then(() => {
            alert("정보가 등록되었습니다.");
            // 리다이렉트
        })
        .catch((err) => {
            console.log(err);
        });
};

const InterestApi = () => {
    axios
        .get("users/my/info/like")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const DonationApi = () => {
    axios
        .get("users/my/info/status")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export {
    RegisterInfoApi,
    ViewInfoApi,
    UpdateInfoApi,
    InterestApi,
    DonationApi,
};
