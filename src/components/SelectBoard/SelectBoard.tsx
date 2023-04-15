import { Row } from "components/Common/DivStyle";
import { Container, Menu } from "./Style";
import { Link } from "react-router-dom";
import downArrow from "../../assets/imgs/downArrow.png";
import upArrow from "../../assets/imgs/upArrow.png";
import { useState } from "react";
import FilterMenu from "components/FilterMenu/FilterMenu";

interface propsType {
    kindOfCard: string;
}
const SelectBoard = ({ kindOfCard }: propsType) => {
    const [downarrow, setDownarrow] = useState<boolean>(false);

    const handleImgClick = () => {
        setDownarrow(!downarrow);
    };
    return (
        <Container>
            <Menu
                border={kindOfCard === "donation" ? "2px solid black" : "none"}
            >
                <Link
                    to={"/"}
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <Row>
                        <>
                            모금글&nbsp;&nbsp;
                            <text className="number">34&nbsp;</text>
                        </>

                        {window.location.pathname === "/" ? (
                            <img
                                src={downarrow ? upArrow : downArrow}
                                onClick={() => {
                                    handleImgClick();
                                }}
                            ></img>
                        ) : (
                            ""
                        )}
                    </Row>
                </Link>
                {downarrow ? <FilterMenu /> : ""}
            </Menu>
            <Link
                to={"/epilogue"}
                style={{ color: "black", textDecoration: "none" }}
            >
                <Menu
                    border={
                        kindOfCard === "epilogue" ? "2px solid black" : "none"
                    }
                >
                    모금후기&nbsp;&nbsp;<text className="number">34</text>
                </Menu>
            </Link>
        </Container>
    );
};
export default SelectBoard;
