import { setFilteredBy } from "redux/postSlice";
import { Container } from "./Style";
import { useAppDispatch } from "hooks/useAppDispatch";

const FilterMenu = () => {
    const dispatch = useAppDispatch();

    return (
        <Container>
            <text
                onClick={() => {
                    dispatch(setFilteredBy("new"));
                }}
            >
                신규
            </text>
            <text
                onClick={() => {
                    dispatch(setFilteredBy("urgent"));
                }}
            >
                마감 임박
            </text>
            <text
                onClick={() => {
                    dispatch(setFilteredBy("region"));
                }}
            >
                지역별
            </text>
        </Container>
    );
};

export default FilterMenu;
