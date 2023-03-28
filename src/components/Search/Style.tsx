import { GreyDiv } from "components/Common/MyPageStyle";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    img {
        height: 27px;
        width: 24px;
    }
`;
const SearchBox = styled(GreyDiv)`
    justify-content: flex-start;
    align-items: center;

    padding: 0px 9px;
    gap: 10px;

    width: 450px;
    height: 38px;
`;
const Input = styled.input`
    width: 100%;
    font-size: 15px;
    border: none;
    &:focus {
        outline: none;
    }
`;

export { Container, SearchBox, Input };
