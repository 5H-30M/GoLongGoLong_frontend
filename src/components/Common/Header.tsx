import styled from "styled-components";
import logo from "../../assets/imgs/logo.png";
import interest from "../../assets/imgs/interest.png";
import notice from "../../assets/imgs/notice.png";
import { Link } from "react-router-dom";

const Header = () => {
    const isLogin: boolean = true;

    const renderRight = (): JSX.Element[] => {
        const result: any[] = [];
        {
            isLogin
                ? result.push(
                      <Right>
                          <Link to="/interest">
                              <img src={interest} className="menu" />
                          </Link>
                          <Link to="/notice">
                              <img src={notice} className="menu" />
                          </Link>
                          <Link
                              to="/mydonation"
                              style={{ color: "black", textDecoration: "none" }}
                          >
                              <text className="menu">기부 현황</text>
                          </Link>
                          <Link
                              to="/logout"
                              style={{ color: "black", textDecoration: "none" }}
                          >
                              <text className="menu">로그아웃</text>
                          </Link>
                      </Right>
                  )
                : result.push(
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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 68px;

    /* text */
    .menu {
        font-size: 18px;
        width: 23px;
    }
    .logo {
        font-size: 22px;
        font-weight: 800;
        font-color: "3e3e3e";
        width: 35px;
    }
`;
const Left = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;
const Right = styled(Left)`
    gap: 64px;
`;
