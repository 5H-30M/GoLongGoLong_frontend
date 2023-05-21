import { postType } from "utils/types";

interface propsType {
    post: postType;
}

export const calPercent = ({ post }: propsType) => {
    const totalAmount = post.amount;
    return ((totalAmount / post.target_amount) * 100).toFixed(0);
};

export const calPassDays = ({ post }: propsType) => {
    const createdAt = post.created_at;
    return (
        (new Date(new Date().toLocaleString().substr(0, 11)).getTime() -
            new Date(
                new Date(createdAt).toLocaleString().substr(0, 11)
            ).getTime()) /
        (60 * 60 * 24 * 1000)
    );
};

export const calLeftDays = ({ post }: propsType) => {
    const passDays = calPassDays({ post });
    return post.period - passDays >= 0 ? post.period - passDays : 0;
};
