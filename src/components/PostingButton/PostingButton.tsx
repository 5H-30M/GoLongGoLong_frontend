import { Button } from "./Style";
import pencil from "../../assets/imgs/pencil.png";
import { Link } from "react-router-dom";

const PostingButton = () => {
    return (
        <Link
            to={"/posting/donation"}
            style={{ color: "black", textDecoration: "none" }}
        >
            <Button>
                <img src={pencil} style={{ width: "35px" }}></img>
            </Button>
        </Link>
    );
};

export default PostingButton;
