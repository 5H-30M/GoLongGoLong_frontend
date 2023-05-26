export interface donationType {
    post_id: number;
    title: string;
    status: number;
    uploader_id: number;
    images: string[];
    postTransaction: transitionType;
    myTransaction: transitionType;
}

export interface transitionType {
    transactionId: string;
    amount: number;
    fromId: number;
    toId: number;
    privateKey: string;
    fromAddress: string;
    toAddress: string;
    transactionCreatedAt: string;
    type: number;
}

export interface postingDonationType {
    amount: number;
    fromId: number;
    toId: number;
}

export interface notificationsType {
    post_id: number;
    is_check: boolean;
    status: number;
    tag: boolean;
}

export interface userType_new {
    createdAt: string;
    goltokens: number;
    id: number;
    isVerified: true;
    kakaoId: number;
    name: string;
    nickName: string;
    postsByMember: postType[];
    privateKey: string;
    profileImgUrl: string;
    snsEmail: string;
    snsProfile: number;
    snsType: number;
    token: string;
    walletUrl: string;
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
    privateKey: string;
    walletAddress: string;
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
    privateKey: string;
    walletAddress: string;
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

export interface walletType {
    privateKey: string;
    walletAddress: string;
}

export interface updateUserType {
    nickName?: string;
    profileImgUrl?: string;
    region?: string;
}
