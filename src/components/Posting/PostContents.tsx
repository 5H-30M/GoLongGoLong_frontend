import React, { useState, useEffect } from "react";
import QuillEditor from "./QuillEditor";
import { postType } from "redux/postSlice";
import { Container, ThinLine } from "components/Common/PostStyle";
import { Row } from "components/Common/DivStyle";
import styled from "styled-components";

interface propsType {
    data: postType;
    setData: React.Dispatch<React.SetStateAction<postType>>;
}

const PostContents = ({ data, setData }: propsType) => {
    const [contents, setContents] = useState<string>("");

    //props로 받은 data state에 내용을 저장한다.
    useEffect(() => {
        setData({ ...data, content: contents });
    }, [contents]);

    return (
        <Container style={{ width: "70vw" }}>
            <Row
                style={{
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                <QuillEditor setContents={setContents} />
                <Preview dangerouslySetInnerHTML={{ __html: contents }} />
            </Row>
            <ThinLine />
        </Container>
    );
};

export default PostContents;

const Preview = styled.div`
    padding: 12px 15px;
    width: 50%;
`;
