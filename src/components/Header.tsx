import styled from "styled-components";
import logo from "../assets/imgs/logo.png";
import interest from "../assets/imgs/interest.png";
import notice from "../assets/imgs/notice.png";
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
                              <Img src={interest} width="23" />
                          </Link>
                          <Link to="/notice">
                              <Img src={notice} width="25" />
                          </Link>
                          <Link
                              to="/mydonation"
                              style={{ color: "black", textDecoration: "none" }}
                          >
                              <Text fontSize="18">기부 현황</Text>
                          </Link>
                          <Link
                              to="/logout"
                              style={{ color: "black", textDecoration: "none" }}
                          >
                              <Text fontSize="18">로그아웃</Text>
                          </Link>
                      </Right>
                  )
                : result.push(
                      <Right>
                          <Link
                              to="/login"
                              style={{ color: "black", textDecoration: "none" }}
                          >
                              <Text fontSize="18">로그인</Text>
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
                    <Img src={logo} width="40" />
                </Link>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    <Logo fontSize="25">고롱고롱</Logo>
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
    padding: 34px 68px;
`;
const Left = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;
const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 64px;
`;
const Img = styled.img`
    width: ${(props) => props.width}px;
`;
const Text = styled.text`
    font-size: ${(props) => props.fontSize}px;
`;
const Logo = styled(Text)`
    font-weight: 800;
    font-color: "3e3e3e";
`;
