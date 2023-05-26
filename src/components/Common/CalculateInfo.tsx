import { postType } from "utils/types";

export const calPercent = (post: postType) => {
    const totalAmount = post.amount;
    return ((totalAmount / post.target_amount) * 100).toFixed(0);
};

export const calPassDays = (post: postType) => {
    const createdAt = post.created_at;
    return (
        (new Date(new Date().toLocaleString().substr(0, 11)).getTime() -
            new Date(
                new Date(createdAt).toLocaleString().substr(0, 11)
            ).getTime()) /
        (60 * 60 * 24 * 1000)
    );
};

export const calLeftDays = (post: postType) => {
    const passDays = calPassDays(post);
    return post.period - passDays >= 0 ? post.period - passDays : 0;
};

export const formattedAmount = (amount: number) => {
    const formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formatted;
};

export const dateFormat = (date: Date) => {
    const formatted: string =
        date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();

    return formatted;
};
