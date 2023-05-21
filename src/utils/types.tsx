export interface donationsType {
    post_id: number;
    donated_at: string;
    amount: number;
    trx_id: string[];
}

export interface notificationsType {
    post_id: number;
    is_check: boolean;
    status: number;
    tag: boolean;
}

//donations, interests, notifications는 api로 조회해오는 것이므로 나중에 삭제
//api가 만들어지면 그때 수정할 것
export interface userType {
    user_id: number;
    donations: donationsType[];
    interests: number[];
    notifications: notificationsType[];
    fundraisings: postType[];
    profile_img_url: string;
    token_amount: number;
    nickname: string;
    sns_email: string;
    created_at: string;
    region: string;
}

export interface postingEpilType {
    content: string;
    postId: number;
    receipt: string;
    usedList: object;
}
export interface epilPostType {
    comments: [
        {
            comment_id: number;
            content: string;
            created_at: string;
            review_id: number;
            writer_id: number;
        }
    ];
    content: string;
    createdAt: string;
    id: number;
    postId: number;
    receipt: string;
    usedList: object;
}

export interface postingPostType {
    content: string;
    images: string[];
    period: number;
    plans: object;
    target_amount: number;
    title: string;
    uploader_id: number;
}
export interface postType {
    amount: number;
    content: string;
    created_at: string;
    images: string[];
    period: number;
    plans: object;
    post_id: number;
    raised_people: number;
    region: string;
    status: number;
    target_amount: number;
    title: string;
    uploader_id: number;
}

export interface commentType {
    comment_id: number;
    content: string;
    created_at: string;
    review_id: number;
    writer_id: number;
}
export interface postingCommentType {
    content: string;
    review_id: number;
    writer_id: number;
}
