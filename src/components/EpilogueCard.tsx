import { postType, epilPostType } from "utils/types";
import { Card } from "./Card/Card";
import { useState, useEffect } from "react";
import { ViewApi } from "api/post";

interface propsType {
    epilpost: epilPostType;
}

const EpilogueCard = ({ epilpost }: propsType) => {
    //postId를 통해 post의 정보를 가져온다.
    const [post, setPost] = useState<postType>();

    useEffect(() => {
        const getPost = async () => {
            setPost(await ViewApi(epilpost.postId));
        };

        getPost();
    }, []);

    return (
        <Card.Container>
            {post ? (
                <Card
                    thumbnail={post.images[0]}
                    title={post.title}
                    uploader_id={post.uploader_id}
                />
            ) : (
                ""
            )}

            <Card.EpilMark></Card.EpilMark>
        </Card.Container>
    );
};

export default EpilogueCard;
