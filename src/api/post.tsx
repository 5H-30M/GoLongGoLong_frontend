import axios from "axios";

const ViewAllApi = () => {
    axios
        .get("/board")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const WriteApi = (
    title: string,
    content: string,
    id: string,
    date: string,
    period: string
) => {
    let body = {
        title: title,
        content: content,
        id: id,
        date: date,
        period: period,
    };
    axios
        .post("/board", body)
        .then(() => {
            alert("글이 작성되었습니다.");
        })
        .catch((err) => {
            console.log(err);
        });
};

const ViewApi = (postId: number) => {
    axios
        .get(`/board/${postId}`)
        .then((res) => {
            res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const UpdateApi = (
    title: string,
    content: string,
    id: string,
    date: string,
    period: string,
    postId: number
) => {
    let body = {
        title: title,
        content: content,
        id: id,
        date: date,
        period: period,
    };
    axios
        .put(`/board/${postId}`, body)
        .then(() => {
            alert("글이 수정되었습니다.");
        })
        .catch((err) => console.log(err));
};

const DeleteApi = (postId: number) => {
    axios
        .delete(`/board/${postId}`)
        .then(() => {
            alert("글이 삭제되었습니다.");
        })
        .catch((err) => console.log(err));
};

export { ViewAllApi, WriteApi, ViewApi, UpdateApi, DeleteApi };
