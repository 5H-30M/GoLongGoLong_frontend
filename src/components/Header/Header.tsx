import { Container, Right, Left, StyledColumn } from "./Style";
import logo from "../../assets/imgs/logo.png";
import interest from "../../assets/imgs/interest.png";
import notice from "../../assets/imgs/notice.png";
import donation from "../../assets/imgs/donation.png";
import userIcon from "../../assets/imgs/user.png";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { clearUser } from "redux/authSlice";
import { StyledButton } from "components/Common/ButtonStyle";

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    //사용자 아이디 값을 가져온다.
    const userId = window.localStorage.getItem("userId");

    const handleLogout = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            //리덕스의 사용자 정보 제거
            dispatch(clearUser);
            //localStorage 내 token 정보 제거
            window.localStorage.clear();
            //메인 화면으로 이동
            navigate("/");
        }
    };
    const renderRight = (): JSX.Element[] => {
        const result: any[] = [];

        //사용자 아이디가 존재할 경우
        if (userId) {
            const id = parseInt(userId);

            result.push(
                <Right>
                    <Link
                        to={`/my/interest`}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <StyledColumn>
                            <img src={interest} className="menu" />
                            <text>관심글</text>
                        </StyledColumn>
                    </Link>
                    <Link
                        to={`/my/notification`}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <StyledColumn>
                            <img src={notice} className="menu" />
                            <text>알림</text>
                        </StyledColumn>
                    </Link>
                    <Link
                        to={`/my/donation`}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <StyledColumn>
                            <img src={donation} className="menu" />
                            <text>기부 내역</text>
                        </StyledColumn>
                    </Link>
                    <Link
                        to={"/my"}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <StyledColumn>
                            <img src={userIcon} className="menu" />
                            <text>마이 페이지</text>
                        </StyledColumn>
                    </Link>
                    <StyledButton onClick={handleLogout}>
                        <text className="menu">로그아웃</text>
                    </StyledButton>
                </Right>
            );
        }
        //사용자 아이디가 존재하지 않을 경우
        else {
            result.push(
                <Right>
                    <Link
                        to="/login"
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <text className="menu">로그인</text>
                    </Link>
                </Right>
            );
        }

        return result;
    };
    return (
        <Container>
            <Left>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    <img src={logo} className="logo" />
                </Link>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    <text className="logo">고롱고롱</text>
                </Link>
            </Left>
            {renderRight()}
        </Container>
    );
};

export default Header;
