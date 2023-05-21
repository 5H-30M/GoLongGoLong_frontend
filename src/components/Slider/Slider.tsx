import { useState } from "react";
import useInterval from "../../hooks/useInterval";
import { Container, Slide, Chevron, Before, Next } from "./Style";
import { Link, useNavigate } from "react-router-dom";
/* img files */
import blockchain from "../../assets/imgs/banners/blockchain.png";
import afterstory from "../../assets/imgs/banners/afterstory.png";
import catinmytown from "../../assets/imgs/banners/catinmytown.png";
import urgentcats from "../../assets/imgs/banners/urgentcats.png";
import leftChevron from "../../assets/imgs/left-chevron.png";
import rightChevron from "../../assets/imgs/right-chevron.png";
import { useAppDispatch } from "hooks/useAppDispatch";
import { setFilteredBy } from "redux/postSlice";
import { StyledButton } from "components/Common/ButtonStyle";

const Slider = () => {
    const [x, setX] = useState<number>(-100);
    const [trans, setTrans] = useState<boolean>(true);
    const [ismoving, setIsmoving] = useState<boolean>(); //슬라이드가 이미 움직이는 중에는 움직이라는 명령을 또 받을 수 없다.
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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
    const onClickUrgentCats = () => {
        dispatch(setFilteredBy("urgent"));
        navigate("/");
    };
    const onclickCatinmytown = () => {
        dispatch(setFilteredBy("region"));
        navigate("/");
    };

    return (
        <Container>
            <Slide x={x} transition={trans}>
                <Link to="/epilogue">
                    <img src={afterstory}></img>
                </Link>
                <Link to="/">
                    <img src={blockchain}></img>
                </Link>
                <StyledButton onClick={onClickUrgentCats}>
                    <img src={urgentcats}></img>
                </StyledButton>
                <StyledButton onClick={onclickCatinmytown}>
                    <img src={catinmytown}></img>
                </StyledButton>
                <Link to="/epilogue">
                    <img src={afterstory}></img>
                </Link>
                <Link to="/">
                    <img src={blockchain}></img>
                </Link>
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
