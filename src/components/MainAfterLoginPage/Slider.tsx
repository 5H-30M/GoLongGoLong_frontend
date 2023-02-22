import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
/* img files */
import blockchain from "../../assets/imgs/banners/blockchain.png";
import afterstory from "../../assets/imgs/banners/afterstory.png";
import catinmytown from "../../assets/imgs/banners/catinmytown.png";
import urgentcats from "../../assets/imgs/banners/urgentcats.png";
import leftChevron from "../../assets/imgs/left-chevron.png";
import rightChevron from "../../assets/imgs/right-chevron.png";

const Slider = () => {
    const [x, setX] = useState<number>(-100);
    const [trans, setTrans] = useState<boolean>(true);
    const [ismoving, setIsmoving] = useState<boolean>(); //슬라이드가 이미 움직이는 중에는 움직이라는 명령을 또 받을 수 없다.

    /* useInterval */
    interface IUseInterval {
        (callback: () => void, interval: number): void;
    }
    const useInterval: IUseInterval = (callback, interval) => {
        const savedCallback = useRef<(() => void) | null>(null);
        useEffect(() => {
            savedCallback.current = callback;
        });
        useEffect(() => {
            function tick() {
                if (savedCallback.current) {
                    savedCallback.current();
                }
            }
            let id = setInterval(tick, interval);
            return () => clearInterval(id);
        }, [interval]);
    };
    useInterval(() => {
        /* 3초마다 자동으로 다음 슬라이드로 이동 */
        if (ismoving !== true) {
            moveNext();
        }
    }, 3000);

    /* 함수 */
    const moveBefore = () => {
        setX(x + 100);
        /* 처음 위치일 때 */
        if (x == -100) {
            setTimeout(() => {
                //transition 효과 삭제
                setTrans(false);
                setX(-400);
                //transition 효과 재설정
                setTimeout(() => {
                    setTrans(true);
                }, 100);
            }, 1000);
        }
    };
    const moveNext = () => {
        setX(x - 100);
        /* 마지막 위치일 때 */
        if (x == -400) {
            setIsmoving(true);
            setTimeout(() => {
                //transition 효과 삭제
                setTrans(false);
                setX(-100);
                //transition 효과 재설정
                setTimeout(() => {
                    setTrans(true);
                    setIsmoving(false);
                }, 100);
            }, 1000);
        }
    };
    const onClickBefore = () => {
        if (ismoving !== true) {
            setIsmoving(true);
            moveBefore();
            setTimeout(() => setIsmoving(false), 1100);
        }
    };
    const onClickAfter = () => {
        if (ismoving !== true) {
            setIsmoving(true);
            moveNext();
            setTimeout(() => setIsmoving(false), 1100);
        }
    };

    return (
        <Container>
            <Slide x={x} transition={trans}>
                <Link to="/epilogue">
                    <img src={afterstory}></img>
                </Link>
                <img src={blockchain}></img>
                <img src={urgentcats}></img>
                <img src={catinmytown}></img>
                <Link to="/epilogue">
                    <img src={afterstory}></img>
                </Link>
                <img src={blockchain}></img>
            </Slide>
            <Before onClick={onClickBefore}>
                <Chevron src={leftChevron}></Chevron>
            </Before>
            <Next onClick={onClickAfter}>
                <Chevron src={rightChevron}></Chevron>
            </Next>
        </Container>
    );
};

export default Slider;

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`;
const Slide = styled.div<{ x: number; transition: boolean }>`
    width: 600vw;
    display: flex;
    flex-direction: row;
    transform: translate(${(props) => props.x}vw);
    transition: ${(props) => (props.transition ? "transform 1s " : "")};

    img {
        width: 100vw;
        object-fit: cover;
    }
`;
const Chevron = styled.img`
    width: 9px;
    height: 16px;
    opacity: 0.5;
    transition: opacity 0.2s;
`;
const Before = styled.div`
    position: absolute;
    width: 40px;
    height: 35px;
    left: 86.3932vw;
    top: 14.8438vw;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        ${Chevron} {
            opacity: 1;
        }
    }
`;
const Next = styled(Before)`
    left: calc(86.3932vw + 40px);
`;
