import styled from "styled-components";
import { useState } from "react";
import Post from "./Post";
/* 테스트용 이미지*/
import img1 from "../assets/imgs/test/1.jpg";
import img2 from "../assets/imgs/test/2.jpg";
import img3 from "../assets/imgs/test/3.jpg";
import img4 from "../assets/imgs/test/4.jpg";
import img5 from "../assets/imgs/test/5.jpg";
import img6 from "../assets/imgs/test/6.jpg";
import img7 from "../assets/imgs/test/7.jpg";
import img8 from "../assets/imgs/test/8.jpg";

const Board = () => {
    const [currentMenu, setCurrentMenu] = useState<number>(0);
    const onClickMenu = (key: number) => {
        setCurrentMenu(key);
    };
    const menuArray = [
        {
            text: (
                <>
                    모금글&nbsp;&nbsp;<NumOfPost>34</NumOfPost>
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
            <FilterMenu>
                {menuArray.map((menu, index) => {
                    return (
                        <Menu
                            key={index}
                            border={
                                currentMenu === index
                                    ? "2px solid black"
                                    : "none"
                            }
                            onClick={() => onClickMenu(index)}
                        >
                            {menu.text}
                        </Menu>
                    );
                })}
            </FilterMenu>
            <Posts>
                <Post
                    thumbnail={img1}
                    title={"다리를 다친 뚜비를 도와주세요"}
                    author={"카라카라케리"}
                />
                <Post
                    thumbnail={img2}
                    title={"사랑이에게 사랑을 베풀어 주세요"}
                    author={"코숏최고"}
                />
                <Post
                    thumbnail={img3}
                    title={"세찌의 수술이 시급합니다"}
                    author={"고양시캣맘"}
                />
                <Post
                    thumbnail={img4}
                    title={"양말이에게 삶의 희망을 주세요"}
                    author={"냥냥아"}
                />

                <Post
                    thumbnail={img5}
                    title={"레오가 꽃길을 걷는 그날까지"}
                    author={"캣스맘"}
                />
                <Post
                    thumbnail={img6}
                    title={"호돌이가 더이상 아프지 않도록 도와주세요"}
                    author={"냥냥걸"}
                />
                <Post
                    thumbnail={img7}
                    title={"새끼 고양이 한번만 도와주세요"}
                    author={"행복한고양이"}
                />
                <Post
                    thumbnail={img8}
                    title={"퓨리를 위해 모금 부탁드립니다"}
                    author={"고양시캣맘"}
                />
            </Posts>
        </Container>
    );
};

export default Board;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const FilterMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 57px;
`;
const Menu = styled.button<{ border: string }>`
    font-size: 20px;
    padding: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-bottom: ${(props) => props.border};
`;
const NumOfPost = styled.text`
    font-size: 20px;
    color: #f1b95c;
    font-weight: bold;
`;
const Posts = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    flex-wrap: wrap;
`;
