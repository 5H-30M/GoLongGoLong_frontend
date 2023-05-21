import { Wrapper } from "./Style";

interface proprType {
    notice: string;
}

const NoPostings = ({ notice }: proprType) => {
    return <Wrapper>{notice}</Wrapper>;
};

export default NoPostings;
