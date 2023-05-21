import { postType } from "utils/types";

interface propsType {
    donaPosts: postType[];
    filteredBy: string;
    region: string;
}

const leftDays = (post: postType, createdAt: string) => {
    const passDays =
        (new Date(new Date().toLocaleString().substr(0, 11)).getTime() -
            new Date(
                new Date(createdAt).toLocaleString().substr(0, 11)
            ).getTime()) /
        (60 * 60 * 24 * 1000);

    const leftDays = post.period - passDays >= 0 ? post.period - passDays : 0;
    return leftDays;
};

export const Filtering = ({ donaPosts, filteredBy, region }: propsType) => {
    switch (filteredBy) {
        case "new":
            return donaPosts;
        case "urgent":
            //모금완료된 글은 제거한다.
            const tmp: postType[] = donaPosts.filter((item) =>
                leftDays(item, item.created_at)
            );
            return tmp
                .slice()
                .sort(
                    (a, b) =>
                        leftDays(a, a.created_at) - leftDays(b, b.created_at)
                );
        case "region":
            return donaPosts.slice().filter((item) => item.region === region);
    }
    return donaPosts;
};
