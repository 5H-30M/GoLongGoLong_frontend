import styled from "styled-components";

const Container = styled.div`
    width: 236px;
    display: flex;
    flex-direction: column;
    border-bottom: 4px solid #d0d0d0;
    padding-bottom: 15px;
    margin: 25px 0px;
    gap: 26px;
`;
const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
`;
const Thumbnail = styled.img`
    height: 134px;
    background-color: #dfdfdf;
    border-radius: 10px;
    object-fit: cover;
`;
const Title = styled.text`
    font-size: 15px;
`;
const Author = styled.text`
    font-size: 10px;
    color: #999999;
`;

export { Container, PostInfo, Thumbnail, Title, Author };
