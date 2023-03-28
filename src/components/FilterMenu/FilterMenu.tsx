import { useState } from "react";
import { Container, Menu } from "./Style";

const FilterMenu = () => {
    const [currentMenu, setCurrentMenu] = useState<number>(0);
    const onClickMenu = (key: number) => {
        setCurrentMenu(key);
    };
    const menuArray = [
        {
            text: (
                <>
                    모금글&nbsp;&nbsp;<text>34</text>
                </>
            ),
        },
        {
            text: <>신규</>,
        },
        { text: <>마감임박</> },
    ];

    return (
        <Container>
            {menuArray.map((menu, index) => {
                return (
                    <Menu
                        key={index}
                        border={
                            currentMenu === index ? "2px solid black" : "none"
                        }
                        onClick={() => onClickMenu(index)}
                    >
                        {menu.text}
                    </Menu>
                );
            })}
        </Container>
    );
};

export default FilterMenu;
