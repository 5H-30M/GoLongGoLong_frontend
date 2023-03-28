import { Container, Right, Left } from "./Style";
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
                          <Link to="/my/interest">
                              <img src={interest} className="menu" />
                          </Link>
                          <Link to="/my/notification">
                              <img src={notice} className="menu" />
                          </Link>
                          <Link
                              to="/my/donation"
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
