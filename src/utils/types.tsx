export interface userType {}

export interface epilPostType {
    comments?: [
        {
            comment_id: number;
            content: string;
            created_at: string;
            review_id: number;
            writer_id: number;
        }
    ];
    content: string;
    createdAt?: string;
    id?: number;
    postId: number;
    receipt: string;
    usedList: object;
}

export interface postType {
    amount?: number;
    content: string;
    created_at?: string;
    images: string[];
    period: number;
    plans: object;
    post_id?: number;
    raised_people?: number;
    region?: string;
    status?: number;
    target_amount: number;
    title: string;
    uploader_id: number;
}
