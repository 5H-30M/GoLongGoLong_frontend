import axios from "axios";

const ViewApi = () => {
    axios
        .get("/review")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const WriteApi = () => {
    let body = {
        // 모금 후기 게시글
    };
    axios
        .post("/review", body)
        .then(() => {
            alert("글이 작성되었습니다.");
        })
        .catch((err) => {
            console.log(err);
        });
};

const UpdateApi = (reviewId: number) => {
    let body = {
        // 수정 내용
    };
    axios
        .put(`/review/${reviewId}`)
        .then(() => {
            alert("글이 수정되었습니다.");
        })
        .catch((err) => {
            console.log(err);
        });
};

const DeleteApi = (reviewId: number) => {
    axios
        .delete(`/review/${reviewId}`)
        .then(() => {
            alert("글이 삭제되었습니다.");
        })
        .catch((err) => {
            console.log(err);
        });
};

export { WriteApi, UpdateApi, DeleteApi, ViewApi };
