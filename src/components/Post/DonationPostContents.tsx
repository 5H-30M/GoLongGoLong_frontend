import { Container, Line } from "../Common/PostStyle";
import { postType } from "redux/postSlice";

const DonationPostContents = ({ post }: postType) => {
    return (
        <Container>
            <text>{post.content} </text>
            <Line></Line>
        </Container>
    );
};

export default DonationPostContents;
