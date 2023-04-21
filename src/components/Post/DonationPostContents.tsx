import { Container } from "../Common/PostStyle";
import { postType } from "redux/postSlice";

interface propsType {
    post: postType;
}

const DonationPostContents = ({ post }: propsType) => {
    return (
        <Container>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
    );
};

export default DonationPostContents;
