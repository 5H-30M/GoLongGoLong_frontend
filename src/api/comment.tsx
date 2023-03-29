import axios from "axios";

const WriteApi = (
    writerId: string,
    content: string,
    createdAt: string,
    postId: number,
    commentId: number
) => {
    let body = {
        writerId: writerId,
        content: content,
        createdAt: createdAt,
    };
    axios
        .post(`board/${postId}/comment/${commentId}`, body)
        .then(() => {
            alert("댓글이 작성되었습니다.");
        })
        .catch((err) => {
            console.log(err);
        });
};

const DeleteApi = (postId: number, commentId: number) => {
    axios
        .delete(`board/${postId}/comment/${commentId}`)
        .then(() => {
            alert("댓글이 삭제되었습니다.");
        })
        .catch((err) => {
            console.log(err);
        });
};

export { WriteApi, DeleteApi };
